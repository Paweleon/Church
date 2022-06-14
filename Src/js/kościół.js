alert('Szczęść Boże!')


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

creatContent'.section--js', 'zmienione w JS';

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