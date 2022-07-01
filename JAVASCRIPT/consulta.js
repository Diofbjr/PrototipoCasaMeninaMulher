$(document).ready( function () {
    $('#tabela').DataTable({
        language: {
            lengthMenu: 'Mostrar _MENU_ ',
            zeroRecords: 'Nada encontrado',
            info: 'Página _PAGE_ de _PAGES_',
            infoEmpty: 'Nenhum registro disponível',
            infoFiltered: '(Filtrado de _MAX_ cadastros)',
            search: "Pesquisar",
            paginate: {
                next: "Próximo",
                previous: "Anterior",
            }
        }
    });
} );