import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Текст в инпуте')

  return (
    <div className="App">
      <div className="post">
        <div clssName="post__content">
          <strong>1. Javascript</strong>
          <div>
            Javascript - язык програмирования
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
