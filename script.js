function updateDashboard() {
  const now = new Date();

  const formattedDate = now.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium"
  });

  document.getElementById("lastUpdate").textContent =
    `Análise atualizada em ${formattedDate}`;

  const alerts = Math.floor(Math.random() * 5) + 1;
  const satellites = 120 + Math.floor(Math.random() * 20);

  document.getElementById("alerts").textContent = alerts;
  document.getElementById("satellites").textContent = satellites;

  const orbitalOptions = ["Baixo", "Médio", "Médio", "Alto"];
  const solarOptions = ["Baixo", "Baixo", "Médio"];

  document.getElementById("orbitalRisk").textContent =
    orbitalOptions[Math.floor(Math.random() * orbitalOptions.length)];

  document.getElementById("solarRisk").textContent =
    solarOptions[Math.floor(Math.random() * solarOptions.length)];
}

updateDashboard();

setInterval(updateDashboard, 10000);