import {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/Ui/select/MySelect';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'аа', body: 'бб'},
    {id: 2, title: 'гг 2', body: 'аа'},
    {id: 3, title: 'вв 3', body: 'хх'},
  ]);
  // Реализуем двустороннее связывание
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получает post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[ 
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>

      {
        // Тернарным оператором зададим условие вывода сообщения при отсутствии постов
        posts.length !== 0 // Если длинна массива с постами не равнна нулю
        ?
        <PostList remove={removePost} posts={posts} title="Посты про JS"/> //Отрисовывает список постов
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1> //Выдает сообщение об отсутствии постов
      }
      
    </div>
  );
}

export default App;
