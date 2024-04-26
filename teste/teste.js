document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('file-btn').addEventListener('click', function() {
        document.getElementById('file-input').click();
    });

    document.getElementById('file-input').addEventListener('change', function() {
        var file = this.files[0];
        if (file) {
            var fileName = file.name;
            document.getElementById('file-name').textContent = 'Arquivo carregado: ' + fileName;
            
            // Função para obter o tamanho do arquivo
            function getArquivoTamanho(file) {
                var fileSize = file.size; // Tamanho do arquivo em bytes
                var fileSizeKB = fileSize / 1024; // Tamanho do arquivo em kilobytes

                if (fileSizeKB >= 1) {
                    // Arredondando o tamanho para duas casas decimais
                    var tamanhoKB = fileSizeKB.toFixed(2);
                    return {
                        size: tamanhoKB,
                        unit: 'KB'
                    };
                } else {
                    return {
                        size: fileSize,
                        unit: 'bytes'
                    };
                }
            }

            // Obtendo o tamanho do arquivo
            var tamanhoArquivo = getArquivoTamanho(file);

            // Exibindo o tamanho do arquivo na página HTML
            var output = document.getElementById('output');
            output.innerHTML = 'Tamanho do arquivo: ' + tamanhoArquivo.size + ' ' + tamanhoArquivo.unit;
        }
    });

    document.getElementById('csvForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Aqui você pode adicionar o código para processar o arquivo CSV
    });
});

/*


document.getElementById('csvForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('output').innerHTML = '';

    var delimiter = document.getElementById('delimiter').value;
    if (delimiter !== ',' && delimiter !== ';' && delimiter !== '|') {
        alert('Digite um delimitador válido (, ; |)');
        return;
    }

    var fileInput = document.getElementById('csvFile');
    var file = fileInput.files[0];
    if (!file) {
        alert('Por favor, selecione um arquivo CSV.');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (event) {
        var csvData = event.target.result;

        var lines = csvData.split('\n');

        var columns = lines.map(function (line) {
            return line.split(',');
        });

        var output = document.getElementById('output');
        columns.forEach(function (row) {
            var newRow = row.join(delimiter); //
            var rowDiv = document.createElement('div');
            rowDiv.textContent = newRow;
            output.appendChild(rowDiv);
        });
    };

    reader.readAsText(file);
});

*/