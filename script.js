let currentAnimal = null;

document.addEventListener("DOMContentLoaded", function() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            let animalListDiv = document.getElementById('animalList');
            data.characters.forEach(animal => {
                let animalNameDiv = document.createElement('div');
                animalNameDiv.textContent = animal.name;
                animalNameDiv.style.cursor = 'pointer';
                animalNameDiv.onclick = function() { showAnimalDetails(animal); };
                animalListDiv.appendChild(animalNameDiv);
            });
        })
        .catch(error => console.error('Error:', error));


document.getElementById('resetButton').addEventListener('click', function() {
    if (currentAnimal) {
        currentAnimal.votes = 0;
        document.getElementById('animalVotes').textContent = `Votes: ${currentAnimal.votes}`;
    }
  });
    
    document.getElementById('voteButton').addEventListener('click', function() {
        if (currentAnimal) {
            currentAnimal.votes += 1;
            document.getElementById('animalVotes').textContent = `Votes: ${currentAnimal.votes}`;
        }
    });
});

function showAnimalDetails(animal) {
    currentAnimal = animal;
    document.getElementById('animalName').textContent = animal.name;
    document.getElementById('animalImage').src = animal.image;
    document.getElementById('animalVotes').textContent = `Votes: ${animal.votes}`;
    document.getElementById('animalDetails').style.display = 'block';
}


