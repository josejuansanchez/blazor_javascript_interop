window.suma = (n1, n2) => {
    // Obtenemos los elementos del DOM
    const a1 = document.getElementById(n1);
    const a2 = document.getElementById(n2);

    // Operador ?. : Evita error si a1 o a2 es null
    // Operador ?? : Si el valor anterior es null o undefined, usa '0'
    const numero1 = parseInt(a1?.value ?? '0', 10);
    const numero2 = parseInt(a2?.value ?? '0', 10);

    // Devolvemos la suma
    return numero1 + numero2;
};
