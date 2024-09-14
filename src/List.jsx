import React from 'react';

function List(props) {  // Pass props here
    const category = props.category;
    const items = props.items;

    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 105 },
        { id: 3, name: "Cherry", calories: 5 },
        { id: 4, name: "Date", calories: 20 },
        { id: 5, name: "Fig", calories: 25 },
        { id: 6, name: "Elderberry", calories: 5 }
    ];

    const vegetables = [
        { id: 1, name: "Asparagus", calories: 20 },
        { id: 2, name: "Broccoli", calories: 55 },
        { id: 3, name: "Cabbage", calories: 20 },
        { id: 4, name: "Dill", calories: 5 },
        { id: 5, name: "Eggplant", calories: 20 },
        { id: 6, name: "Fennel", calories: 5 }
    ];

    const listItems = items.map((item) => (
        <li key={item.id}>
            {item.name} &nbsp; <b>{item.calories}</b> calories
        </li>
    ));

    return (
        <>
            <h1 className="item-cat">{category}</h1>
            <ul className="item-list">
                {listItems}
            </ul>
            <hr />
        </>
    );
}

export default List;
