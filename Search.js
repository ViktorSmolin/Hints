// Получение данных с data в виде Json
// Реализована сортировка 

// import data from './data';

import {useState, useMemo} from 'react';

 const data = [
    {
      "_id": "6255e39eeb573e64a1109564",
      "name": "Landry Robinson"
    },
    {
      "_id": "6255e39edba2292a4fd86fd6",
      "name": "Browning Velez"
    } ]

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text]);

    const onValueChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
