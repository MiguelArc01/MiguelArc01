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
document.getElementById('open-popup-btn').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'block';
});

document.getElementById('close-popup-btn').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'none';
});

document.getElementById('popup-container').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});