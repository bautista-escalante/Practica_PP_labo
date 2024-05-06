class Persona{
    id;
    nombre;
    apellido;
    edad;

    constructor(id, nombre, apellido, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    } 

    verificar() {
        let retorno = false;
        if(this.edad <= 15){
            alert("la edad debe ser mayor a 15 ");
        }
        else if ( this.id == null ||this.nombre == null || this.apellido == null || this.edad == null){
            alert("error campo vacio");
        }
        else{
            retorno = true;
        }
        return retorno; 
    }

    toJson(string){
        if(this.verificar()){
            try{
                JSON.parse(string);
            }
            catch(error){
                console.error("error al convertir en json " + error);
                return null;
            }
        }
    }

    toString(objeto) {
        try {
            return jsonString = JSON.stringify(objeto);
        } catch (error) {
            console.error("Error al convertir a JSON:", error);
            return null;
        }
    }
}

export default Persona;