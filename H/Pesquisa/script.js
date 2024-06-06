// Criando uma instância do ScrollReveal e configurando o reset para true
// Inicializar ScrollReveal
var revelar = ScrollReveal({ reset: true });

// Aplicar a animação às imagens com a classe '.reveal-img' dentro da seção '.corpo3'
revelar.reveal('.corpo3 .efeito-imagem img', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-out',
    delay: 200,
    opacity: 0,
    scale: 0.9
});
