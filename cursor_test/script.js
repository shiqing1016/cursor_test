document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('upload-btn');
    const modal = document.getElementById('upload-modal');
    const fileInput = document.getElementById('file-input');
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    const submitBtn = document.getElementById('submit-btn');

    uploadBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    submitBtn.addEventListener('click', function() {
        // 这里可以添加将图片上传到服务器的代码
        alert('图片上传成功！（实际上只是预览，没有真正上传到服务器）');
        modal.style.display = 'none';
        previewContainer.style.display = 'none';
        fileInput.value = '';
    });
});
