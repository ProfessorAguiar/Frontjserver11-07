fetch('http://localhost:3000/postagens')
    .then(function (response) {
        return (response.json())
    })
    .then(function (resp) {
        resp.map((element, index, array) => {
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