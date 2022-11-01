import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        async function Data() {
        var response = await fetch(`https://api.chucknorris.io/jokes/random`);
        const json = await response.json();
        var list = [];
        list.push( <>
            <h1>{json.value}</h1>
        </>
        )
        setJoke(list);
        }
        Data()
    }, []);

    return (
        <div id="content">
            {joke}
            <a href="/"><button id="but">Get New Joke</button></a>
        </div>
    );
};

export default App;
