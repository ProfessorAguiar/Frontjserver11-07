let id
var myHeaders = new Headers();
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
fetch('http://localhost:3000/postagens', myInit)
    .then(function (response) {
        return (response.json())
    })
    .then(function (resp) {
        resp.map((element, index, array) => {
            id=element.id
            const section = document.querySelector('section')
            const div = document.createElement('div')
            div.classList.add('cards')
            section.append(div)
            const img = document.createElement('img')
            div.append(img)
            img.src = element.imagem

            const h1 = document.createElement('h3')
            div.append(h1)
            h1.innerHTML = element.titulo

            const p = document.createElement('p')
            div.append(p)
            p.innerHTML = element.conteudo

            const autor = document.createElement('p')
            div.append(autor)
            autor.classList.add('autor')
            autor.innerHTML = element.autor

        })
        console.log(resp)
    })

function newPost(){
    fetch("http://localhost:3000/postagens", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": (id+1), "imagem":"https://images.velog.io/images/rememberme_jhk/post/2a1c5b17-c028-421f-a870-3538078a841c/js.png", "titulo": "Teste do Método POST","conteudo":"Realizando o método POST do http com fetch.", "autor": "Vinicius Aguiar"

  })
})
.then( (response) => { 
});
}