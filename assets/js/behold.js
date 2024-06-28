document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('behold-gallery');
    const apiUrl = 'https://behold.so/api/v1/users/YOUR_USER_ID/feed?apiKey=YOUR_API_KEY';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const article = document.createElement('article');
                    const link = document.createElement('a');
                    link.href = item.link;
                    link.className = 'image';
                    link.target = '_blank';
                    const img = document.createElement('img');
                    img.src = item.image;
                    img.alt = item.title || 'Instagram Post';
                    link.appendChild(img);
                    const caption = document.createElement('div');
                    caption.className = 'caption';
                    const h3 = document.createElement('h3');
                    h3.textContent = item.title || 'Instagram Post';
                    const p = document.createElement('p');
                    p.textContent = item.description || '';
                    caption.appendChild(h3);
                    caption.appendChild(p);
                    article.appendChild(link);
                    article.appendChild(caption);
                    galleryContainer.appendChild(article);
                });
            }
        })
        .catch(error => console.error('Error fetching Behold.so feed:', error));
});
