
document.addEventListener('DOMContentLoaded', () => {
    const resultDOM = document.querySelector('.results');

    document.getElementById('searchForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const name = document.getElementById('nameInput').value;
        const url = `http://localhost:3000/api/v1/products?name=${encodeURIComponent(name)}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            resultDOM.innerText = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error:', error);
            resultDOM.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>';
        }
    });
});



