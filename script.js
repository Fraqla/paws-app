const container = document.getElementById('card-container');
const likedCats = [];
let current = 0;
let cats = [];

fetch('https://cataas.com/api/cats?limit=10')
    .then(response => response.json())
    .then(data => {
        cats = data;
        showCard(current);
    });

function showCard(index) {
    container.innerHTML = ''; // Clear
    if (index >= cats.length) {
        sessionStorage.setItem('likedCats', JSON.stringify(likedCats));
        window.location.href = 'liked.php';
        return;
    }

    const cat = cats[index];
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = cat.id;

    const img = document.createElement('img');
    img.src = `https://cataas.com/cat/${cat.id}`;
    card.appendChild(img);

    container.appendChild(card);
}

document.getElementById('like').addEventListener('click', () => {
    likedCats.push(cats[current].id);
    current++;
    showCard(current);
});

document.getElementById('dislike').addEventListener('click', () => {
    current++;
    showCard(current);
});
