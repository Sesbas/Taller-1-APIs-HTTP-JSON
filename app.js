const $ = id => document.getElementById(id);
$("ejecutar").addEventListener("click", ejecutarSolicitud);

async function ejecutarSolicitud() {
  const url = $("url").value.trim();
  const response = await fetch(url);
  const resultado = await response.json();
  $("respuesta").textContent = JSON.stringify(resultado, null, 2);
}