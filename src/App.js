import {useState, useRef} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton'
import MyInput from './components/Ui/input/MyInput';


function App() {

  const [posts, setProps] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ]);

  const [title, setTitle] = useState('')

    {/*Получение данных из неуправляемого инпута с помощью useRef */}
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
    <form>
    {/*Управляемый контент*/}
      <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Название поста" 
      />
      {/*Неуправляемый контент*/}
      <MyInput
        ref={bodyInputRef}
        type="text"
        placeholder="Описание поста" />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
