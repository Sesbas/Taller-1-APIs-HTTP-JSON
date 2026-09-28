const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", buscarUsuario);
async function buscarUsuario() {
 const id = document.getElementById("idUsuario").value;
 const resultado = document.getElementById("resultado");
 if (!id) {
 resultado.innerHTML = "<p>Ingrese un ID.</p>";
 return;
 }
 try {
 const response = await fetch(
 `https://jsonplaceholder.typicode.com/users/${id}`
 );
 if (!response.ok) {
 throw new Error(`HTTP ${response.status}`);
 }
 const usuario = await response.json();
 resultado.innerHTML = `
 <h2>${usuario.name}</h2>
 <p>${usuario.email}</p>
 <p>${usuario.phone}</p>
 `;
 } catch (error) {
 resultado.innerHTML =
 `<p>Error: ${error.message}</p>`;
 }
}