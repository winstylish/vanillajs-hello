const who   = ["El perro", "Mi abuela", "El cartero", "Mi canario"]; 
const action = ["se comió", "orinó", "aplastó", "rompió"]; 
const what  = ["mi tarea", "mi móvil", "el coche", "mi portátil"]; 
const when  = ["antes de clase", "mientras dormía", "cuando hacía ejercicio", "durante el almuerzo", "mientras rezaba"]; 

function rand(arr){ 
  return arr[Math.floor(Math.random()*arr.length)]; 
}
function generarExcusa(){ 
  return `${rand(who)} ${rand(action)} ${rand(what)} ${rand(when)}.`; 
}

window.onload = () => { 
  document.getElementById('excuse').innerHTML = generarExcusa(); 
};
