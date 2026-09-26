import promptSync from "prompt-sync";
const prompt = promptSync();


interface tarea{
 titulo: string[];
 estado: number[];
 dificultad: number[]
}

const tarea: tarea = {
 titulo: [],
 estado: [],
 dificultad: []
}


let menu: number = 0;

while (menu != 4){
 console.log("¿que deseas hacer? \n [1]ver tareas \n [2]buscar tareas \n [3]crear tareas \n [4]salir");
 menu = Number(prompt("> "));

 switch (menu) {
 case 1:
 let vtareas = 0;
 while (vtareas != 5) {
 console.log("¿que deseas ver? \n [1]tareas \n [2]pendientes \n [3]en curso \n [4]terminadas");
 vtareas =Number(prompt("> "));

 switch (vtareas) {
 case 1:
 let tareas = 0; 
 while (tareas != 6) {
 console.log("estas son todas las tareas: ");
 console.log("[1]"+tarea.titulo[0],"\n[2]"+tarea.titulo[1],"\n[3]"+tarea.titulo[2],"\n[4]"+tarea.titulo[3],"\n[5]"+tarea.titulo[4]);
 tareas = Number(prompt("> "));
 switch (tareas) {
 case 1: console.log(tarea.titulo[0]);
 if (tarea.estado[0] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[0] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[0] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[0] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[0] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[0] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar = String(prompt("[E]ditar o [V]olver > "));
 if (editar == "e") {
 tarea.estado[0] = Number(prompt("ingrese estado: "));
 tarea.dificultad[0] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar == "v"){console.log("volviendo...");}
 break;
 //TAREA2
 case 2: console.log(tarea.titulo[1]);
 if (tarea.estado[1] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[1] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[1] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[1] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[1] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[1] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar2 = String(prompt("[E]ditar o [V]olver > "));
 if (editar2 == "e") {
 tarea.estado[1] = Number(prompt("ingrese estado: "));
 tarea.dificultad[1] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar2 == "v"){console.log("volviendo...");}
 break;
 
 //TAREA3
 case 3: console.log(tarea.titulo[2]);
 if (tarea.estado[2] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[2] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[2] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[2] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[2] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[2] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar3 = String(prompt("[E]ditar o [V]olver > "));
 if (editar3 == "e") {
 tarea.estado[2] = Number(prompt("ingrese estado: "));
 tarea.dificultad[2] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar3 == "v"){console.log("volviendo...");}
 break;
 
 //TAREA4
 case 4: console.log(tarea.titulo[3]);
 if (tarea.estado[3] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[3] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[3] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[3] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[3] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[3] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar4 = String(prompt("[E]ditar o [V]olver > "));
 if (editar4 == "e") {
 tarea.estado[3] = Number(prompt("ingrese estado: "));
 tarea.dificultad[3] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar4 == "v"){console.log("volviendo...");}
 break;
 
 //TAREA5
 case 5: console.log(tarea.titulo[4]);
 if (tarea.estado[4] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[4] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[4] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[4] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[4] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[4] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar5 = String(prompt("[E]ditar o [V]olver > "));
 if (editar5 == "e") {
 tarea.estado[4] = Number(prompt("ingrese estado: "));
 tarea.dificultad[4] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar5 == "v"){console.log("volviendo...");}
 break;
 
 default:
 break;
 }
 }
 break;

 case 2:
 console.log("tareas pendientes");
 if (tarea.estado[0] == 1){console.log(tarea.titulo[0]+": pendiente ");}
 else console.log(tarea.titulo[0]+": --------");

 if (tarea.estado[1] == 1){console.log(tarea.titulo[1]+": pendiente ");}
 else console.log(tarea.titulo[1]+": --------");

 if (tarea.estado[2] == 1){console.log(tarea.titulo[2]+": pendiente ");}
 else console.log(tarea.titulo[2]+": --------");

 if (tarea.estado[3] == 1){console.log(tarea.titulo[3]+": pendiente ");}
 else console.log(tarea.titulo[3]+": --------");

 if (tarea.estado[4] == 1){console.log(tarea.titulo[4]+": pendiente ");}
 else console.log(tarea.titulo[4]+": --------");
 break;

 case 3:
 console.log("tareas en curso");
 if (tarea.estado[0] == 2){console.log(tarea.titulo[0]+": en curso ");}
 else console.log(tarea.titulo[0]+": --------");

 if (tarea.estado[1] == 2){console.log(tarea.titulo[1]+": en curso ");}
 else console.log(tarea.titulo[1]+": --------");

 if (tarea.estado[2] == 2){console.log(tarea.titulo[2]+": en curso ");}
 else console.log(tarea.titulo[2]+": --------");

 if (tarea.estado[3] == 2){console.log(tarea.titulo[3]+": en curso ");}
 else console.log(tarea.titulo[3]+": --------");

 if (tarea.estado[4] == 2){console.log(tarea.titulo[4]+": en curso ");}
 else console.log(tarea.titulo[4]+": --------");
 break;
 
 case 4:
 console.log("tareas terminadas");
 if (tarea.estado[0] == 3){console.log(tarea.titulo[0]+": terminado ");}
 else console.log(tarea.titulo[0]+": --------");

 if (tarea.estado[1] == 3){console.log(tarea.titulo[1]+": terminado ");}
 else console.log(tarea.titulo[1]+": --------");

 if (tarea.estado[2] == 3){console.log(tarea.titulo[2]+": terminado ");}
 else console.log(tarea.titulo[2]+": --------");

 if (tarea.estado[3] == 3){console.log(tarea.titulo[3]+": terminado ");}
 else console.log(tarea.titulo[3]+": --------");

 if (tarea.estado[4] == 3){console.log(tarea.titulo[4]+": terminado ");}
 else console.log(tarea.titulo[4]+": --------");
 break;
 
 default:
 break;
 }
 }
 break;

 case 2:
 console.log("BUSCADOR:");
 let buscar = String(prompt("> "));
 if (buscar == tarea.titulo[0]) {
 console.log(tarea.titulo[0]);
 if (tarea.estado[0] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[0] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[0] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[0] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[0] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[0] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar = String(prompt("[E]ditar o [V]olver > "));
 if (editar == "e") {
 tarea.estado[0] = Number(prompt("ingrese estado: "));
 tarea.dificultad[0] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar == "v"){console.log("volviendo...");}
 }
 else if (buscar == tarea.titulo[1]) {
 console.log(tarea.titulo[1]);
 if (tarea.estado[1] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[1] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[1] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[1] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[1] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[1] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar = String(prompt("[E]ditar o [V]olver > "));
 if (editar == "e") {
 tarea.estado[1] = Number(prompt("ingrese estado: "));
 tarea.dificultad[1] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar == "v"){console.log("volviendo...");}
 }
 else if (buscar == tarea.titulo[2]) {
 console.log(tarea.titulo[2]);
 if (tarea.estado[2] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[2] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[2] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[2] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[2] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[2] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar = String(prompt("[E]ditar o [V]olver > "));
 if (editar == "e") {
 tarea.estado[2] = Number(prompt("ingrese estado: "));
 tarea.dificultad[2] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar == "v"){console.log("volviendo...");}
 }
 else if (buscar == tarea.titulo[3]) {
 console.log(tarea.titulo[3]);
 if (tarea.estado[3] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[3] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[3] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[3] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[3] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[3] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar = String(prompt("[E]ditar o [V]olver > "));
 if (editar == "e") {
 tarea.estado[3] = Number(prompt("ingrese estado: "));
 tarea.dificultad[3] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar == "v"){console.log("volviendo...");}
 }
 else if (buscar == tarea.titulo[4]) {
 console.log(tarea.titulo[4]);
 if (tarea.estado[4] == 1){console.log(" / estado: pendiente ");}
 else if (tarea.estado[4] == 2){console.log(" / estado: en curso ");}
 else if (tarea.estado[4] == 3){console.log(" / estado: terminado ");}
 else console.log(" / no hay estado ");

 if (tarea.dificultad[4] == 1){console.log(" / dificultad: facil ");}
 else if (tarea.dificultad[4] == 2){console.log(" / dificultad: medio ");}
 else if (tarea.dificultad[4] == 3){console.log(" / dificultad: dificil ");}
 else console.log(" / no hay dificultad ");

 let editar = String(prompt("[E]ditar o [V]olver > "));
 if (editar == "e") {
 tarea.estado[4] = Number(prompt("ingrese estado: "));
 tarea.dificultad[4] = Number(prompt("ingrese dificultad: "));
 }
 else if(editar == "v"){console.log("volviendo...");}
 }
 else console.log("esa tarea no existe....");

 break;

 case 3:
 let i = Number(prompt("ingrese numero del 1 al 5: "));
 if(i == 1){
 tarea.titulo[0] = String(prompt("ingrese titulo: "));
 tarea.estado[0] = Number(prompt("ingrese estado: "));
 tarea.dificultad[0] = Number(prompt("ingrese dificultad: "));
 }
 else if (i == 2) {
 tarea.titulo[1] = String(prompt("ingrese titulo: "));
 tarea.estado[1] = Number(prompt("ingrese estado: "));
 tarea.dificultad[1] = Number(prompt("ingrese dificultad: "));
 } 
 else if (i == 3) {
 tarea.titulo[2] = String(prompt("ingrese titulo: "));
 tarea.estado[2] = Number(prompt("ingrese estado: "));
 tarea.dificultad[2] = Number(prompt("ingrese dificultad: "));
 }
 else if (i == 4) {
 tarea.titulo[3] = String(prompt("ingrese titulo: "));
 tarea.estado[3] = Number(prompt("ingrese estado: "));
 tarea.dificultad[3] = Number(prompt("ingrese dificultad: "));
 }
 else if (i == 5) {
 tarea.titulo[4] = String(prompt("ingrese titulo: "));
 tarea.estado[4] = Number(prompt("ingrese estado: "));
 tarea.dificultad[4] = Number(prompt("ingrese dificultad: "));
 } 

 break;
 
 default:
 break;
 }
}