
import {arrayPostagens} from './lista_postagem.js';

const main = document.querySelector('main');

for(let i= 0; i < arrayPostagens.length; i++){

//CRIAR ELEMENTO 
  const article = document.createElement('article');
  console.log(article);

  //POPULAR ELEMENTO
  article.innerHTML = `<h3>${arrayPostagens[i].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
  <div class="data">${arrayPostagens[i].data}</div>
  <p>${arrayPostagens[i].texto}</p> `


//ADD A DOM
 
  main.appendChild(article);



}
