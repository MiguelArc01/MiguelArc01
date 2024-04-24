document.getElementById('file-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        var fileName = file.name;
        document.getElementById('file-name').textContent = 'Arquivo carregado: ' + fileName;
        // Aqui você pode fazer o que precisa com o tipo de arquivo, como processamento adicional
    }
});
