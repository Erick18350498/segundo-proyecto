//var saludo= "hola a todos"; //variable string
//var saludo= 5;//variable numeric
//var saludo= true;//variable booleand
//var saludo= null;//variable null
//var saludo= undefined;//variable undifined
//var saludo=["hola","aaaaa",5,22,"hola de nuevo"];//array
//var saludo={
  //uno: "hola",
  //dos: "a todos",
  //tres: "5",
  //cuatro: "true",
 //cinco:null,
  //seis:undefined,
  //siete:17,
//} //object

//var textovar= "texto var 1"
//let textoLet= "texto let 1"
//const textoConst= "texto const 1"

//textovar = "texto var 2"
//textoLet = "texto let 2"
//textoConst = "texto const 2"

//var textovar = "texto var 3"
//let textoLet = "texto var 3"
//const textoConst = "texto var 3"

//if (true) {
  //var textovar= "texto var 4"
  //let textoLet= "texto let 4"
  //const textoConst= "texto const 4"
  //console.log (textoLet)
  //console.log (textoConst)
//}
//console. log(saludo); 
//function App() {
  //return (
    //<div className="App">
     //<h1>{textovar}</h1>
     //<h1>{textoLet}</h1>
     //<h1>{textoConst}</h1>
    //</div>
  //);
//}

function app (){
  //console. log (5 === "5");//solo para verdadero y falso
  const persona = {
    nombre: "erick",
    apellidopaterno: "gutierrez",
    apellidomaterno: "andrade",
    edad: "22",
  }; //para cualquier arreglo

    //const atributo= "apellidopaterno";


const{nombre,apellidopaterno,apellidomaterno,edad}= persona;




const contactopersonas={
  telefono:"2871143625",
  email:"penelope@gmail",
  empresa:"chetu",
};
const nuevotelefono="2871170328"


const infopersona={
  ...persona,
  ...contactopersonas,
  puesto:"Docente",
  telefono:nuevotelefono,
}

/*console.log(persona);
console.log(contactopersonas);
console.log(infopersona);  */

const frutas=["manzana", "naranja", "fresa", "pera",]
const vegetales=["lechuga", "zanahoria", "alcachofa"]
const carnes=["res","cerdo", "pollo", "pescado"]


const alimentos=[...frutas,
  ...vegetales,
  ...carnes,
  "Cualquier otro alimento"
];

console.log(frutas);
console.log(vegetales);
console.log(carnes);
console.log(alimentos);




  return<div classname= "app">
    <h3> 
    {`soy ${nombre} ${apellidomaterno} ${apellidopaterno} y tengo ${edad} años.`}
    </h3>
    
</div> 
    
  
  }
export default app;