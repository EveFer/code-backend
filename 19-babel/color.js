const getColor = () => {
    const red = Math.floor(Math.random() * (256 - 0)) + 0;
    const green = Math.floor(Math.random() * (256 - 0)) + 0;
    const blue = Math.floor(Math.random() * (256 - 0)) + 0;

    return [red, green, blue]
} 

console.log(getColor())