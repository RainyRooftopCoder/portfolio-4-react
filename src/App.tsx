import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <div id="top-title">Title</div>
                <div id="top-menu">
                    <ul>
                        <li>
                            <a href="#section1">Profile</a>
                        </li>
                        <li>
                            <a href="#section2">Skill</a>
                        </li>
                        <li>
                            <a href="#section3">Project</a>
                        </li>
                        <li>
                            <a href="#section4">About</a>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <section id="section1">
                    <div>1번 섹션</div>
                </section>
                <section id="section2">
                    <div>2번 섹션</div>
                </section>
                <section id="section3">
                    <div>3번 섹션</div>
                </section>
                <section id="section4">
                    <div>4번 섹션</div>
                </section>
            </main>
        </>
    );
}

export default App;
