
//datos del Json

const jsonPath = "JSON/menu.JSON";
async function jsonData(path) {
    const respuesta = await fetch(path);
    const menu = await respuesta.json();
    const cards = document.getElementById('menu--card');

    menu.menu.forEach(menu => {
        const card = document.createElement('div');
        card.className ='card';
        card.id = 'card'
        cards.append(card);
        var prueba = `
            <div class="imgContainer cardimg 1">
            <img class="imgCard" src=${menu.Imagen}>
            </div>
            <div class="titulo--container">
            <h2>${menu.Nombre}</h2>
            </div>
            <div class="description--container">
            <p class="descripcion">${menu.Descripcion}</p>
            </div>`;
            card.innerHTML = prueba;
    });
}
jsonData(jsonPath);











