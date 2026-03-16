import {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получает post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      //Тернарным оператором зададим условие вывода сообщения при отсутствии постов
      {posts.length !== 0 // Если длинна массива с постами не равнна нулю
        ?
        <PostList remove={removePost} posts={posts} title="Список постов 1"/> //Отрисовывает список постов
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1> //Выдает сообщение об отсутствии постов
      }
      
    </div>
  );
}

export default App;
