let quitar = document.querySelector('.quitar')
let agregar = document.querySelector('.agregar')

let carritoContador = document.querySelector(".carritoContador")

let contador = 0

agregar.onclick = (e) =>{
    contador += 1
    carritoContador.innerText = contador
}

quitar.onclick = (e) =>{
    contador -= 1
    carritoContador.innerText = contador
}