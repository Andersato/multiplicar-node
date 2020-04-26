let jugadores = ['David', 'Tena', 'Jeffer', 'Carlos', 'Anderson', 'Aleatorio']

let grupo1 = []
let grupo2 = []

console.log('Jugadores: ', jugadores);
let item = 0
do {
    let pos = Math.round(Math.random() * (jugadores.length - 1))
    if (item % 2 === 0) {
        grupo1.push(jugadores[pos])
    } else {
        grupo2.push(jugadores[pos])
    }

    jugadores.splice(pos, 1)
    item++;
    console.log('Grupo1: ', grupo1);
    console.log('Grupo2: ', grupo2);
} while (jugadores.length > 0)