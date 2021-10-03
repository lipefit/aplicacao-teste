/*!
 * Start Bootstrap - Bare v5.0.5 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */

$(document).ready(function() {
    // Monta a tabela com a lista de vendedores e suas comissões
    $('.sellers').DataTable({
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        },
        "processing": true,
        "ajax": {
            "url": "http://api-tray.test/sellers/getAll",
            dataSrc: ''
        },
        "columns": [{
            "data": "id"
        }, {
            "data": "name"
        }, {
            "data": "email"
        }, {
            "data": "commission",
            "render": function(data) {
                return "R$ " + $.number(data, 2, ',', '.');
            }
        }, {
            "data": "id",
            "render": function(data) {
                return '<a class="btn btn-primary" href="sales.html?s=' + data + '">Vendas</a>';
            }
        }]
    });
});