import { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  type Todo = {
    text: string;
  };
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const submitTask = (task: string) => {
    if (task) {
      setTodos((prevTodos) => [...prevTodos, { text: task }]);
      setText('');
    }
  };

  return (
    <>
      <h1>TS-TODO-APP</h1>
      <p>タスクを入力</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          submitTask(text);
        }}
      >
        タスクを追加
      </button>
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </>
  );
};

export default App;
