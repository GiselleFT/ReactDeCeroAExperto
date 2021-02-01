
const nombre = 'Giselle';
const apellido = 'Flores';

//const nombreCompleto = nombre + ' ' + apellido;

//`` A lado de la P
//La concatenación se hace con template string
const nombreCompleto = `
${nombre} 
${apellido}
${1+1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);


