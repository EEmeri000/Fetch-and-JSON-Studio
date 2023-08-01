// TODO: add code here
function createAstronautCard(astronaut) {
    const astronautDiv = document.createElement('div');
    astronautDiv.classList.add('astronaut');

    const bioDiv = document.createElement('div');
    bioDiv.classList.add('bio');

    const nameHeader = document.createElement('h3');
    nameHeader.textContent = `${astronaut.firstName} ${astronaut.lastName}`;

    const infoList = document.createElement('ul');
    const hoursInSpace = document.createElement('li');
    hoursInSpace.textContent = `Hours in space: ${astronaut.hoursInSpace}`;

    const activeStatus = document.createElement('li');
    activeStatus.textContent = `Active: ${astronaut.active}`;

    const skills = document.createElement('li');
    skills.textContent = `Skills: ${astronaut.skills.join(', ')}`;

    infoList.appendChild(hoursInSpace);
    infoList.appendChild(activeStatus);
    infoList.appendChild(skills);

    bioDiv.appendChild(nameHeader);
    bioDiv.appendChild(infoList);

    const astronautImage = document.createElement('img');
    astronautImage.classList.add('avatar');
    astronautImage.src = `${astronaut.picture}`;

    astronautDiv.appendChild(bioDiv);
    astronautDiv.appendChild(astronautImage);

    return astronautDiv;
}

// Function to fetch the astronauts data and populate the container div
window.addEventListener('load', () => {
    const container = document.getElementById('container');

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(astronaut => {
                const astronautCard = createAstronautCard(astronaut);
                container.appendChild(astronautCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});