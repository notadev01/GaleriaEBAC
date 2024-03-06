$(document).ready(function() {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const imgURL =  $('#input-img').val();

        $('#imagens').append($(
        `<li style="display: none;">
        <img src="${imgURL}" alt="" />
        <div class="overlay-imagem">
            <a href="${imgURL}" title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real
            </a>
        </div>
        </li>`).fadeIn(1000)
        );

        $('#input-img').val('');

    })
})