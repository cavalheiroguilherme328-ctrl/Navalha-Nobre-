// WhatsApp da barbearia: Brasil + DDD + número.
const WHATSAPP_NUMBER = "5551993379406";

// Abre o WhatsApp com uma mensagem personalizada.
function openWhatsApp(service = "Agendamento") {
  const message = `Olá! Gostaria de consultar horários para: ${service}.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// Botões de escolha dos serviços.
document.querySelectorAll(".choose-service").forEach((button) => {
  button.addEventListener("click", () => {
    openWhatsApp(button.dataset.service || "Agendamento");
  });
});

// Menu principal.
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Atualiza o ano do rodapé.
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
