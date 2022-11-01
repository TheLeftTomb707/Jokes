import React, { useEffect, useState } from "react";

const App = () => {
    const [country, setCountry] = useState("");

    useEffect(() => {
        async function Data() {
        var response = await fetch(`https://api.chucknorris.io/jokes/random`);
        const json = await response.json();
        var list = [];
        list.push( <>
            <h1>{json.value}</h1>
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