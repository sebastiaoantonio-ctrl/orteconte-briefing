async function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/usuarios?email=eq.${email}&senha=eq.${senha}`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    }
  });

  const data = await response.json();

  if (data.length > 0) {
    localStorage.setItem("usuario", JSON.stringify(data[0]));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("erro").innerText = "Email ou senha inválidos";
  }
}
