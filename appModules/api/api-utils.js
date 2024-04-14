const getData = async (url) => {
    try {
        const response = await fetch('https://api-code-2.practicum-team.ru/games');
        const data = await response.json();
    } catch (error) {
        console.log(error);
        return error
    }
}

const getRandomGame = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

module.exports = {
    getData,
    getRandomGame
}