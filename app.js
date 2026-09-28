const url = "https://jsonplaceholder.typicode.com/users";
const boton = document.getElementById("btnCargar");
const contenedor = document.getElementById("usuarios");
boton.addEventListener("click", cargarUsuarios);
async function cargarUsuarios() {
 try {
 const response = await fetch(url);
 const usuarios = await response.json();
 contenedor.innerHTML = "";
 usuarios.forEach(usuario => {
 const div = document.createElement("div");
 div.innerHTML = `
 <h2>${usuario.name}</h2>
 <p><strong>Usuario:</strong> ${usuario.username}</p>
 <p><strong>Email:</strong> ${usuario.email}</p>
 <p><strong>Teléfono:</strong> ${usuario.phone}</p>
 `;
 contenedor.appendChild(div);
 });
 } catch (error) {
 contenedor.innerHTML =
 "<p>Se presentó un error al consultar la API.</p>";
 console.error(error);
 }
}
