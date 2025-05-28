//var deportes = {
//    conBalon: ["Futbol", "Basketball", "Rugby"],
//    sinBalon: ["Boxeo", "Surf", "Trekking"],
//};

//var persona = {nombre: "Lucas", edad: 26, estudios: {esProgramador: true}};

//console.log(persona.edad);
//persona.edad = "45";
//console.log(persona.edad);

//var autos = {};
//autos.marcas = ["Ford", "Audi", "Ferrari"];
//delete autos.marcas;
//console.log(autos);

//var misFunciones = {
//    saludar: function () {
//        console.log("Hola");
//    },
//};

//misFunciones.saludar();

var atuendos = { manos: ["Guantes", "Anillos"] , pies: ["Zapatos", "Soquetes"] };

//console.log(atuendos.manos);

atuendos["piernas"] = ["Bermudas", "Pantalones"];
//console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Hambuerguesas", "Papas Fritas"];
};

diferenciaDeNotaciones("saludable", "noSaludable");
console.log(comidas);

