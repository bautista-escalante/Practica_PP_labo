import Persona from "/Clases/Persona.js";
class Empleado extends Persona
{
    sueldo;
    ventas;

    constructor(sueldo, ventas, id, nombre, apellido, edad){
        super(id, nombre, apellido, edad);
        this.sueldo = sueldo;
        this.ventas = ventas;
    }

    verificar(){
        if(this.sueldo < 0 || this.ventas < 0){
            alert("error el sueldo o las ventas no pueden ser negativas");
        }
        else if(this.sueldo == null || this.ventas == null){
            alert("error campo vacio");
        }
    }

    toJson(string){
        if(this.verificar()){
            try{
                return JSON.parse(string);
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
            console.error("Error al convertir a string:", error);
            return null;
        }
    }
}
export default Empleado;