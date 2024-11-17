document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('#nav');
    const body = document.body;

    // Adiciona um evento de clique ao ícone de menu hambúrguer
    hamburger.addEventListener('click', () => {
        // Alterna a visibilidade do menu ao adicionar/remover a classe 'show'
        nav.classList.toggle('show');

        // Alterna o estado visual do botão hambúrguer (transformação em 'X')
        hamburger.classList.toggle('active');

        // Adiciona ou remove o efeito de desfoque no fundo e impede a rolagem
        body.classList.toggle('menu-open');
    });

    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('#menu li a');
    // Seleciona o iframe onde o conteúdo das páginas será carregado
    const iframe = document.getElementById('contentFrame');

    // Para cada link do menu, adiciona um evento de clique
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Evita o comportamento padrão do link (recarregar a página)
            e.preventDefault();

            // Obtém a URL da página associada ao link
            const pageUrl = this.getAttribute('href');

            // Atualiza o iframe para carregar a página clicada
            iframe.src = pageUrl;

            // Após o clique, fecha o menu ao remover a classe 'show'
            nav.classList.remove('show');

            // Remove o estado 'ativo' do botão hambúrguer (volta ao ícone de 3 barras)
            hamburger.classList.remove('active');

            // Remove o efeito de desfoque e permite a rolagem do body
            body.classList.remove('menu-open');
        });
    });
});
