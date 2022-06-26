const heading = document.querySelector('body');

const age = 30;
const firstName = "Świętopełek";

function greet(age, firstName) {
    console.log(
        `Witaj przybyszu, nazywam się ${firstName} i mam ${age} lat`
        );

}
/*PRZYKŁAD*/

/*skrótowy zapis funkcji*/
const calculate = (myNumber) => myNumber*7;

/*dłuższy zapis funkcji*/

function calculateOld(myNumber) {
    return myNumber*10;
}

const myResult = calculateOld(8)
console.log(myResult);

/*KONIEC PRZYKŁADU*/



greet(age, firstName);
greet(age, firstName);
greet(age, firstName);
greet(age, firstName);

function creatContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = (content);
}

creatContent

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: `Death Star`,
    population: 10000,
    isLighton: true,
    commander: {
        name: 'Paweleon',
        age: 200,
    }
}

deathStar.fire('Rebel ship')

console.log(deathStar.name)

console.log(deathStar.commander.name)




const button = document.querySelector('.navigation__button--js')
button.addEventListener( 'click', () => {
    const nav = document.querySelector(".navigation--js");
    nav.classList.toggle('navigation--open');
})

const buttom = document.querySelector('.navigation__button--js')
buttom.addEventListener( 'click', () => {
    const nav = document.querySelector(".bar__zero--js");
    nav.classList.toggle('line__zero--js');
})

/*krzyżyk*/

const buttons = document.querySelector('.navigation__button--js')
buttons.addEventListener( 'click', () => {
    const nav = document.querySelector(".bar__first--js");
    nav.classList.toggle('line__first--js');
    
})

const buttonik = document.querySelector('.navigation__button--js')
buttonik.addEventListener( 'click', () => {
    const nav = document.querySelector(".bar__second--js");
    nav.classList.toggle('line__second--js');
})