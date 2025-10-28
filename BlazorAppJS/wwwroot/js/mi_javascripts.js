// Ejemplo 1
// Función asignada al objeto window como propiedad global
window.mostrarMensaje = (nombre) => {
    console.log(`Hola desde JavaScript, ${nombre}`);
    alert(`Hola ${nombre}, este mensaje viene de JavaScript`);
}

//--------------------------------------------------------

// Ejemplo 2
// Función que devuelve un string a C#
window.obtenerFechaActual = () => {
    const hoy = new Date();
    return hoy.toLocaleString();
}

//--------------------------------------------------------

// Ejemplo 3
// Función JavaScript que llama a un método de C#
window.iniciarSeguimientoRaton = (dotnetRef) => {
    document.addEventListener('mousemove', (e) => {
        dotnetRef.invokeMethodAsync('ActualizarPosicion', e.clientX, e.clientY);
    });
}

//--------------------------------------------------------

// Ejemplo 4
// Referencia: https://www.telerik.com/blogs/blazor-basics-blazor-javascript-interop-calling-javascript-net
function createChart(htmlElementId, data, label) {
    new Chart(
        document.getElementById(htmlElementId),
        {
            type: 'bar',        // Tipos: line, bar, radar, doughnut, pie, polarArea, bubble, scatter
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: label,
                        data: data.map(row => row.salary)
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        }
    );
}

function disposeChart(htmlElementId) {
    const chartStatus = Chart.getChart(htmlElementId);
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
}

//--------------------------------------------------------

// Ejemplo 5
// Función que duplica el texto de un campo de entrada en otro elemento
window.duplicaTexto = (entrada, salida) => {
    // Operador ?. : Evita error si el elemento no existe (no intenta acceder a .value de null)
    // Operador ?? : Si el valor es null o undefined, reemplaza por una cadena vacía ('')
    const valor = document.getElementById(entrada)?.value ?? '';
    const elemento = document.getElementById(salida);
    if (!elemento) return;
    elemento.innerHTML = ' ' + valor;
}

//--------------------------------------------------------

// Ejemplo 6
// Función que utiliza la API de geolocalización del navegador
// y envía los datos de latitud y longitud a un método C# del componente
window.obtenerUbicacion = async (dotnetRef) => {
    if (!navigator.geolocation) {
        alert("La geolocalización no está disponible en este navegador.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        pos => {
            // Llama al método C# pasando las coordenadas obtenidas
            dotnetRef.invokeMethodAsync("MostrarUbicacion", pos.coords.latitude, pos.coords.longitude);
        },
        err => {
            alert("No se pudo obtener la ubicación: " + err.message);
        }
    );
};

//--------------------------------------------------------

// Ejemplo 7
// Cambia el color del texto de un elemento con el id indicado
window.cambiarColor = (elementId, color) => {
    const elemento = document.getElementById(elementId);
    if (elemento)
        elemento.style.color = color;
};

// Cambia el tamaño de la fuente de un elemento
window.cambiarTamaño = (elementId, size) => {
    const elemento = document.getElementById(elementId);
    if (elemento)
        elemento.style.fontSize = size + "px";
};

// Cambia el contenido de texto de un elemento
window.actualizarTexto = (elementId, texto) => {
    const elemento = document.getElementById(elementId);
    if (elemento)
        elemento.innerText = texto;
};

//--------------------------------------------------------

// Ejemplo 8
// Guarda un valor en el almacenamiento local
window.guardarDato = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

// Lee un valor del almacenamiento local
window.leerDato = (clave) => {
    return localStorage.getItem(clave);
};

// Elimina un valor del almacenamiento local
window.eliminarDato = (clave) => {
    localStorage.removeItem(clave);
};
