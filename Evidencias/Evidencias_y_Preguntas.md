11. Primer consuimo de la API

![alt text](image.png)

¿Qué tipo de estructura devuelve la API?
    R// Array

¿Cuántos usuarios aparecen?
    R//  10

¿Qué atributos tiene cada usuario?
    R//  address, company, email, id, name, phone, username, website

¿Cuál es el tipo de dato de id?
    R//  Numero entero (int)

¿Qué tipo de dato representa address?
    R//  Un objeto anidado


13. Utilizacion del async/await

¿Cuál de las dos formas considera más fácil de leer?
    R// el async/await es mucho mas facil de leer y entender


14. Mostrar datos en el HTML

![alt text](image-1.png)


15. Mejorar la interfaz

![alt text](image-2.png)


16-17. CONSULTAR UN USUARIO POR ID - ANALIZANDO response.ok

![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)

¿Qué código HTTP recibe para el ID 1?
    R// 200

¿Qué sucede con el ID 999?
    R// Error 404 Not Found

¿Por qué es importante verificar response.ok?
    R// Porque el fetch no lanza errores, si tuvo una respuesta, continua sin verififcar si la respuesta es buena o mala

¿Qué diferencia existe entre un error HTTP y un error de JavaScript?
    R//  el error HTTP es un error del servidor que devuelve con un codigo, por otro lado el error de JavaScript es una excepcion que cae dentro del catch


18-19. REALIZANDO UN POST - ANALIZAR EL POST

![alt text](image-6.png)

¿Por qué es necesario indicar Content-Type?
    R// Para decirle al servidor en qué formato va el body

¿Por qué utilizamos JSON.stringify()?
    R// Porque el body de una petición HTTP viaja como texto, esto convierte un objeto de JavaScript en una cadena JSON

¿Qué ocurriría si enviamos directamente nuevoUsuario?
    R//  El servidor no recibiria los datos ya que los envia en un formato que no es valido

¿Qué código HTTP devuelve la API?
    R//  201

¿Qué información devuelve el servidor?
    R// Muestra por consola la confirmacion de que se creo el usuario con el id:11
