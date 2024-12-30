gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Função para rolar suavemente para o ID da sessão
function scrollToSection(linkid, sessaoid) {
  document.getElementById(linkid).addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    gsap.to(window, {
      duration: 2, // duração da animação em segundos
      scrollTo: `#${sessaoid}`, // id da sessao
      ease: "power2.out", // efeito de suavização
    });
  });
}

//chamando a funcão para cada link e sessão
scrollToSection("link1", "sessao1");
scrollToSection("link2", "sessao2");
scrollToSection("link3", "sessao3");
scrollToSection("link4", "sessao4");

gsap.to(".box", {
  scrollTrigger: ".box", // start animation when ".box" enters the viewport
  x: 200,
});
