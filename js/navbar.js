document.addEventListener('DOMContentLoaded', () => {

  // Pega todos os "navbar-burger"
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Verifica se existem
  if ($navbarBurgers.length > 0) {

    // Adiciona o evento de clique em cada um
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Pega o "data-target"
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Alterna a classe "is-active" no burger e no menu
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});