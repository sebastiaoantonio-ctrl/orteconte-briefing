function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}

async function carregarResumo() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/briefings?select=*`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    }
  });

  const data = await response.json();

  document.getElementById("dados").innerHTML =
    `<p>Total de Briefings: <strong>${data.length}</strong></p>`;
}

carregarResumo();
