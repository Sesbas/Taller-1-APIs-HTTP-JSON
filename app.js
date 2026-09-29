const $ = id => document.getElementById(id);
$("ejecutar").addEventListener("click", ejecutarSolicitud);

async function ejecutarSolicitud() {
  const url = $("url").value.trim();

  const inicio = performance.now();
  const response = await fetch(url);
  const tiempo = performance.now() - inicio;

  const resultado = await response.json();

  $("estado").textContent = `Status HTTP: ${response.status} ${response.statusText}`;
  $("estado").className = response.ok ? "ok" : "fail";
  $("tiempo").textContent = `Tiempo de respuesta: ${tiempo.toFixed(2)} ms`;
  $("respuesta").textContent = JSON.stringify(resultado, null, 2);
}