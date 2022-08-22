// Хук useEffect решает задачи всех используемых в примере методов жизненного цикла (componentDidMount, componentDidUpdate, и componentWillUnmount)
 import {useEffect} from 'react'; /*импортитуем Хуки*/

 
 function Example() {

    // Первым параметром данного хука является функция, в которой инициализируется логика эффекта. 
    
    useEffect(() => {
        console.log('render')
    })
    // Запись в примере выше будет аналогична вызову componentDidUpdate в React классе.



    // Вторым параметром useEffect является массив с зависимостями,
    // Если оставить массив пустым, то useEffect будет вызываться один раз после успешного добавления компонента (данная логика повторяет работу componentDidMount).

    useEffect(() => {
        console.log('mounted')
    }, [])

    // Для того, чтобы воспроизвести в useEffect работу componentWillUnmount, требуется вернуть функцию из функции, где мы описываем логику событий, происходящих после удаления компонента. 
    useEffect(() => {
        return () => {
          console.log('will unmount');
        }
      }, []);

    return(
        <>
      
        </>
    )
 }

// componetDidMount
useEffect(() =>{
  console.log('компонент отобразился')
},[])
// componetDidUpdate
useEffect(() => {
 console.log('компонент обновилcя')
})

useEffect(() => {
 console.log('обновился определённый элемент или переменная')
},['переменная'])

// componetnWillMout

useEffect(() =>{
  console.log('компонент отобразился')
  return () => {}
},[])
