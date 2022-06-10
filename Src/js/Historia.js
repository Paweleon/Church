const masonry = new Macy({
    container: '.gallery',
    mobilefirst: true,
    rows: 3,
    breakAT: {
        400: 2,
        700: 3,
        1100: 4,
    },
    margin: {
        x: 20,
        y: 40,
    }
})