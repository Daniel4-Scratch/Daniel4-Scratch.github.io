// Loads a single post by slug from blogs/<slug>.md and renders via Showdown

(async function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  const titleEl = document.getElementById('post-title');
  const metaEl = document.getElementById('post-meta');
  const contentEl = document.getElementById('post-content');

  if (!slug) {
    titleEl.textContent = 'Post not found';
    contentEl.innerHTML = '<p>Missing slug parameter.</p>';
    return;
  }

  try {
    const indexRes = await fetch('blogs/index.json', { cache: 'no-store' });
    const index = indexRes.ok ? await indexRes.json() : [];
    const meta = Array.isArray(index) ? index.find(p => p.slug === slug) : null;

    if (meta) {
      titleEl.textContent = meta.title || slug;
      const date = meta.date ? new Date(meta.date).toLocaleDateString() : '';
      const read = meta.readTime ? `${meta.readTime} min read` : '';
      metaEl.textContent = [date, read].filter(Boolean).join(' • ');
      if (meta.title) document.title = meta.title + ' · Blog';
    } else {
      titleEl.textContent = slug;
    }

    const res = await fetch(`blogs/${encodeURIComponent(slug)}.md`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load post: ${res.status}`);
    const md = await res.text();

    const converter = new showdown.Converter({
      tables: true,
      ghCodeBlocks: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });

    const html = converter.makeHtml(md);
    contentEl.innerHTML = html;

    // Optional: scroll to top on load
    window.scrollTo({ top: 0, behavior: 'instant' });
  } catch (err) {
    console.error(err);
    titleEl.textContent = 'Error loading post';
    contentEl.innerHTML = '<p>There was a problem loading this article.</p>';
  }
})();
