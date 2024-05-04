import Persona from ".Clases\\Persona.js";
class Cliente extends Persona
{
    compras;
    telefono;

    constructor(compras, telefono, id, nombre, apellido, edad){
        super(id, nombre, apellido, edad);
        this.compras = compras;
        this.telefono = telefono;
    }

}