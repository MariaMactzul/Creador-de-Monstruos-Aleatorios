let BotonGenerador = document.querySelector("#Generador")
let BotonEliminador = document.querySelector("#Eliminador")
let Monstruo = document.querySelector('.monstruo')
let SilabasNombres = ["Gro", "zzu", "rak", 'tor', 'sal', 'tra']
let Poderes = ['Salto', 'Vuelo', 'Invisibilidad', 'Rayos en las manos', 'Super Velocidad', 'Fuerza', 'Super Inteligente XD']
let colores = ['#E1EFCA', '#ECCAFF', '#A99ABD', '#E0E3F4', '#C0D8C0', '#a7bed3', '#c6e2e9', '#f1ffc4', '#ffcaaf', '#dab894']
let letras = ['black', 'gray', 'brown', 'blue']
let img = ['./monstruo.png', './monstruo2.png', './monstruo3.png', './monstruo4.png']

const Crear = () => {

    let idiceSilaba1 = Math.floor(SilabasNombres.length * Math.random())
    let idiceSilaba2 = Math.floor(SilabasNombres.length * Math.random())
    let idiceSilaba3 = Math.floor(SilabasNombres.length * Math.random())
    let nombre = SilabasNombres[idiceSilaba1] + SilabasNombres[idiceSilaba2] + SilabasNombres[idiceSilaba3]
    let indicePoder = Math.floor(Math.random() * Poderes.length)
    let Poder = Poderes[indicePoder]
    let indiceColor = Math.floor(Math.random() * colores.length)
    let indiceBorde = Math.floor(Math.random() * colores.length)
    let color = colores[indiceColor]
    let borde = colores[indiceBorde]
    let indiceLetra = Math.floor(Math.random() * letras.length)
    let letra = letras[indiceLetra]
    let imgen = img[indiceLetra]

    const monstruo =
        `<div class="card" style="width: 12rem; background-color:${color}; border: 5px solid ${borde};">
  <img src="${imgen}" class="card-img-top h-50 object-fit-contain" alt="Monstruo">
  <div class="card-body" style="color:${letra}";>
    <p class="card-text fw-bold">Nombre: ${nombre}</p>
    <p class="card-text fw-bold">Poder: ${Poder}</p>
  </div>
</div>`

    Monstruo.innerHTML += monstruo

}

BotonGenerador.addEventListener("click", () => {
    Crear()

})

BotonEliminador.addEventListener("click", () => {
    Monstruo.innerHTML = ""

})