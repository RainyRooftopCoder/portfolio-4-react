import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <div id="top-title">Title</div>
                <div id="top-menu">
                    <ul>
                        <li>Menu1</li>
                        <li>Menu2</li>
                        <li>Menu3</li>
                        <li>Menu4</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default App;
