function multiplicacion (x , y){
    if ( x != 0 && y != 0){
        return (x * y);
    } else{
        return 'El resultado es cero';
    }
}


module.exports = multiplicacion;