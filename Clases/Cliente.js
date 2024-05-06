import Persona from "/Clases/Persona.js";
class Cliente extends Persona
{
    compras;
    telefono;

    constructor(compras, telefono, id, nombre, apellido, edad){
        super(id, nombre, apellido, edad);
        this.compras = compras;
        this.telefono = telefono;
    }

    verificar(){
        if(this.compras < 0){
            alert("error las compras no pueden ser negativas");
        }
        else if(this.telefono < 0){
            alert("error telefono no puede ser negativo");
        }
        else if(this.compras == null || this.telefono == null){
            alert("error campo vacio");
        }
    }
}
export default Cliente;