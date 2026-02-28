function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}

async function salvarBriefing() {

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    window.location.href = "index.html";
    return;
  }

  const tipo = document.getElementById("tipo").value;
  const empresa = document.getElementById("empresa").value;
  const cpf_cnpj = document.getElementById("cpf_cnpj").value;
  const grupo = document.getElementById("grupo").value;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/briefings`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      tipo,
      empresa,
      cpf_cnpj,
      grupo,
      usuario_id: usuario.id,
      dados_json: {}
    })
  });

  if (response.ok) {
    document.getElementById("msg").innerText = "Briefing salvo com sucesso!";
  } else {
    document.getElementById("msg").innerText = "Erro ao salvar.";
  }
}
