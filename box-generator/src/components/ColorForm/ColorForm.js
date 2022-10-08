import React, { useEffect, useState } from "react";

const ColorForm = (props) => {

    const [colors, setColors] = useState(["red", "black", "green", "blue", "orange"]);
    const [thisColor, setThisColor] = useState(colors[0]);
    const [thisSize, setThisSize] = useState(100);

    const updateForm = (e) => {
        e.preventDefault();

        if (thisColor !== "" && thisColor !== undefined) {
            props.newBox(thisColor, thisSize);
            let newColors = colors.filter(item => item !== thisColor);
            setColors(newColors);
            console.log("Lista Filtrada:", newColors);
            console.log("colors State:", colors);
            setThisColor(newColors[0]);
        }
    }

    useEffect(()=>{
        console.log("ACTUALICÉ colors:",colors);
    },[colors])

    return (

        <div className="container">

            <form onSubmit={(e) => updateForm(e)}>
                <div className="form-control">
                    <label>Color</label>
                    <select name="color" className="form-control" onChange={(e) => setThisColor(e.target.value)}>
                        {
                            colors.map(color => {
                                return (
                                    <option key={color} value={color}>{color}</option>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="form-control">
                    <label>Size</label>
                    <input type="number" className="form-control" onChange={(e) => setThisSize(e.target.value)} value={thisSize} />
                </div>
                <button type="submit" className="btn btn-success">Create Box</button>
            </form>

        </div>
    );

}

export default ColorForm;