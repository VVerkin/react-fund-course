import {useState} from 'react';
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

  return (
    <div className="App">
    <form>
      <MyInput type="text" placeholder="Название поста"></MyInput>
      <MyInput  type="text" placeholder="Описание поста"></MyInput>
      <MyButton disabled>Создать пост</MyButton>
    </form>
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
