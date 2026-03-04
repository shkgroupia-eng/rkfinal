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
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Cards -> preencher tipo do recebível e descer para o formulário
document.querySelectorAll(".js-open-form").forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.type;
    const select = document.getElementById("tipoRecebivel");
    if (select && tipo) {
      select.value = tipo;
    }
    const formSection = document.getElementById("formulario");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// FAQ accordion
document.querySelectorAll(".rk-faq-item").forEach(item => {
  const btn = item.querySelector(".rk-faq-question");
  if (!btn) return;
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Formulário -> gerar link de WhatsApp com os dados
const form = document.getElementById("leadForm");
const successMsg = document.getElementById("successMsg");
const successLink = document.getElementById("successLink");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const empresa = data.get("empresa") || "";
    const cnpj = data.get("cnpj") || "";
    const segmento = data.get("segmento") || "";
    const tipo = data.get("tipo") || "";
    const valor = data.get("valor") || "";
    const prazo = data.get("prazo") || "";
    const responsavel = data.get("responsavel") || "";
    const contato = data.get("contato") || "";

    const texto =
      `Olá, sou ${responsavel} da empresa ${empresa} (CNPJ: ${cnpj}).%0A` +
      `Segmento: ${segmento}.%0A` +
      `Tipo de recebível: ${tipo}.%0A` +
      `Valor aproximado para antecipar: ${valor}.%0A` +
      `Prazo médio de recebimento: ${prazo}.%0A` +
      `Contato: ${contato}.%0A` +
      `Gostaria de solicitar uma análise de antecipação de recebíveis com a RK Factoring.`;

    const waUrl = `https://wa.me/5511941512192?text=${texto}`;

    if (successMsg && successLink) {
      successMsg.style.display = "block";
      successLink.style.display = "inline-flex";
      successLink.href = waUrl;
    }

    form.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
