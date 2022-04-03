import { useState } from 'react';
import Link from 'next/link';

function Home(){
    return (
        <div>
            <h1>
                Crush API
            </h1>
            <Link href="/sobre">
                <a>
                    Sobre
                </a>
            </Link>
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
            <p>{count} crushes</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Home;