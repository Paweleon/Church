alert('Szczęść Boże!')
const masonry = new Macy({
    container: '.gallery',
    mobilefirst: true,
    columns: 3,
    breakAT: {
        400: 2,
        700: 3,
        1100: 4,
    },
    margin: {
        x: 10,
        y: 40,
    }
})