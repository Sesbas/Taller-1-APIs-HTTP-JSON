const url = "https://jsonplaceholder.typicode.com/users";
async function cargarUsuarios() {
 try {
 const response = await fetch(url);
 const data = await response.json();
 console.log(data);
 } catch (error) {
 console.error("Error:", error);
 }
}
cargarUsuarios();
