/*
    Objetivo:
        Cambiar únicamente la refencia de SuperHeroe a Heroe
        OJO!: Pero no reemplazar los strings

    Tips:
        Replace Symbol
        F2
*/

import { SuperHeroe } from './01-clase-definiciones';

const wolverine = new SuperHeroe();
const ironman   = new SuperHeroe();
const spiderman = new SuperHeroe();

function saludar() {
    return 'El SuperHeroe Wolverine es genial!';
}

function gritar() {
    return 'El SuperHeroe en este string no se debe de cambiar';
}

