import { useState } from "react";



const Autocomplete = ({ suggestions }) => {
    const [input, setInput] = useState("");
    


    

    
    return (
        <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}/>

    );
}