import {useState} from 'react';
import MyButton from './Ui/button/MyButton'
import MyInput from './Ui/input/MyInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''}) // Создаем состояние с объектом, в котором сразу инициализируем пустые строки

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})} // Вызываем setPost и передаем туда объект, в котором разворачиваем старый Post и перезатираем нужное нам поле в конкретно этом инпуте
        type="text"
        placeholder="Название поста" 
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})} // Аналогично изменяем нужное нам поле
        type="text"
        placeholder="Описание поста" />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;