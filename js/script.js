let number = +prompt( `Введите целое число` );
let dev = 2;
number < 1 ? alert(`NaN`) : number === 1 ? alert(`1`) : null;
for ( dev; dev <= number; dev++ ) {
    comput = number % dev;
    if ( number === dev ) {
        alert( `Это простоe число` );
        break;
    } else if ( comput === 0 ) {
        alert( `Минимальный делитель ${dev}` );
        break;
    }
}