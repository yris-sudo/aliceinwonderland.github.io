document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    // Inicializa a visibilidade de todos os itens
    carouselItems.forEach((item, i) => {
        item.style.display = i === currentIndex ? 'flex' : 'none'; // Mostra apenas o item atual
    });

    // Exibe o item atual
    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.style.display = i === index ? 'flex' : 'none'; // Mostra apenas o item atual
        });
        prevBtn.style.display = index === 0 ? 'none' : 'block'; // Esconde a seta esquerda no primeiro item
        nextBtn.style.display = index === carouselItems.length - 1 ? 'none' : 'block'; // Esconde a seta direita no último item
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showItem(currentIndex); // Chama a função para exibir o novo item
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex); // Chama a função para exibir o novo item
    });

    showItem(currentIndex); // Inicializa o carrossel mostrando o primeiro item
});
