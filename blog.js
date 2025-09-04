// Renders the list of blog posts from blogs/index.json

(async function () {
  const container = document.getElementById('blog-list');
  if (!container) return;

  // Basic styles if not present in CSS
  container.style.display = 'grid';
  container.style.gap = '1rem';

  try {
    const res = await fetch('blogs/index.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load posts index: ${res.status}`);
    const posts = await res.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      container.innerHTML = '<p>No posts yet.</p>';
      return;
    }

    // Sort by date desc if dates present
    posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

    const list = document.createElement('div');
    for (const post of posts) {
      const card = document.createElement('a');
      card.className = 'blog-card';
      card.href = `post.html?slug=${encodeURIComponent(post.slug)}`;

      const title = document.createElement('h3');
      title.textContent = post.title || post.slug;
      const meta = document.createElement('p');
      meta.className = 'blog-meta';
      const date = post.date ? new Date(post.date).toLocaleDateString() : '';
      const read = post.readTime ? `${post.readTime} min read` : '';
      meta.textContent = [date, read].filter(Boolean).join(' • ');
      const excerpt = document.createElement('p');
      excerpt.className = 'blog-excerpt';
      excerpt.textContent = post.excerpt || '';

      card.appendChild(title);
      if (meta.textContent) card.appendChild(meta);
      if (excerpt.textContent) card.appendChild(excerpt);
      list.appendChild(card);
    }

    container.appendChild(list);
  } catch (err) {
    console.error(err);
    container.innerHTML = '<p>Failed to load posts.</p>';
  }
})();
