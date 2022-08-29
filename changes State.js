import {useState} from 'react';

import './App.css';


function App() {

//  Создаём useState

  const [isVisible, setVisible] = useState(true); 

  // Функция для обработки useState
  // меняет true на false и наоборот 

  const hundleVisible = () =>{
    setVisible(!isVisible)
  }  

  return (
      <div className='App'>
        {/* кнопка переклчатель true false */}
        <button onClick ={hundleVisible}> ToggleReact</button>

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
