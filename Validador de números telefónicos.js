function telephoneCheck(str) {
    
    let pattern = /[0-9 () -]/g 
    let numeroArray = str.split(/[() -]/g)
    let arrayFinal = [];
    let cadena = "";

    // Crea array con datos númericos eliminando posibles valores nulos.
    for(let i = 0; i < numeroArray.length; i++){
        
        if(numeroArray[i].match(/[0-9]/g)){
            arrayFinal.push(numeroArray[i])
        }
    }

    if(str[str.length-1] == ')'){
        return false;
    }

    // Verifica el inicio del número de teléfono
    if(str[0].match(/[-]/g)){
        return false;
    }
    
    // Verifica la agrupación.
    for(let i = 0; i < arrayFinal.length; i++){
        if(i !=0){
            if(arrayFinal[i].length < 3){
                return false;
            }
        }
    }

    // Verifica el diseño del número de teléfono
    if(str.match(pattern) == false){
        return false
    }

    // Verifica los parentesis.
    if(str.match(/[)]/g)){
        
        if(str.match(/[(]/g) == null){        
            return false
        }
    }

    if(str.match(/[(]/g)){
        
        if(str.match(/[)]/g) == null){        
            return false
        }
    }

    // Primer grupo de posibilidades
    for(let i = 0; i < arrayFinal.length; i++){
        cadena += arrayFinal[i]
    }

    // Verificación de información

    if(cadena.length == 10){
        return true;
    }

    if(cadena.length == 11){
        if(cadena[0] == 1){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

  }
  
  console.log(telephoneCheck("55 55-55-555-5"));