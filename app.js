const $ = id => document.getElementById(id);
$("ejecutar").addEventListener("click", ejecutarSolicitud);

async function ejecutarSolicitud() {
  const metodo = $("metodo").value;
  const url = $("url").value.trim();
  const bodyTexto = $("body").value.trim();

  const opciones = { method: metodo, headers: {} };

  if (metodo === "POST" || metodo === "PUT") {
    opciones.body = JSON.stringify(JSON.parse(bodyTexto));
    opciones.headers["Content-Type"] = "application/json";
  }

  const inicio = performance.now();
  const response = await fetch(url, opciones);
  const tiempo = performance.now() - inicio;

  const resultado = await response.json();

  $("estado").textContent = `Status HTTP: ${response.status} ${response.statusText}`;
  $("estado").className = response.ok ? "ok" : "fail";
  $("tiempo").textContent = `Tiempo de respuesta: ${tiempo.toFixed(2)} ms`;
  $("respuesta").textContent = JSON.stringify(resultado, null, 2);
}