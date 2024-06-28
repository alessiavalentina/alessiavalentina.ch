document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('behold-gallery');
    const apiUrl = 'https://feeds.behold.so/TvLlp6N8ElIk4FWR5cfa';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.posts && data.posts.length > 0) {
                data.posts.forEach(post => {
                    const article = document.createElement('article');
                    const link = document.createElement('a');
                    link.href = post.permalink;
                    link.className = 'image';
                    link.target = '_blank';
                    const img = document.createElement('img');
                    img.src = post.mediaUrl;
                    img.alt = post.caption || 'Instagram Post';
                    link.appendChild(img);
                    const caption = document.createElement('div');
                    caption.className = 'caption';
                    const h3 = document.createElement('h3');
                    h3.textContent = post.caption || 'Instagram Post';
                    caption.appendChild(h3);
                    article.appendChild(link);
                    article.appendChild(caption);
                    galleryContainer.appendChild(article);
                });
            }
        })
        .catch(error => console.error('Error fetching Behold.so feed:', error));
});
