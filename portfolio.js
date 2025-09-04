// Renders a curated list of GitHub repos into #repo-list
// Uses repos.json if present; falls back to listing user repos via GitHub API

(async function(){
  const container = document.getElementById('repo-list');
  if (!container) return;

  // simple grid layout via inline style to avoid CSS edits
  container.style.display = 'grid';
  container.style.gridTemplateColumns = '1fr';
  container.style.gap = '1rem';

  const ownerDefault = 'Daniel4-Scratch';

  function parseRepoId(item){
    if (!item) return null;
    if (typeof item === 'string'){
      if (item.includes('/')){
        const [owner, name] = item.split('/');
        return { owner, name };
      }
      return { owner: ownerDefault, name: item };
    }
    if (typeof item === 'object' && item.repo){
      if (item.repo.includes('/')){
        const [owner, name] = item.repo.split('/');
        return { owner, name, ...item };
      }
      return { owner: ownerDefault, name: item.repo, ...item };
    }
    return null;
  }

  async function fetchRepoMeta(owner, name){
    const url = `https://api.github.com/repos/${owner}/${name}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    return res.json();
  }

  function makeCard(meta, overrides){
    const a = document.createElement('a');
    a.className = 'project repo-card';
    a.style.textDecoration = 'none';
    a.style.color = 'inherit';
    a.href = (overrides && overrides.homepage) || meta.homepage || meta.html_url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    const wrap = document.createElement('div');
    wrap.className = 'project-content';

    const h = document.createElement('h3');
    h.textContent = (overrides && overrides.title) || meta.name;

    const desc = document.createElement('div');
    desc.textContent = (overrides && overrides.description) || meta.description || '';

    // Optional short comments from repos.json
    const commentEl = document.createElement('small');
    const commentText = overrides && (overrides.comment || overrides.comments);
    if (commentText){
      commentEl.className = 'repo-comment';
      commentEl.textContent = String(commentText);
      commentEl.style.color = 'var(--color-secondary)';
      commentEl.style.display = 'block';
      commentEl.style.marginTop = '.25rem';
    }

    const info = document.createElement('small');
    const parts = [];
    if (meta.language) parts.push(meta.language);
    parts.push(`★ ${meta.stargazers_count}`);
    if (meta.updated_at) parts.push(`Updated ${new Date(meta.updated_at).toLocaleDateString()}`);
    info.textContent = parts.join(' • ');

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '.5rem';
    actions.style.marginTop = '.5rem';

    const repoBtn = document.createElement('a');
    repoBtn.href = meta.html_url;
    repoBtn.target = '_blank';
    repoBtn.rel = 'noopener noreferrer';
    repoBtn.className = 'btn';
    repoBtn.textContent = 'View Repo';

    const demoUrl = (overrides && overrides.homepage) || meta.homepage;
    if (demoUrl){
      const demoBtn = document.createElement('a');
      demoBtn.href = demoUrl;
      demoBtn.target = '_blank';
      demoBtn.rel = 'noopener noreferrer';
      demoBtn.className = 'btn';
      demoBtn.textContent = 'Website';
      actions.appendChild(demoBtn);
    }

    actions.appendChild(repoBtn);

    wrap.appendChild(h);
    if (desc.textContent) wrap.appendChild(desc);
  if (commentEl.textContent) wrap.appendChild(commentEl);
    wrap.appendChild(info);
    a.appendChild(wrap);
    a.appendChild(actions);

    return a;
  }

  async function loadFromList(){
    const res = await fetch('repos.json', { cache: 'no-store' });
    if (!res.ok) return null;
    const list = await res.json();
    const entries = Array.isArray(list) ? list : [];
    const cards = [];
    for (const item of entries){
      const parsed = parseRepoId(item);
      if (!parsed) continue;
      try{
        const meta = await fetchRepoMeta(parsed.owner, parsed.name);
        cards.push(makeCard(meta, typeof item === 'object' ? item : null));
      }catch(e){
        // Fallback simple link if rate-limited or missing
        const link = document.createElement('a');
        link.className = 'project repo-card';
        link.href = `https://github.com/${parsed.owner}/${parsed.name}`;
        link.textContent = `${parsed.owner}/${parsed.name}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        cards.push(link);
      }
    }
    return cards;
  }

  async function loadAllForUser(user){
    const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=12`);
    if (!res.ok) throw new Error('Failed to load repos');
    const repos = await res.json();
    return repos.map(repo => makeCard(repo));
  }

  try{
    let cards = await loadFromList();
    if (!cards || cards.length === 0){
      cards = await loadAllForUser(ownerDefault);
    }
    for (const c of cards){
      container.appendChild(c);
    }
  }catch(err){
    console.error(err);
    container.innerHTML = '<p>Unable to load repositories right now.</p>';
  }
})();
