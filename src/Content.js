import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    // const [name, setName] = useState('Peter');
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        // console.log(`key: ${id}`);
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    // const [count, setCount] = useState(0);

    // const handleNameChange = () => {
    //     const names = ["Bob", "Kevin", "Peter"];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int]);
    // };

    // const handleClick = () => {
    //     setCount(count + 1);
    //     console.log(count);
    // };

    // const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`);
    // };

    // const handleClick2 = () => {
    //     console.log(count);
    // };    

    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText);
    // };

    return (
        <main>
            {/* <h3 onDoubleClick={handleClick}> */}
            {/* Hello <i>{handleNameChange()}</i>! */}
            {/* Hello <i>{name}</i>! */}
            {/* </h3> */}
            {/* <button onClick={handleNameChange}>Change Name</button> */}
            {/* <button onClick={handleClick}>Click It</button> */}
            {/* <button onClick={(e) => handleClick3(e)}>Event Click It</button> */}
            {/* <button onClick={handleClick2}>Event Click It</button> */}

            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"

                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content;
