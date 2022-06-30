function validaArray(array,num) {
    try {
        if (!array && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");
    
        if (typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");
    
        if (array.length !== num) throw new RangeError("Tamanho inválido");

        return array;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
                console.log("Este erro é um RangeError!");
                console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: "+ e);
        }
    }
}

// Não apresenta nenhum erro
// console.log(validaArray([1, 4], 2));

// function validaArray(arr, tamanho) {
//     try {
//       if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");
  
//       return arr;
//     } catch(e) {
//       if (e instanceof RangeError) {
//         return console.log(e.message);
//       } else {
//         return e;
//       }
//     }
//   } 