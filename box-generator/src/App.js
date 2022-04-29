import { useState } from "react";
import ColorBox from "./components/ColorBox/ColorBox";
import ColorForm from "./components/ColorForm/ColorForm";

function App() {

  const [boxColors, setBoxColors] = useState([]);

  const createBox = (color,size) => {
    console.log(color);
    let newBoxes = boxColors;
    newBoxes.push({color:color,size:size});
    setBoxColors([...newBoxes]);
    console.log(newBoxes);
  }

  return (
    <div className="container">
      <ColorForm newBox={createBox} />

      <div className="row">
        {
          boxColors.map(color => {
            return (
              <ColorBox  BgColor={color.color} Size={color.size} /> 
            );
          })
        }
      </div>


    </div>
  );
}

export default App;
