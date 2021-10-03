/*!
 * Start Bootstrap - Bare v5.0.5 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */

$(document).ready(function() {
    $("#sale_value").maskMoney({
        prefix: 'R$ ',
        allowNegative: true,
        thousands: '.',
        decimal: ',',
        affixesStay: false
    });

    $.getJSON('http://api-tray.test/sellers/getAll', function(data) {
        $.each(data, function(key, value) {
            $('#seller_id').append("<option value='" + value.id + "'>" + value.name + "</option>");
        });
    });

    //Funcão que pega os dados do formulário de vendedor e envia para a api
    $('.addSale').click(function() {
        var dados = $('.formSale').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'http://api-tray.test/sales/',
            async: true,
            data: dados,
            success: function(response) {
                $(location).prop('href', 'index.html');
            }
        });

        return false;
    });
});