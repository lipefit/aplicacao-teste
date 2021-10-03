/*!
 * Start Bootstrap - Bare v5.0.5 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */

$(document).ready(function() {
    //Funcão que pega os dados do formulário de vendedor e envia para a api
    $('.addSeller').click(function() {
        var dados = $('.formSeller').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'http://api-tray.test/sellers/',
            async: true,
            data: dados,
            success: function(response) {
                $(location).prop('href', 'index.html');
            }
        });

        return false;
    });
});