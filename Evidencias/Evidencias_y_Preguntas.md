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


21. GET – CONSULTAR TODOS LOS USUARIOS

![alt text](image-7.png)


22. GET POR ID

![alt text](image-8.png)

¿Qué diferencia existe entre ambas respuestas?
    R// Cuando se usa /users se llaman a todos los usuarios y cuando se usa /users/3 se esta llamando un id de usuario especifico

¿Cuál devuelve un arreglo?
    R// /users

¿Cuál devuelve un objeto?
    R//  /users/3

¿Cómo cambia la URL?
    R//  se le agrega un / y el ID o identificador del objeto que queremops llamar


23. POST EN POSTMAN

![alt text](image-9.png)


24. put

![alt text](image-10.png)


25. DELETE

![alt text](image-11.png)

¿Por qué una operación DELETE puede tener una respuesta sin contenido?
    R//  Porque la accionj de delete no tiene nada que devolover, ya se realizo la accion y solo devuelve el codigo 200 como confirmacion de la accion 


27. GET con cURL

![alt text](image-12.png)


28. GET por ID

![alt text](image-13.png)


29. MOSTRAR LOS HEADERS

![alt text](image-14.png)

¿Qué información adicional aparece?
    R//  Content-Type, Content-Length, Date, Cache-Control, entre otros

¿Dónde aparece el código HTTP?
    R//  En la primer lina 

¿Qué significa Content-Type?
    R//  Indica el formato del contenido que devuelve el servidor


30. POST CON cURL

![alt text](image-15.png)


31. PUT con cURL

![alt text](image-16.png)


32. DELETE con cURL

![alt text](image-17.png)


34. CREAR UN PROYECTO REST

![alt text](image-19.png)


35. CONSULTA POR ID

![alt text](image-18.png)


36. POST DESDE SOAPUI

![alt text](image-20.png)

COMPARACION DE HERRAMIENTAS

![alt text](image-21.png)


37. ANALISIS DE UNA SOLICITUD HTTP

SOAPUI: ![alt text](image-22.png)
POSTMAN: ![alt text](image-23.png)
cURKL: ![alt text](image-24.png)
JavaScript: ![alt text](image-25.png)

SOAPUI: interfaz gráfica, más orientada a pruebas de servicios.
POSTMAN: interfaz gráfica, muestra estado, tiempo, tamaño y JSON formateado.
cURL: una línea en la terminal, ideal para scripts y servidores, con la salida en texto plano.
JavaScript: escribes código y tú decides cómo mostrar el resultado.



