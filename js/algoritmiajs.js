//vamos a tener que obtener los valores de los input

//vamos a crear una funcion llamada problema3()

    //aqui usamos identificadores en html y los mandamos a llamar

    //document.queryselector va a hacer una búsqueda dentro del html de acuerdo al identificador
    // que nosotros hayamos incorporado

    //con el split identificamos el espacio
    //tengo que eliminar los espacios
    function problema3(){


        const abecedario= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","R","S","T","U","V","W","X","Y","Z"];
        var value = document.querySelector('#p3-input').value;

        var p3_verifica = value.replace(/ /g, "");
        p3_verifica = p3_verifica.toUpperCase();

        const arr = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
        var lista_numeros = [" "];
        var mayorLetras = { numero: 0, index: 0 }
        palabras = p3_verifica.split(",");
        palabras.forEach( (elemento, i, ar) => {


        const letras = [];
            for(letra of elemento){
                if(!letras.includes(letra))
                    letras.push(letra);
            }
        mayorLetras = letras.length > mayorLetras.numero ? { numero: letras.length, index: i } : mayorLetras ;
        })
        document.querySelector('#p3-output').textContent = `De las palabras ingresadas, la que tiene más letras únicas es "${palabras[mayorLetras.index]}" con ${mayorLetras.numero}`;

        

}