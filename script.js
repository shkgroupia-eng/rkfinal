// Menu mobile
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Cards abrindo formulário com tipo selecionado
document.querySelectorAll(".js-open-form").forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.type;
    const select = document.getElementById("tipoRecebivel");
    if (select) {
      select.value = tipo;
    }
    document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
  });
});

// FAQ
document.querySelectorAll(".rk-faq-item").forEach(item => {
  const btn = item.querySelector(".rk-faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Formulário -> monta texto para WhatsApp
const form = document.getElementById("leadForm");
const successMsg = document.getElementById("successMsg");
const successLink = document.getElementById("successLink");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const empresa = data.get("empresa");
    const cnpj = data.get("cnpj");
    const segmento = data.get("segmento");
    const tipo = data.get("tipo");
    const valor = data.get("valor");
    const prazo = data.get("prazo");
    const responsavel = data.get("responsavel");
    const contato = data.get("contato");

    const texto =
      `Olá, sou ${responsavel} da empresa ${empresa} (CNPJ: ${cnpj}).%0A` +
      `Segmento: ${segmento}.%0A` +
      `Tipo de recebível: ${tipo}.%0A` +
      `Valor aproximado para antecipar: ${valor}.%0A` +
      `Prazo médio de recebimento: ${prazo}.%0A` +
      `Contato: ${contato}.%0A` +
      `Gostaria de solicitar uma análise de antecipação de recebíveis com a RK Factoring.`;

    const waUrl = `https://wa.me/5511941512192?text=${texto}`;

    successMsg.style.display = "block";
    successLink.style.display = "inline-flex";
    successLink.href = waUrl;

    form.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
