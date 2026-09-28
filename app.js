async function crearUsuario() {
 const nuevoUsuario = {
 name: "Carlos Pérez",
 username: "carlosp",
 email: "carlos@example.com"
 };
 try {
 const response = await fetch(
 "https://jsonplaceholder.typicode.com/users",
 {
 method: "POST",
 headers: {
 "Content-Type": "application/json"
 },
 body: JSON.stringify(nuevoUsuario)
 }
 );
 const data = await response.json();
 console.log("Código HTTP:", response.status);
 console.log("Respuesta:", data);
 } catch (error) {
 console.error(error);
 }
}
crearUsuario();
