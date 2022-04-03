import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

function Contador(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Home;