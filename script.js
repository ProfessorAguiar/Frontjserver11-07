let id
var myHeaders = new Headers();
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
fetch('http://localhost:3000/postagens', myInit)
    .then(function (response) {
        return (response.json())
    })
    .then(function (resp) {
        resp.map((element, index, array) => {
            id = element.id
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

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const titulo=form.titulo.value
    const imagem=form.imagem.value
    const conteudo=form.conteudo.value
    const autor=form.autor.value
    fetch("http://localhost:3000/postagens", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": (id + 1), "imagem": imagem, "titulo": titulo, "conteudo": conteudo, "autor": autor
        })
    })
        .then((response) => {
        });
})