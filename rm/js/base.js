var escena = new THREE.Scene(),
camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000),
color = new THREE.Color("#FFA621"),
controls;

var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth,window.innerHeight);
render.setClearColor(color);
document.body.appendChild(render.domElement);
render.render(escena,camera);

controls = new THREE.OrbitControls(camera,render.domElement);

var geometry = new THREE.BoxGeometry(600,3,600,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "black" } ),
cube = new THREE.Mesh(geometry, material);
/*---------------------------------------------------------*/
/*endfondo*/
/*---------------------------------------------------------*/

var geometry1 = new THREE.BoxGeometry(200,250,200,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
edificio = new THREE.Mesh(geometry1, material);

var geometry2 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana1 = new THREE.Mesh(geometry2, material);

var geometry3 = new THREE.BoxGeometry(260,5,260,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "green" } ),
baseEdificio = new THREE.Mesh(geometry3, material);

var geometry4 = new THREE.BoxGeometry(20,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "grey" } ),
entradaEdificio = new THREE.Mesh(geometry4, material);

var geometry5 = new THREE.BoxGeometry(20,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "grey" } ),
entradaEdificio2 = new THREE.Mesh(geometry5, material);

var geometry6 = new THREE.BoxGeometry(0.5,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "black" } ),
barraentradaEdificio = new THREE.Mesh(geometry6, material);

var geometry7 = new THREE.BoxGeometry(60,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
vidrioLadoEdificio = new THREE.Mesh(geometry7, material);

var geometry8 = new THREE.BoxGeometry(60,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
vidrioLadoEdificio2 = new THREE.Mesh(geometry8, material);
/*---------------------------------------------------------*/

var geometry10 = new THREE.BoxGeometry(0.5,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "black" } ),
barraventana1Edificio = new THREE.Mesh(geometry10, material);

var geometry11 = new THREE.BoxGeometry(0.5,35,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "black" } ),
barraventana2Edificio = new THREE.Mesh(geometry11, material);
/*---------------------------------------------------------*/

var geometry9 = new THREE.BoxGeometry(200,12,6,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio = new THREE.Mesh(geometry9, material);

var geometry12 = new THREE.BoxGeometry(220,6,220,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio2 = new THREE.Mesh(geometry12, material);

var geometry13 = new THREE.BoxGeometry(220,6,220,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio3 = new THREE.Mesh(geometry13, material);

var geometry14 = new THREE.BoxGeometry(220,6,220,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio4 = new THREE.Mesh(geometry14, material);

var geometry15 = new THREE.BoxGeometry(220,6,220,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio5 = new THREE.Mesh(geometry15, material);

var geometry16 = new THREE.BoxGeometry(220,6,220,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio6 = new THREE.Mesh(geometry16, material);

var geometry17 = new THREE.BoxGeometry(220,6,220,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio7 = new THREE.Mesh(geometry17, material);

var geometry18 = new THREE.BoxGeometry(230,6,230,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "beige" } ),
estructuraEdificio8 = new THREE.Mesh(geometry18, material);
/*---------------------------------------------------------*/
var geometry19 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana12 = new THREE.Mesh(geometry19, material);

var geometry20 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana13 = new THREE.Mesh(geometry20, material);

var geometry21 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana14 = new THREE.Mesh(geometry21, material);

var geometry22 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana15 = new THREE.Mesh(geometry22, material);

var geometry23 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana16 = new THREE.Mesh(geometry23, material);

var geometry29 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana21 = new THREE.Mesh(geometry29, material);

var geometry24 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana22 = new THREE.Mesh(geometry24, material);

var geometry25 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana23 = new THREE.Mesh(geometry25, material);

var geometry26 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana24 = new THREE.Mesh(geometry26, material);

var geometry27 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana25 = new THREE.Mesh(geometry27, material);

var geometry28 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana26 = new THREE.Mesh(geometry28, material);

var geometry30 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana31 = new THREE.Mesh(geometry30, material);

var geometry31 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana32 = new THREE.Mesh(geometry31, material);

var geometry32 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana33 = new THREE.Mesh(geometry32, material);

var geometry33 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana34 = new THREE.Mesh(geometry33, material);

var geometry34 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana35 = new THREE.Mesh(geometry34, material);

var geometry35 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana36 = new THREE.Mesh(geometry35, material);

var geometry36 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana41 = new THREE.Mesh(geometry36, material);

var geometry37 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana42 = new THREE.Mesh(geometry37, material);

var geometry38 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana43 = new THREE.Mesh(geometry38, material);

var geometry39 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana44 = new THREE.Mesh(geometry39, material);

var geometry40 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana45 = new THREE.Mesh(geometry40, material);

var geometry41 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana46 = new THREE.Mesh(geometry41, material);

var geometry42 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana51 = new THREE.Mesh(geometry42, material);

var geometry43 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana52 = new THREE.Mesh(geometry43, material);

var geometry44 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana53 = new THREE.Mesh(geometry44, material);

var geometry45 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana54 = new THREE.Mesh(geometry45, material);

var geometry46 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana55 = new THREE.Mesh(geometry46, material);

var geometry47 = new THREE.BoxGeometry(16,25,202,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana56 = new THREE.Mesh(geometry47, material);

var geometry48 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana111 = new THREE.Mesh(geometry48, material);

var geometry49 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana112 = new THREE.Mesh(geometry49, material);

var geometry50 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana113 = new THREE.Mesh(geometry50, material);

var geometry51 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana114 = new THREE.Mesh(geometry51, material);

var geometry52 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana115 = new THREE.Mesh(geometry52, material);

var geometry53 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana116 = new THREE.Mesh(geometry53, material);

var geometry54 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana121 = new THREE.Mesh(geometry54, material);

var geometry55 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana122 = new THREE.Mesh(geometry55, material);

var geometry56 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana123 = new THREE.Mesh(geometry56, material);

var geometry57 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana124 = new THREE.Mesh(geometry57, material);

var geometry58 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana125 = new THREE.Mesh(geometry58, material);

var geometry59 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana126 = new THREE.Mesh(geometry59, material);

var geometry60 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana131 = new THREE.Mesh(geometry60, material);

var geometry61 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana132 = new THREE.Mesh(geometry61, material);

var geometry62 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana133 = new THREE.Mesh(geometry62, material);

var geometry63 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana134 = new THREE.Mesh(geometry63, material);

var geometry64 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana135 = new THREE.Mesh(geometry64, material);

var geometry65 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana136 = new THREE.Mesh(geometry65, material);

var geometry66 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana141 = new THREE.Mesh(geometry66, material);

var geometry67 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana142 = new THREE.Mesh(geometry67, material);

var geometry68 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana143 = new THREE.Mesh(geometry68, material);

var geometry69 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana144 = new THREE.Mesh(geometry69, material);

var geometry70 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana145 = new THREE.Mesh(geometry70, material);

var geometry71 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana146 = new THREE.Mesh(geometry71, material);

var geometry72 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana151 = new THREE.Mesh(geometry72, material);

var geometry73 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana152 = new THREE.Mesh(geometry73, material);

var geometry74 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana153 = new THREE.Mesh(geometry74, material);

var geometry75 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana154 = new THREE.Mesh(geometry75, material);

var geometry76 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana155 = new THREE.Mesh(geometry76, material);

var geometry77 = new THREE.BoxGeometry(202,25,16,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventana156 = new THREE.Mesh(geometry77, material);
/*---------------------------------------------------------*/
/*endedificio%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5555555555555555555555555555555555*/
/*-----------------------------------------------------*/
var geometry78 = new THREE.BoxGeometry(30,5,275,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
vereda = new THREE.Mesh(geometry78, material);

var geometry136 = new THREE.BoxGeometry(250,1,5,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
calle = new THREE.Mesh(geometry136, material);

var geometry139 = new THREE.BoxGeometry(20,1,5,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
calle4 = new THREE.Mesh(geometry139, material);

var geometry140 = new THREE.BoxGeometry(10,1,5,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
calle5 = new THREE.Mesh(geometry140, material);

var geometry138 = new THREE.BoxGeometry(20,1,5,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
calle3 = new THREE.Mesh(geometry138, material);

var geometry137 = new THREE.BoxGeometry(5,1,600,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
calle2 = new THREE.Mesh(geometry137, material);

var geometry79 = new THREE.BoxGeometry(30,5,600,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
vereda2 = new THREE.Mesh(geometry79, material);

var geometry80 = new THREE.CylinderBufferGeometry(15,15,5,32);
var material = new THREE.MeshLambertMaterial( {color: "white"} );
var esquina = new THREE.Mesh( geometry80, material );

var geometry81 = new THREE.BoxGeometry(275,5,30,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
vereda3 = new THREE.Mesh(geometry81, material);

var geometry82 = new THREE.BoxGeometry(275,5,30,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
vereda4 = new THREE.Mesh(geometry82, material);

var geometry83 = new THREE.CylinderBufferGeometry(15,15,5,32);
var material = new THREE.MeshLambertMaterial( {color: "white"} );
var esquina2 = new THREE.Mesh(geometry83, material );

var geometry84 = new THREE.BoxGeometry(30,5,125,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
vereda5 = new THREE.Mesh(geometry84, material);
/*---------------------------------------------------------*/
/*endpubico*/
/*-----------------------------------------------------*/
var geometry85 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var tronco = new THREE.Mesh(geometry85, material );

var geometry104 = new THREE.BoxGeometry(125,3,600,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "green" } ),
plaza = new THREE.Mesh(geometry104, material);

var geometry90 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera1 = new THREE.Mesh(geometry90, Esfera_material);

var geometry91 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera12 = new THREE.Mesh(geometry91, Esfera_material);

var geometry92 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera13 = new THREE.Mesh(geometry92, Esfera_material);

var geometry93 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera21 = new THREE.Mesh(geometry93, Esfera_material);

var geometry94 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera22 = new THREE.Mesh(geometry94, Esfera_material);

var geometry95 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera23 = new THREE.Mesh(geometry95, Esfera_material);

var geometry96 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera31 = new THREE.Mesh(geometry96, Esfera_material);

var geometry97 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera32 = new THREE.Mesh(geometry97, Esfera_material);

var geometry98 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera33 = new THREE.Mesh(geometry98, Esfera_material);

var geometry99 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera41 = new THREE.Mesh(geometry99, Esfera_material);

var geometry100 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera42 = new THREE.Mesh(geometry100, Esfera_material);

var geometry101 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera43 = new THREE.Mesh(geometry101, Esfera_material);

var geometry102 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera51 = new THREE.Mesh(geometry102, Esfera_material);

var geometry103 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera52 = new THREE.Mesh(geometry103, Esfera_material);

var geometry104 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
esfera53 = new THREE.Mesh(geometry104, Esfera_material);

var geometry86 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var tronco2 = new THREE.Mesh(geometry86, material );

var geometry87 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var tronco3 = new THREE.Mesh(geometry87, material );

var geometry88 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var tronco4 = new THREE.Mesh(geometry88, material );

var geometry89 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var tronco5 = new THREE.Mesh(geometry89, material );

/*---------------------------------------------------------*/
/*endpubico*/
/*-----------------------------------------------------*/
var geometry105 = new THREE.BoxGeometry(70,140,70,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "#A50303" } ),
casa = new THREE.Mesh(geometry105, material);

var geometry106 = new THREE.BoxGeometry(70,50,60,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "#A50303" } ),
casa2 = new THREE.Mesh(geometry106, material);

var geometry107 = new THREE.BoxGeometry(260,3,110,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "green" } ),
piso = new THREE.Mesh(geometry107, material);

var geometry108 = new THREE.BoxGeometry(20,5,20,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "silver" } ),
escalera = new THREE.Mesh(geometry108, material);

var geometry109 = new THREE.BoxGeometry(20,5,10,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "silver" } ),
escalera2 = new THREE.Mesh(geometry109, material);

var geometry110 = new THREE.BoxGeometry(17,26,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "grey" } ),
puerta = new THREE.Mesh(geometry110, material);

var geometry111 = new THREE.BoxGeometry(10,15,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa = new THREE.Mesh(geometry111, material);

var geometry112 = new THREE.BoxGeometry(10,15,1,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa2 = new THREE.Mesh(geometry112, material);

var geometry113 = new THREE.BoxGeometry(84,2,84,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo = new THREE.Mesh(geometry113, material);

var geometry114 = new THREE.BoxGeometry(77,2,77,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo2 = new THREE.Mesh(geometry114, material);

var geometry115 = new THREE.BoxGeometry(84,2,84,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo3 = new THREE.Mesh(geometry115, material);

var geometry116 = new THREE.BoxGeometry(77,2,77,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo4 = new THREE.Mesh(geometry116, material);

var geometry117 = new THREE.BoxGeometry(84,2,84,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo5 = new THREE.Mesh(geometry117, material);

var geometry118 = new THREE.BoxGeometry(77,2,77,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo6 = new THREE.Mesh(geometry118, material);

var geometry119 = new THREE.BoxGeometry(84,2,84,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo7 = new THREE.Mesh(geometry119, material);

var geometry120 = new THREE.BoxGeometry(77,2,77,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "white" } ),
techo8 = new THREE.Mesh(geometry120, material);

var geometry121 = new THREE.BoxGeometry(10,15,62,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa3 = new THREE.Mesh(geometry121, material);

var geometry122 = new THREE.BoxGeometry(10,15,72,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa4 = new THREE.Mesh(geometry122, material);

var geometry123 = new THREE.BoxGeometry(10,15,72,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa5 = new THREE.Mesh(geometry123, material);

var geometry124 = new THREE.BoxGeometry(10,15,72,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa6 = new THREE.Mesh(geometry124, material);

var geometry125 = new THREE.BoxGeometry(10,15,72,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa7 = new THREE.Mesh(geometry125, material);

var geometry126 = new THREE.BoxGeometry(72,15,10,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa8 = new THREE.Mesh(geometry126, material);

var geometry127 = new THREE.BoxGeometry(72,15,10,2,2,2,2),
material = new THREE.MeshLambertMaterial( { color: "aqua" } ),
ventanacasa9 = new THREE.Mesh(geometry127, material);

var geometry128 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
arbol1 = new THREE.Mesh(geometry128, Esfera_material);

var geometry129 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
arbol12 = new THREE.Mesh(geometry129, Esfera_material);

var geometry130 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
arbol13 = new THREE.Mesh(geometry130, Esfera_material);

var geometry131 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var palo = new THREE.Mesh(geometry131, material );

var geometry132 = new THREE.SphereGeometry(20,20,20),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
arbol2 = new THREE.Mesh(geometry132, Esfera_material);

var geometry133 = new THREE.SphereGeometry(15,15,15),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
arbol22 = new THREE.Mesh(geometry133, Esfera_material);

var geometry134 = new THREE.SphereGeometry(10,10,10),
Esfera_material = new THREE.MeshLambertMaterial({color:"green"}),
arbol23 = new THREE.Mesh(geometry134, Esfera_material);

var geometry135 = new THREE.CylinderBufferGeometry(2.5,2.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "brown"} );
var palo2 = new THREE.Mesh(geometry135, material );
/*
var Esfera_desenho = new THREE.SphereGeometry(20,10,1),
Esfera_material = new THREE.MeshLambertMaterial({color:"red"}),
esfera = new THREE.Mesh(Esfera_desenho, Esfera_material);
*/
var geometry141 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo = new THREE.Mesh(geometry141, material );

var geometry142 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba = new THREE.Mesh(geometry142, material );

var geometry143 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz = new THREE.Mesh(geometry143, Esfera_material);

var geometry144 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo2 = new THREE.Mesh(geometry144, material );

var geometry145 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba2 = new THREE.Mesh(geometry145, material );

var geometry146 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz2 = new THREE.Mesh(geometry146, Esfera_material);

var geometry147 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo3 = new THREE.Mesh(geometry147, material );

var geometry148 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba3 = new THREE.Mesh(geometry148, material );

var geometry149 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz3 = new THREE.Mesh(geometry149, Esfera_material);

var geometry150 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo4 = new THREE.Mesh(geometry150, material );

var geometry151 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba4 = new THREE.Mesh(geometry151, material );

var geometry152 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz4 = new THREE.Mesh(geometry152, Esfera_material);

var geometry153 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo5 = new THREE.Mesh(geometry153, material );

var geometry154 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba5 = new THREE.Mesh(geometry154, material );

var geometry155 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz5 = new THREE.Mesh(geometry155, Esfera_material);

var geometry156 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo6 = new THREE.Mesh(geometry156, material );

var geometry157 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba6 = new THREE.Mesh(geometry157, material );

var geometry158 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz6 = new THREE.Mesh(geometry158, Esfera_material);

var geometry159 = new THREE.CylinderBufferGeometry(2.5,2.5,20,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var posteabajo7 = new THREE.Mesh(geometry159, material );

var geometry160 = new THREE.CylinderBufferGeometry(1.5,1.5,40,32);
var material = new THREE.MeshLambertMaterial( {color: "black"} );
var postearriba7 = new THREE.Mesh(geometry160, material );

var geometry161 = new THREE.SphereGeometry(5,5,5),
Esfera_material = new THREE.MeshLambertMaterial({color:"white"}),
posteluz7 = new THREE.Mesh(geometry161, Esfera_material);

escena.add(cube,edificio,ventana1,baseEdificio,
entradaEdificio,entradaEdificio2,barraentradaEdificio,vidrioLadoEdificio,
vidrioLadoEdificio2,estructuraEdificio,barraventana1Edificio,barraventana2Edificio,
estructuraEdificio2,estructuraEdificio3,estructuraEdificio4,estructuraEdificio5,
estructuraEdificio6,estructuraEdificio7,estructuraEdificio8,ventana12,
ventana13,ventana14,ventana15,ventana16,
ventana21,ventana22,ventana23,ventana24,
ventana25,ventana26,ventana31,ventana32,
ventana33,ventana34,ventana35,ventana36,
ventana41,ventana42,ventana43,ventana44,
ventana45,ventana46,ventana51,ventana52,
ventana53,ventana54,ventana55,ventana56,
ventana111,ventana112,ventana113,ventana114,
ventana115,ventana116,ventana121,ventana122,
ventana123,ventana124,ventana125,ventana126,
ventana131,ventana132,ventana133,ventana134,
ventana135,ventana136,ventana141,ventana142,
ventana143,ventana144,ventana145,ventana146,
ventana151,ventana152,ventana153,ventana154,
ventana155,ventana156,vereda,vereda2,
esquina,vereda3,vereda4,esquina2,
vereda5,tronco,tronco2,tronco3,
tronco4,tronco5,esfera1,esfera12,
esfera13,esfera21,esfera22,esfera23,
esfera31,esfera32,esfera33,esfera41,
esfera42,esfera43,esfera51,esfera52,
esfera53,plaza,casa,casa2,
piso,escalera,escalera2,puerta,
ventanacasa,ventanacasa2,techo,techo2,
techo3,techo4,techo5,techo6,
techo7,techo8,ventanacasa3,ventanacasa4,
ventanacasa5,ventanacasa6,ventanacasa7,ventanacasa8,
ventanacasa9,arbol1,arbol12,arbol13,
palo,palo2,arbol2,arbol22,
arbol23,calle,calle2,calle3,
calle4,calle5,posteabajo,postearriba,
posteluz,posteabajo2,postearriba2,posteluz2,
posteabajo3,postearriba3,posteluz3,posteabajo4,
postearriba4,posteluz4,posteabajo5,postearriba5,
posteluz5,posteabajo6,postearriba6,posteluz6,
posteabajo7,postearriba7,posteluz7
);

camera.position.set(70,80,-100);

function animate(){
	controls.update();
	cube.position.x = 0.05;
	cube.position.y = -20;
	
	edificio.position.x = -170;
	edificio.position.y = 110;
	edificio.position.z = -170;
	
	ventana1.position.x = -250;
	ventana1.position.y = 219;
	ventana1.position.z = -170;
	
	ventana12.position.x = -220;
	ventana12.position.y = 219;
	ventana12.position.z = -170;
	
	ventana13.position.x = -190;
	ventana13.position.y = 219;
	ventana13.position.z = -170;
	
	ventana14.position.x = -90;
	ventana14.position.y = 219;
	ventana14.position.z = -170;
	
	ventana15.position.x = -120;
	ventana15.position.y = 219;
	ventana15.position.z = -170;
	
	ventana16.position.x = -150;
	ventana16.position.y = 219;
	ventana16.position.z = -170;
	
	ventana21.position.x = -250;
	ventana21.position.y = 180;
	ventana21.position.z = -170;
	
	ventana22.position.x = -220;
	ventana22.position.y = 180;
	ventana22.position.z = -170;
	
	ventana23.position.x = -190;
	ventana23.position.y = 180;
	ventana23.position.z = -170;
	
	ventana24.position.x = -90;
	ventana24.position.y = 180;
	ventana24.position.z = -170;
	
	ventana25.position.x = -120;
	ventana25.position.y = 180;
	ventana25.position.z = -170;
	
	ventana26.position.x = -150;
	ventana26.position.y = 180;
	ventana26.position.z = -170;
	
	ventana31.position.x = -250;
	ventana31.position.y = 139;
	ventana31.position.z = -170;
	
	ventana32.position.x = -220;
	ventana32.position.y = 139;
	ventana32.position.z = -170;
	
	ventana33.position.x = -190;
	ventana33.position.y = 139;
	ventana33.position.z = -170;
	
	ventana34.position.x = -90;
	ventana34.position.y = 139;
	ventana34.position.z = -170;
	
	ventana35.position.x = -120;
	ventana35.position.y = 139;
	ventana35.position.z = -170;
	
	ventana36.position.x = -150;
	ventana36.position.y = 139;
	ventana36.position.z = -170;
	
	ventana41.position.x = -250;
	ventana41.position.y = 100;
	ventana41.position.z = -170;
	
	ventana42.position.x = -220;
	ventana42.position.y = 100;
	ventana42.position.z = -170;
	
	ventana43.position.x = -190;
	ventana43.position.y = 100;
	ventana43.position.z = -170;
	
	ventana44.position.x = -90;
	ventana44.position.y = 100;
	ventana44.position.z = -170;
	
	ventana45.position.x = -120;
	ventana45.position.y = 100;
	ventana45.position.z = -170;
	
	ventana46.position.x = -150;
	ventana46.position.y = 100;
	ventana46.position.z = -170;
	
	ventana51.position.x = -250;
	ventana51.position.y = 60;
	ventana51.position.z = -170;
	
	ventana52.position.x = -220;
	ventana52.position.y = 60;
	ventana52.position.z = -170;
	
	ventana53.position.x = -190;
	ventana53.position.y = 60;
	ventana53.position.z = -170;
	
	ventana54.position.x = -90;
	ventana54.position.y = 60;
	ventana54.position.z = -170;
	
	ventana55.position.x = -120;
	ventana55.position.y = 60;
	ventana55.position.z = -170;
	
	ventana56.position.x = -150;
	ventana56.position.y = 60;
	ventana56.position.z = -170;

	ventana111.position.x = -170;
	ventana111.position.y = 60;
	ventana111.position.z = -250;
	
	ventana112.position.x = -170;
	ventana112.position.y = 60;
	ventana112.position.z = -220;
	
	ventana113.position.x = -170;
	ventana113.position.y = 60;
	ventana113.position.z = -190;

	ventana114.position.x = -170;
	ventana114.position.y = 60;
	ventana114.position.z = -90;
	
	ventana115.position.x = -170;
	ventana115.position.y = 60;
	ventana115.position.z = -120;
	
	ventana116.position.x = -170;
	ventana116.position.y = 60;
	ventana116.position.z = -150;

	ventana121.position.x = -170;
	ventana121.position.y = 100;
	ventana121.position.z = -250;
	
	ventana122.position.x = -170;
	ventana122.position.y = 100;
	ventana122.position.z = -220;
	
	ventana123.position.x = -170;
	ventana123.position.y = 100;
	ventana123.position.z = -190;

	ventana124.position.x = -170;
	ventana124.position.y = 100;
	ventana124.position.z = -90;
	
	ventana125.position.x = -170;
	ventana125.position.y = 100;
	ventana125.position.z = -120;
	
	ventana126.position.x = -170;
	ventana126.position.y = 100;
	ventana126.position.z = -150;

	ventana131.position.x = -170;
	ventana131.position.y = 140;
	ventana131.position.z = -250;
	
	ventana132.position.x = -170;
	ventana132.position.y = 140;
	ventana132.position.z = -220;
	
	ventana133.position.x = -170;
	ventana133.position.y = 140;
	ventana133.position.z = -190;

	ventana134.position.x = -170;
	ventana134.position.y = 140;
	ventana134.position.z = -90;
	
	ventana135.position.x = -170;
	ventana135.position.y = 140;
	ventana135.position.z = -120;
	
	ventana136.position.x = -170;
	ventana136.position.y = 140;
	ventana136.position.z = -150;

	ventana141.position.x = -170;
	ventana141.position.y = 180;
	ventana141.position.z = -250;
	
	ventana142.position.x = -170;
	ventana142.position.y = 180;
	ventana142.position.z = -220;
	
	ventana143.position.x = -170;
	ventana143.position.y = 180;
	ventana143.position.z = -190;

	ventana144.position.x = -170;
	ventana144.position.y = 180;
	ventana144.position.z = -90;
	
	ventana145.position.x = -170;
	ventana145.position.y = 180;
	ventana145.position.z = -120;
	
	ventana146.position.x = -170;
	ventana146.position.y = 180;
	ventana146.position.z = -150;

	ventana151.position.x = -170;
	ventana151.position.y = 220;
	ventana151.position.z = -250;
	
	ventana152.position.x = -170;
	ventana152.position.y = 220;
	ventana152.position.z = -220;
	
	ventana153.position.x = -170;
	ventana153.position.y = 220;
	ventana153.position.z = -190;

	ventana154.position.x = -170;
	ventana154.position.y = 220;
	ventana154.position.z = -90;
	
	ventana155.position.x = -170;
	ventana155.position.y = 220;
	ventana155.position.z = -120;
	
	ventana156.position.x = -170;
	ventana156.position.y = 220;
	ventana156.position.z = -150;

	baseEdificio.position.x = -170;
	baseEdificio.position.y = -16;
	baseEdificio.position.z = -170;
	
	entradaEdificio.position.x = -160;
	entradaEdificio.position.y = 4;
	entradaEdificio.position.z = -69;
	
	entradaEdificio2.position.x = -180;
	entradaEdificio2.position.y = 4;
	entradaEdificio2.position.z = -69;
	
	barraentradaEdificio.position.x = -170;
	barraentradaEdificio.position.y = 4;
	barraentradaEdificio.position.z = -69;
	
	barraventana1Edificio.position.x = -110;
	barraventana1Edificio.position.y = 4;
	barraventana1Edificio.position.z = -69;
	
	barraventana2Edificio.position.x = -231;
	barraventana2Edificio.position.y = 4;
	barraventana2Edificio.position.z = -69;
	
	vidrioLadoEdificio.position.x = -110;
	vidrioLadoEdificio.position.y = 4;
	vidrioLadoEdificio.position.z = -69;
	
	vidrioLadoEdificio2.position.x = -232;
	vidrioLadoEdificio2.position.y = 4;
	vidrioLadoEdificio2.position.z = -69;
	
	estructuraEdificio.position.x = -170;
	estructuraEdificio.position.y = 30;
	estructuraEdificio.position.z = -69;
	
	estructuraEdificio2.position.x = -170;
	estructuraEdificio2.position.y = 39;
	estructuraEdificio2.position.z = -170;
	
	estructuraEdificio3.position.x = -170;
	estructuraEdificio3.position.y = 79;
	estructuraEdificio3.position.z = -170;
	
	estructuraEdificio4.position.x = -170;
	estructuraEdificio4.position.y = 79;
	estructuraEdificio4.position.z = -170;
	
	estructuraEdificio5.position.x = -170;
	estructuraEdificio5.position.y = 119;
	estructuraEdificio5.position.z = -170;
	
	estructuraEdificio6.position.x = -170;
	estructuraEdificio6.position.y = 159;
	estructuraEdificio6.position.z = -170;
	
	estructuraEdificio7.position.x = -170;
	estructuraEdificio7.position.y = 199;
	estructuraEdificio7.position.z = -170;
	
	estructuraEdificio8.position.x = -170;
	estructuraEdificio8.position.y = 238;
	estructuraEdificio8.position.z = -170;
	/*vereda*/
	vereda.position.x = -25;
	vereda.position.y = -16;
	vereda.position.z = -163;
	
	vereda2.position.x = 175;
	vereda2.position.y = -16;
	vereda2.position.z = 0;
	
	esquina.position.x = -25;
	esquina.position.y = -16;
	esquina.position.z = -25;
	
	vereda3.position.x = -163;
	vereda3.position.y = -16;
	vereda3.position.z = -25;
	
	vereda4.position.x = -163;
	vereda4.position.y = -16;
	vereda4.position.z = 175;
	
	esquina2.position.x = -25;
	esquina2.position.y = -16;
	esquina2.position.z = 175;
	
	vereda5.position.x = -25;
	vereda5.position.y = -16;
	vereda5.position.z = 238;
	/*parque*/
	
	plaza.position.x = 238;
	plaza.position.y = -17;
	//plaza.position.z = -200;
	
	tronco.position.x = 230;
	tronco.position.y = 4;
	tronco.position.z = -200;
	
	esfera1.position.x = 230;
	esfera1.position.y = 25;
	esfera1.position.z = -200;
	
	esfera12.position.x = 230;
	esfera12.position.y = 40;
	esfera12.position.z = -200;
	
	esfera13.position.x = 230;
	esfera13.position.y = 50;
	esfera13.position.z = -200;
	
	tronco2.position.x = 230;
	tronco2.position.y = 4;
	tronco2.position.z = -100;
	
	esfera21.position.x = 230;
	esfera21.position.y = 25;
	esfera21.position.z = -100;
	
	esfera22.position.x = 230;
	esfera22.position.y = 40;
	esfera22.position.z = -100;
	
	esfera23.position.x = 230;
	esfera23.position.y = 50;
	esfera23.position.z = -100;
	
	tronco3.position.x = 230;
	tronco3.position.y = 4;
	tronco3.position.z = 0;
	
	esfera31.position.x = 230;
	esfera31.position.y = 25;
	esfera31.position.z = 0;
	
	esfera32.position.x = 230;
	esfera32.position.y = 40;
	esfera32.position.z = 0;
	
	esfera33.position.x = 230;
	esfera33.position.y = 50;
	esfera33.position.z = 0;
	
	tronco4.position.x = 230;
	tronco4.position.y = 4;
	tronco4.position.z = 100;
	
	esfera41.position.x = 230;
	esfera41.position.y = 25;
	esfera41.position.z = 100;
	
	esfera42.position.x = 230;
	esfera42.position.y = 40;
	esfera42.position.z = 100;
	
	esfera43.position.x = 230;
	esfera43.position.y = 50;
	esfera43.position.z = 100;
	
	tronco5.position.x = 230;
	tronco5.position.y = 4;
	tronco5.position.z = 200;
	
	esfera51.position.x = 230;
	esfera51.position.y = 25;
	esfera51.position.z = 200;
	
	esfera52.position.x = 230;
	esfera52.position.y = 40;
	esfera52.position.z = 200;
	
	esfera53.position.x = 230;
	esfera53.position.y = 50;
	esfera53.position.z = 200;
	/*casa*/
	casa.position.x = -210;
	casa.position.y = 40;
	casa.position.z = 270;
	
	techo.position.x = -210;
	techo.position.y = 30;
	techo.position.z = 270;
	
	techo2.position.x = -210;
	techo2.position.y = 32;
	techo2.position.z = 270;
	
	techo3.position.x = -210;
	techo3.position.y = 72;
	techo3.position.z = 270;
	
	techo4.position.x = -210;
	techo4.position.y = 74;
	techo4.position.z = 270;
	
	techo5.position.x = -210;
	techo5.position.y = 110;
	techo5.position.z = 270;
	
	techo6.position.x = -210;
	techo6.position.y = 112;
	techo6.position.z = 270;
	
	techo7.position.x = -140;
	techo7.position.y = 31;
	techo7.position.z = 270;
	
	techo8.position.x = -140;
	techo8.position.y = 33;
	techo8.position.z = 270;
	
	casa2.position.x = -140;
	casa2.position.y = 5;
	casa2.position.z = 270;
	
	piso.position.x = -170;
	piso.position.y = -17;
	piso.position.z = 245;
	
	escalera.position.x = -210;
	escalera.position.y = -13;
	escalera.position.z = 230;
	
	escalera2.position.x = -210;
	escalera2.position.y = -8;
	escalera2.position.z = 232;
	
	puerta.position.x = -210;
	puerta.position.y = 7;
	puerta.position.z = 235;
	
	ventanacasa.position.x = -188;
	ventanacasa.position.y = 7;
	ventanacasa.position.z = 235;
	
	ventanacasa2.position.x = -231;
	ventanacasa2.position.y = 7;
	ventanacasa2.position.z = 235;
	
	ventanacasa3.position.x = -140;
	ventanacasa3.position.y = 7;
	ventanacasa3.position.z = 270;
	
	ventanacasa4.position.x = -231;
	ventanacasa4.position.y = 52;
	ventanacasa4.position.z = 270;
	
	ventanacasa5.position.x = -188;
	ventanacasa5.position.y = 52;
	ventanacasa5.position.z = 270;
	
	ventanacasa6.position.x = -231;
	ventanacasa6.position.y = 91;
	ventanacasa6.position.z = 270;
	
	ventanacasa7.position.x = -188;
	ventanacasa7.position.y = 91;
	ventanacasa7.position.z = 270;
	
	ventanacasa8.position.x = -210;
	ventanacasa8.position.y = 91;
	ventanacasa8.position.z = 270;
	
	ventanacasa9.position.x = -210;
	ventanacasa9.position.y = 52;
	ventanacasa9.position.z = 270;
	
	arbol1.position.x = -60;
	arbol1.position.y = 25;
	arbol1.position.z = 250;
	
	arbol12.position.x = -60;
	arbol12.position.y = 40;
	arbol12.position.z = 250;
	
	arbol13.position.x = -60;
	arbol13.position.y = 50;
	arbol13.position.z = 250;
	
	palo.position.x = -60;
	palo.position.y = 4;
	palo.position.z = 250;
	
	arbol2.position.x = -290;
	arbol2.position.y = 25;
	arbol2.position.z = 250;
	
	arbol22.position.x = -290;
	arbol22.position.y = 40;
	arbol22.position.z = 250;
	
	arbol23.position.x = -290;
	arbol23.position.y = 50;
	arbol23.position.z = 250;
	
	palo2.position.x = -290;
	palo2.position.y = 4;
	palo2.position.z = 250;
	
	calle.position.x = -170;
	calle.position.y = -18;
	calle.position.z = 75;
	
	calle2.position.x = 80;
	calle2.position.y = -18;
	calle2.position.z = 0;
	
	calle3.position.x = -10;
	calle3.position.y = -18;
	calle3.position.z = 75;
	
	calle4.position.x = 30;
	calle4.position.y = -18;
	calle4.position.z = 75;
	
	calle5.position.x = 64;
	calle5.position.y = -18;
	calle5.position.z = 75;
	
	posteabajo.position.x = 175;
	posteabajo.position.y = -4;
	posteabajo.position.z = -50;
	
	postearriba.position.x = 175;
	postearriba.position.y = 15;
	postearriba.position.z = -50;
	
	posteluz.position.x = 175;
	posteluz.position.y = 35;
	posteluz.position.z = -50;
	
	posteabajo2.position.x = 175;
	posteabajo2.position.y = -4;
	posteabajo2.position.z = 150;
	
	postearriba2.position.x = 175;
	postearriba2.position.y = 15;
	postearriba2.position.z = 150;
	
	posteluz2.position.x = 175;
	posteluz2.position.y = 35;
	posteluz2.position.z = 150;
	
	posteabajo3.position.x = 175;
	posteabajo3.position.y = -4;
	posteabajo3.position.z = -250;
	
	postearriba3.position.x = 175;
	postearriba3.position.y = 15;
	postearriba3.position.z = -250;
	
	posteluz3.position.x = 175;
	posteluz3.position.y = 35;
	posteluz3.position.z = -250;
	
	posteabajo4.position.x = 175;
	posteabajo4.position.y = -4;
	posteabajo4.position.z = 300;
	
	postearriba4.position.x = 175;
	postearriba4.position.y = 15;
	postearriba4.position.z = 300;
	
	posteluz4.position.x = 175;
	posteluz4.position.y = 35;
	posteluz4.position.z = 300;
	
	posteabajo5.position.x = -25;
	posteabajo5.position.y = -4;
	posteabajo5.position.z = 250;
	
	postearriba5.position.x = -25;
	postearriba5.position.y = 15;
	postearriba5.position.z = 250;
	
	posteluz5.position.x = -25;
	posteluz5.position.y = 35;
	posteluz5.position.z = 250;
	
	posteabajo6.position.x = -25;
	posteabajo6.position.y = -4;
	posteabajo6.position.z = -250;
	
	postearriba6.position.x = -25;
	postearriba6.position.y = 15;
	postearriba6.position.z = -250;
	
	posteluz6.position.x = -25;
	posteluz6.position.y = 35;
	posteluz6.position.z = -250;
	
	posteabajo7.position.x = -25;
	posteabajo7.position.y = -4;
	posteabajo7.position.z = -25;
	
	postearriba7.position.x = -25;
	postearriba7.position.y = 15;
	postearriba7.position.z = -25;
	
	posteluz7.position.x = -25;
	posteluz7.position.y = 35;
	posteluz7.position.z = -25;
	
	render.render(escena,camera);
	
	render.render(escena,camera);
	requestAnimationFrame(animate);
}
var criandoLuz = function(){
	var luz = new THREE.SpotLight(0xffffff);
	//luz.position.set(250,400,-300);
	luz.position.set(-350,200,0);
	luz.castShadow = true;
	escena.add(luz);
}
animate();
criandoLuz();