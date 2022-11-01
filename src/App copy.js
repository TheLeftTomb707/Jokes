import React, { useEffect, useState } from "react";

const App = () => {
    const [country, setCountry] = useState("");

    useEffect(() => {
        async function Data() {
        var response = await fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`);
        const json = await response.json();
        var list = [];
        list.push( <>
            <h1>{json.quotes[Math.floor(Math.random()*102)].quote}</h1>
        </>
        )
        setCountry(list);
        }
        Data()
    }, []);

    return (
        <div id="content">
            {country}
        </div>
    );
};

export default App;