let page = 4

async function getResultsByApi(){
  const result = await fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(data => data.results)

  return result;
}

async function putElementsInBody() {
  const arrCharecters = await getResultsByApi();

  const div = document.querySelector("#toLocateCharacters");
  console.log(div)

  for (let i = 0; i < arrCharecters.length; i++) {
    const container = document.createElement("div");
    const currentPerson = arrCharecters[i];
    
    const name = document.createElement("p");
    name.innerText = `Name Completo: ${currentPerson.name}`;
    container.appendChild(name);

    const image = document.createElement("img")
    image.src = currentPerson.image;
    container.appendChild(image);

    const specie = document.createElement("p");
    specie.innerText = `Specie: ${currentPerson.species}`; 
    container.appendChild(specie);

    const specie2 = document.createElement("p");
    specie.innerText = `Specie2: ${currentPerson.species}`; 
    container.appendChild(specie2);

    div.appendChild(container);
  }
}

putElementsInBody()