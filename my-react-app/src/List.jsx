function List() {
    const fruits = [{id : 1, fruit_name : "apple", weight : 3},
                    {id : 2, fruit_name : "mango", weight : 5},
                    {id : 3, fruit_name : "banana", weight : 2},
                    {id : 4, fruit_name : "watermelon", weight : 30},
                    {id : 5, fruit_name : "orange", weight : 6},];
    //fruits.sort((a, b) => a.weight - b.weight)
    //fruits.sort((a,b) => a.fruit_name.localeCompare(b.fruit_name));
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.fruit_name}: &nbsp;
                                            <b>{fruit.weight}</b> </li>);
    return(<ol>{listItems}</ol>);
}
export default List;