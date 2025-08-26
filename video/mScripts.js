$(function () {
    AOS.init();


    const titulo = document.querySelector('#textLoading');
    typeWrite(titulo);

    $("body").on("click", ".container-button", function () {
        setTimeout(function () {
            $(".container-button").addClass('d-none');
            $(".conjuntoLoading").removeClass('d-none');
        }, 500);

        setTimeout(function () {
            $(".conjuntoLoading").addClass('d-none');
            $("#divVideo").removeClass('d-none').addClass('d-flex');
        }, 3000);
    });

});
