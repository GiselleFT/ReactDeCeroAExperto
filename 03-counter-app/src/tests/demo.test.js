
/*describe se utiliza para agrupar las pruebas */
describe('Pruebas en el archivo demo.test.js', () =>{

    test('Deben ser iguales los Strings', () => {
        /*1. Inicialización */
        const mensaje = 'Hola Mundo';
    
        /*2. Estímulo */
        const mensaje2 = `Hola Mundo!`;
    
        /*3. Observar el comportamiento 
        toBe hace la comparación de equidad ===*/
        expect(mensaje).toBe(mensaje2);
    
    })

});



