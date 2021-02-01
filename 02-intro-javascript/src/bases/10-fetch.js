//Fetch API

const apiKey = '3cAIwc4BJRQgCBhzsu5HYA9qzfglqFXt';

//fetch devuelve un promise
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( (resp) => {
//     // console.log(resp);
//     //json() también devuelve una promise
//     // resp.json().then(data => {
//     //     console.log(data);
//     // });
//     //Las promesas pueden encadenarse
// })
peticion
.then( (resp) => resp.json()) //then correspondiente al promise de fetch
.then( ({data}) => { //then correspondiente al promise de json(), desestructuración de data
    console.log(data.images.original.url);
    const {url} = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src= url;

    document.body.append(img);

}) 
.catch(console.warn);//Un solo catch para todas las promesas




