const imagesArray1 = [
    'img/1.png', 'img/2.png','img/3.png','img/4.png','img/5.png','img/6.png'
];

const imagesArray2 = [
    'img/11.jpg', 'img/22.jpg','img/33.jpg','img/44.jpg','img/55.jpg','img/66.jpg'
];

const imagesArray3 = [
    'img/111.jpg', 'img/222.jpg','img/333.jpg','img/444.jpg','img/555.jpg','img/666.jpg'
];

const imgArray1 = [
    {id: 1, img: 'img/1.png'},
    {id: 2, img: 'img/2.png'},
    {id: 3, img: 'img/3.png'},
    {id: 4, img: 'img/4.png'},
    {id: 5, img: 'img/5.png'},
    {id: 6, img: 'img/6.png'}
    
];

const imgArray2 = [
    {id: 1, img: 'img/11.jpg'},
    {id: 2, img: 'img/22.jpg'},
    {id: 3, img: 'img/33.jpg'},
    {id: 4, img: 'img/44.jpg'},
    {id: 5, img: 'img/55.jpg'},
    {id: 6, img: 'img/66.jpg'}
    
];

const imgArray3 = [
    {id: 1, img: 'img/111.jpg'},
    {id: 2, img: 'img/222.jpg'},
    {id: 3, img: 'img/333.jpg'},
    {id: 4, img: 'img/444.jpg'},
    {id: 5, img: 'img/555.jpg'},
    {id: 6, img: 'img/666.jpg'}
    
];

function imagenes(){
    if(document.getElementById("g1").checked === true){
        "img/img1.png";
    }
}


function algoritmoBurbujaAsc() {
    alert("Soy la función burbuja asc");
}

function algoritmoBurbujaDesc() {
    alert("Soy la función burbuja desc");
}

function algoritmoSeleccionAsc() {
    alert("Soy la función selección asc");
}

function algoritmoSeleccionDesc() {
    alert("Soy la función selección desc");
}

function algoritmoInsercionAsc() {
    alert("Soy la función inserción asc");
}

function algoritmoInsercionDesc() {
    alert("Soy la función inserción desc");
}

function getRandomStrings(number, array){
    var strings = [];
    for(var i = 0; i < number; i++){
        var validValues = array.filter(el => !strings.includes(el) );
        var rand = Math.floor(Math.random() * validValues.length);
        strings.push(validValues[rand])
    }
    return strings;
}
console.log(getRandomStrings(imagesArray1.length, imagesArray1));
console.log(imagesArray1);

function showSelected() {
    let seleccion = document.getElementById("algoritmoSeleccionado").value;
    let nono = "¡Seleccione el sentido de ordenamiento!";
    document.getElementById("algSelected").innerHTML = seleccion;
    /* Para obtener el texto que ve el usuario */
    let selected_name = document.getElementById("algoritmoSeleccionado");
    let opcion = selected_name.options[selected_name.selectedIndex].text;
    alert(opcion);
    
    if ((seleccion === "1") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoBurbujaAsc();
    }else if((seleccion === "1") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoBurbujaDesc();
    }else if((seleccion === "2") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoInsercionAsc();
    }else if((seleccion === "2") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoInsercionDesc();
    }else if((seleccion === "3") && (document.getElementById("tipoOrdAlg").checked)){
        algoritmoSeleccionAsc();
    }else if((seleccion === "3") && (document.getElementById("tipoOrdAlg2").checked)){
        algoritmoSeleccionDesc();
    }else{
        document.getElementById("nonas").innerHTML = nono;
    }
}