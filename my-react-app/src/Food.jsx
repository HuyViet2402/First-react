function Food() {
    const food1 = "Pho";
    const food2 = "Bun bo hue";
    return(
        <ul>
            <li>Banh trang tron</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;