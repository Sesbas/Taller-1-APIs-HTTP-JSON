const $ = id => document.getElementById(id);
$("ejecutar").addEventListener("click", ejecutarSolicitud);

async function ejecutarSolicitud() {
  limpiar();
  const metodo = $("metodo").value;
  const url = $("url").value.trim();
  const bodyTexto = $("body").value.trim();

  // URL inválida
  try {
    const u = new URL(url);
    if (!["http:", "https:"].includes(u.protocol)) throw new Error();
  } catch {
    return mostrarError("URL inválida: La URL ingresada no es válida.");
  }

  const opciones = { method: metodo, headers: {} };

  // JSON inválido (solo POST y PUT llevan body)
  if (metodo === "POST" || metodo === "PUT") {
    try {
      opciones.body = JSON.stringify(JSON.parse(bodyTexto));
      opciones.headers["Content-Type"] = "application/json";
    } catch {
      return mostrarError("JSON inválido: El contenido enviado no es JSON válido.");
    }
  }

  const inicio = performance.now();
  try {
    const response = await fetch(url, opciones);
    const tiempo = performance.now() - inicio;
    let resultado;
    try { resultado = await response.json(); }
    catch { resultado = "La respuesta no contiene JSON."; }
    mostrarResultado(response, tiempo, resultado);
  } catch (error) {
    // Error de conexión (red, CORS, servidor caído)
    mostrarError("Error de conexión: No fue posible conectarse con el servidor. (" + error.message + ")");
  }
}

function mostrarResultado(response, tiempo, resultado) {
  const ok = response.ok;
  $("estado").textContent = `Status HTTP: ${response.status} ${response.statusText}`;
  $("estado").className = ok ? "ok" : "fail";
  $("tiempo").textContent = `Tiempo de respuesta: ${tiempo.toFixed(2)} ms`;
  if (!ok) mostrarMensaje(`Error HTTP ${response.status}`);
  $("respuesta").textContent = typeof resultado === "string" ? resultado : JSON.stringify(resultado, null, 2);
}

function mostrarError(msg) {
  $("estado").textContent = "Status HTTP: —";
  $("estado").className = "fail";
  mostrarMensaje(msg);
}

function mostrarMensaje(msg) { $("error").textContent = msg; $("error").hidden = false; }

function limpiar() {
  $("error").hidden = true;
  $("estado").textContent = "Status HTTP: —";
  $("estado").className = "";
  $("tiempo").textContent = "Tiempo de respuesta: —";
  $("respuesta").textContent = "";
}