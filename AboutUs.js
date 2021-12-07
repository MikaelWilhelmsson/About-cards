const modalWrapper = document.querySelector("#about-modal-wrapper"); //sätter variabler i det globala scopet för att göra dem åtkomliga för alla.
const cardWrapper = document.querySelector("#about-cards-wrapper");

const cards = [ //arrayen cards som håller properties av olika dattyper: name, content, occupation, experience
    {
        name: "Henric",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et orci id neque ullamcorper cursus. Quisque interdum erat eget magna egestas, eu rhoncus magna dignissim. Mauris ultricies elementum leo, eget accumsan magna commodo nec. Integer metus arcu, mattis et libero quis, malesuada lobortis ligula. Mauris ultrices risus sed ultricies consequat. Nulla facilisi. Vestibulum luctus lacinia faucibus. In nec pretium dui. Suspendisse tristique a tortor eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        occupation: "Barberer",
        experience: `10, Award-winner`
    },
    {
        name: "Sassan",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et orci id neque ullamcorper cursus. Quisque interdum erat eget magna egestas, eu rhoncus magna dignissim. Mauris ultricies elementum leo, eget accumsan magna commodo nec. Integer metus arcu, mattis et libero quis, malesuada lobortis ligula. Mauris ultrices risus sed ultricies consequat. Nulla facilisi. Vestibulum luctus lacinia faucibus. In nec pretium dui. Suspendisse tristique a tortor eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        occupation: "Hairdresser",
        experience: "Master"
    },
    {
        name: "Sultan",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et orci id neque ullamcorper cursus. Quisque interdum erat eget magna egestas, eu rhoncus magna dignissim. Mauris ultricies elementum leo, eget accumsan magna commodo nec. Integer metus arcu, mattis et libero quis, malesuada lobortis ligula. Mauris ultrices risus sed ultricies consequat. Nulla facilisi. Vestibulum luctus lacinia faucibus. In nec pretium dui. Suspendisse tristique a tortor eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        occupation: "Barberer & Hairdresser",
        experience: "Master"
    },
    {
        name: "Islam",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et orci id neque ullamcorper cursus. Quisque interdum erat eget magna egestas, eu rhoncus magna dignissim. Mauris ultricies elementum leo, eget accumsan magna commodo nec. Integer metus arcu, mattis et libero quis, malesuada lobortis ligula. Mauris ultrices risus sed ultricies consequat. Nulla facilisi. Vestibulum luctus lacinia faucibus. In nec pretium dui. Suspendisse tristique a tortor eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        occupation: "Stylist & Barberer",
        experience: "Master"
    },
    {
        name: "Mikael",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et orci id neque ullamcorper cursus. Quisque interdum erat eget magna egestas, eu rhoncus magna dignissim. Mauris ultricies elementum leo, eget accumsan magna commodo nec. Integer metus arcu, mattis et libero quis, malesuada lobortis ligula. Mauris ultrices risus sed ultricies consequat. Nulla facilisi. Vestibulum luctus lacinia faucibus. In nec pretium dui. Suspendisse tristique a tortor eget vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        experience: "Rookie"
    },
];


const cardElements = cards
    .map( //.map() skapar upp en ny array för varje kort (index) i arrayen cards.
        (card, index) => `
        <div class="about-card">
            <button class="about-btn" onclick="openModal(${index})">Read more about ${card.name}</button>
        </div>
        `)
        //Sätter en button för varje kort med ett onclick-event igenon openModal funktionen - beroende på index.
    .join(""); //För att ta bort komma-tecket som separerar arrayerna.


cardWrapper.innerHTML = cardElements;


const openModal = (index) => { // funktion för att öppna modalen - beroende på index (parameter) så retunerars olika värden på de olika korten - namn, occupation, content, experience.
    const {name, content,occupation, experience} = cards[index]; //deklarerar variabler för cards[index] - mindre kod.
    const modalContent = document.querySelector("#about-modal-content"); //deklarerar modalContent - mindre kod.
    modalContent.innerHTML = `
    <div class="about-modal-header">
        <span onclick="closeModal()">X</span>
    </div>
    <div class="about-modal-body">
        <h2>${name}</h2>
        <br>
        <p>${content}</p>
        <br>
        <p>${occupation ? `<strong>Occupation: </strong>  ${occupation}` : ""}</p>
        <br>
        <p><strong>Experience level: </strong>${experience ? experience : ""}</p>
    </div>
    `;
    //två ternary-operatorer istället för if-satser som kollar om occupation samt experience är truthy, om inte retunerar dem en tom sträng. Mindre kod.
    modalWrapper.style.display = "flex";
};

const closeModal = () => { // funktion för att stänga modalen - genom display none.
    modalWrapper.style.display = "none";
};
    
