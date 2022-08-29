import { useState } from "react";

function useToggle (initionValue) {
    const [value, setValue] = useState(initionValue);

    const toggle = () => {
        setValue(!value)
    }

    return [value, toggle]
}
export  {useToggle};



////////////////////////////////////////////////////////////////////

import { useToggle } from './hooks/useToggle';

import './App.css';


function App() {


  const [isVisible, toggleVisibl] = useToggle(true); 

   

  

  return (
      <div className='App'>
        {/* кнопка переклчатель true false */}
        <button onClick ={toggleVisibl}> ToggleReact</button>

        {/* вывод информации в зависимости от состояния isVisible(true или false) */}

        {
          isVisible && (

            <h1>True</h1>
          )
        }
      </div>    
  );
}

export default App;
