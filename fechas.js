const fechaactual =  new Date()

console.log(fechaactual)

const nacimiento = new Date(1994,2,08)

console.log(nacimiento)

const indicador = (fechaactual > nacimiento )

console.log(indicador)

const mesnacimiento =  nacimiento.getMonth() + 1

console.log(mesnacimiento)

const añonacimiento =  nacimiento.getFullYear()

console.log(añonacimiento)