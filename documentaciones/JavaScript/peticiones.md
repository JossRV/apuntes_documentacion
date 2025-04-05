# Peticiones HTTP en JS
- Son un conjunto de metodos predefinidos que se utilizan para interactuar con los datos almacenados en los servidores.
- El **cliente envia una solicitud**, mientras que el **servidor recibe la solicitud**.
- Si la solicitud tiene **exito**, el servidor devuelve los datos **en formato JSON**, si la solicitud **falla**, devuelve un **error**.
- Las respuesta que devuelve pueden ser entendidas por un codigo de estado, estas son las respuestas de estado.
- `100-199`: Denota una respuesta **informativa**.
- `200-299`: Denota una solicitud **existosa**.
- `300-399`: Denota una **redireccion**.
- `400-499`: Indica un **error del cliente**.
- `500-599`: Denota un **error del servidor**.

- Existen varios metodos para aprender peticiones http.

# Peticion HTTP usando XMLHttpRequest
- Objeto nativo de JS para interactuar con los servidores y cargar el contenido en las paginas web sin recargar el navegador.

## Peticion GET 
1. Crear un nuevo objeto XMLHttpRequest
~~~
const xhr = new XMLHttpRequest();
~~~
2. Abre una conexión especificando el tipo de peticion y el url del servidor
~~~
// peticion GET
xhr.open("GET", "https://url-get-users.com/users");
~~~
3. Envia la petición 
~~~
xhr.send();
~~~
4. Especifica la respuesta a recibir y esperalo
~~~
xhr.responseType = "json";

// recibiendo respuesta
xhr.onload = () => {
    if(xhr.readyState == 4 && xhr.status == 200){
        const data = xhr.response;
        console.log(data);
    }else {
        console.error(`Error: ${xhr.status}`)
    }
}
~~~ 

## Peticion POST
- Abriendo conexión con el tipo POST
~~~
xhr.open("POST", "https://url-get-users.com/users");
~~~
- Cabecera
~~~
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
~~~
- Cuerpo de informacion para ser enviado, en caso de POST para ser guardado
~~~
const body = JSON.stringify({
    title: "hello world",
    body: "My POST request",
    userId: 900,
});
~~~
- Para segurarse que llegue al servidor la informacion del body, se pasa como parametro al metodo send
~~~
xhr.send
~~~

## Solicitud PATCH
- Se utiliza para actualizar las propiedades especificas de un objeto
~~~
xhr.open("PATCH", "https://url-get-users.com/users");
~~~

## Solicitud PUT
- Se utiliza para actualizar todo el ID registro
~~~
xhr.open("PUT", "https://url-get-users.com/users");
~~~

## Solicitud DELETE
- Se utiliza para eliminar datos de un servidor, claro especificando que ID registro eliminar.
~~~ 
xhr.open("DELETE", "https://url-get-users.com/users");
~~~

# Peticion HTTP usando jQuery
- Simplifica el proceso de envio y obtencion de datos de los servidores haciendo la sintaxis mas corta y sencilla.

## Peticion GET
- Nos proporcionan el metodo `$.get()`
~~~
$.get("https://url-a-consultar", (data, status) => {
    console.log(data);
});
~~~

## Peticion POST
- Se utiliza el metodo `$.post()`
- Pero se debera crear el cuerpo de informacion a pandar
~~~
// body 
const body = JSOSN.stringify({
    title: "hello world",
    body: "my post request",
    userId: 500,
});
// peticion
$.post("https://url-a-consultar", body, (data, status) => {
    console.log(data);
});
~~~

## Peticiones asincronas
- Metodo `$.ajax()`, Se utiliza para hacer peticiones asincronas, tiene una sintaxis diferente

## Peticion PATCH con ajax
- Tiene diferentes parametros a utilizar en ajax
~~~
// creando cuerpo de datos
const body = JSON.stringify({
    body: "my PATCH Request",
});

// peticion
$.ajax({
    // url del servidor
    url: "url-server",
    // tipo de solicitud
    type: "PATCH", // POST, PUT, GET, DELETE
    // envio de datos
    data: body,
    // devolucion de llamada
    success: function(result){
        console.log(result)
    }
});
~~~

## Peticion getJSON
- Peticion que registrara en la consola una matriz de objetos
~~~
$.getJSON("https://url-a-consultar", function (result) {
    console.log(result);
});
~~~

# Peticiones HTTP FETCH
- Api nativa de JS para interactuar con los servidores, tiene soporte para promesas
  
## Solicitud GET
- El envio para Get solo require la url y devolvera una promesa a la que puedes acceder utilizando `then()`
~~~
fetch('url-get')
.then((response) => response.json())
.then((json) => console.log(json));
~~~

## Solicitudes POST
- Hay que proporcionar los datos que se van a actualizar y se pasan como valor en la opcion body
~~~
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT", // POST, PATCH, DELETE
  // proporcionando datos
  body: JSON.stringify({
    id: 1,
    title: "My PUT request",
    body: "Updating the entire object",
    userId: 1,
  }),
  // cabezales
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
// respuestas
.then((response) => response.json())
.then((json) => console.log(json));
~~~

- Existen mas tipos de solicitudes HTTP como axios, superagent, qwest