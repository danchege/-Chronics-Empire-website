document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('itemName', document.getElementById('itemName').value);
    formData.append('itemDescription', document.getElementById('itemDescription').value);

    const files = document.getElementById('itemImages').files;
    for (let i = 0; i < files.length; i++) {
        formData.append('itemImages', files[i]);
    }

    fetch('http://localhost:5000/api/items', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Item submitted successfully');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
