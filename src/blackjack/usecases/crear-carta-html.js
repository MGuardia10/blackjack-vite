
/**
 * Crea lel HTML de la carta
 * @param {string} carta
 * @returns HTMLELement
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('Carta es un argumento obligatorio');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}