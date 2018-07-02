'use strict'

window.addEventListener("load", () =>{
  var posts = [
    {
      img: 'https://picsum.photos/800/600?image=19',
      title: 'Prueba 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio illum adipisci. Odit saepe quia quibusdam repellendus, nemo sed amet ratione fugit cupiditate neque possimus odio vero libero quis quisquam!',
      avatar: '../img/avatar.png',
      name: 'Nombre 1',
      data: moment().date() + " " + moment().format("MMMM") + " " + moment().format("YYYY")
    },
    {
      img: 'https://picsum.photos/800/600?image=27',
      title: 'Prueba 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio illum adipisci. Odit saepe quia quibusdam repellendus, nemo sed amet ratione fugit cupiditate neque possimus odio vero libero quis quisquam!',
      avatar: '../img/avatar.png',
      name: 'Nombre 2',
      data: moment().date() + " " + moment().format("MMMM") + " " + moment().format("YYYY")
    },
    {
      img: 'https://picsum.photos/800/600?image=32',
      title: 'Prueba 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio illum adipisci. Odit saepe quia quibusdam repellendus, nemo sed amet ratione fugit cupiditate neque possimus odio vero libero quis quisquam!',
      avatar: '../img/avatar.png',
      name: 'Nombre 3',
      data: moment().date() + " " + moment().format("MMMM") + " " + moment().format("YYYY")
    },
    {
      img: 'https://picsum.photos/800/600?image=43',
      title: 'Prueba 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio illum adipisci. Odit saepe quia quibusdam repellendus, nemo sed amet ratione fugit cupiditate neque possimus odio vero libero quis quisquam!',
      avatar: '../img/avatar.png',
      name: 'Nombre 4',
      data: moment().date() + " " + moment().format("MMMM") + " " + moment().format("YYYY")
    },
    {
      img: 'https://picsum.photos/800/600?image=58',
      title: 'Prueba 5',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio illum adipisci. Odit saepe quia quibusdam repellendus, nemo sed amet ratione fugit cupiditate neque possimus odio vero libero quis quisquam!',
      avatar: '../img/avatar.png',
      name: 'Nombre 5',
      data: moment().date() + " " + moment().format("MMMM") + " " + moment().format("YYYY")
    },
    {
      img: 'https://picsum.photos/800/600?image=64',
      title: 'Prueba 6',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio illum adipisci. Odit saepe quia quibusdam repellendus, nemo sed amet ratione fugit cupiditate neque possimus odio vero libero quis quisquam!',
      avatar: '../img/avatar.png',
      name: 'Nombre 6',
      data: moment().date() + " " + moment().format("MMMM") + " " + moment().format("YYYY")
    }
  ];
  posts.forEach(function(item, index) {
    var posting = `
    <div class="card-item">
      <div class="card">
        <div>
          <a href="#"><img src="${item.img}" class="card-img"></a>
        </div>
        <div class="card-conent">
        <a href="#" class="card-title">${item.title}</a>
          <p class="card-info">${item.content}</p>
          <a href="#" class="btn btn-blog">Seguir leyendo...</a>
          <footer class="card-footer">
            <div class="card-cread">
              <a href="#">
                <img src="${item.avatar}" class="card-avatar" alt="avatar">
              </a>
              <a href="#" class="card-name">${item.name}</a>
              <p class="card-data">${item.data}</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
    `;
    $("#blog").append(posting);
  });
})


