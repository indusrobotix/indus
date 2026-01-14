fetch('data/site.json')
.then(res => res.json())
.then(data => {
  if (document.getElementById('contact-info')) {
    document.getElementById('contact-info').innerHTML =
      `<p>Email: ${data.email}</p>
       <p>Phone: ${data.phone}</p>
       <p>Location: ${data.location}</p>`;
  }

  if (document.getElementById('testimonials')) {
    data.testimonials.forEach(t => {
      document.getElementById('testimonials').innerHTML += `<p>⭐ ${t}</p>`;
    });
  }
});
