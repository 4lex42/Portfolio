
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projectGallery');
    data.forEach(proj => {
      const div = document.createElement('div');
      div.className = 'project';
      div.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.code}" target="_blank">Code</a> |
      <a href="${proj.demo}" target="_blank">Demo</a>
    `;

      container.appendChild(div);
    });
  });
