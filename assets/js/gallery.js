fetch('data/gallery.json')
.then(res => res.json())
.then(images => {
  const g = document.getElementById('gallery');
  images.forEach(i => {
    g.innerHTML += `
      <div class="card">
        <img src="${i.image}" width="100%">
        <p>${i.title}</p>
      </div>`;
  });
});
