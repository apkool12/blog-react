import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집"
  let [글제목1,b] = useState('남자 코트 추천')
  let [글제목2,b2] = useState('강남 우동 맛집')
  let [글제목3,b3] = useState('파이썬 독학')

  return (
    <div className="App">
      <div className="Black-nav">
        <h4>블로그</h4>
      </div>
      <div className = "list">
        <h4>{글제목1} <span>👍</span> 0 </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4>{글제목3}</h4>
        <p>2월 17일 발행</p>
      </div>


    </div>
  );
}
export default App;
