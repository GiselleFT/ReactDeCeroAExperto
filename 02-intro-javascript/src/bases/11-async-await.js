//Async - await

const getImagen = async () => {
    /*Para el manejo de errores
    se utiliza el bloque try catch*/
    try {
        const apiKey = '3cAIwc4BJRQgCBhzsu5HYA9qzfglqFXt';
        //Await lo convierte en response, 
        //espera a que la promesa termine para continuar la ejecución
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        // console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }
}

getImagen();
