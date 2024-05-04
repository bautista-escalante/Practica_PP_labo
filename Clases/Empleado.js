import Persona from ".Clases\\Persona.js";
class Empleado extends Persona
{
    sueldo;
    ventas;

    constructor(sueldo, ventas, id, nombre, apellido, edad){
        super(id, nombre, apellido, edad);
        this.sueldo = sueldo;
        this.ventas = ventas;
    }
}