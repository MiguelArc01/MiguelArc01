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

document.getElementById('csvForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Seu código JavaScript existente aqui...
});

document.getElementById('csvFile').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    if (file) {
        const fileSize = file.size;
        const fileSizeFormatted = formatFileSize(fileSize);
        document.getElementById('file-size').textContent = ' (' + fileSizeFormatted + ')';
    } else {
        document.getElementById('file-size').textContent = '';
    }
});

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
