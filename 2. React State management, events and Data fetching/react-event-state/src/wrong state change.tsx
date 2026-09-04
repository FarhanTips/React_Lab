

export default function StateDoesntWork(){
    let counter = 0;
    const handleItems = () => {
        counter= counter+1;
    }

    return (
        <div>
        <h3>Shopping Cart</h3>
        <p>Total Items: {counter}</p>
        <button onClick={handleItems}>Add Item</button>
        </div>
    )
}


// It will not work, because changing a normal JavaScript variable does not tell React to re-render the component.

// The variable does change, but React doesn't know that it needs to run the component again. React's UI updates when state changes, not when an ordinary variable changes.


// So we have to change the state. Let's see in state change file.

