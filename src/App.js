import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [좋아요, 좋아요변경] = useState(0);
  let [modal,setModal] = useState(false);

  return (
    <div className="App">
      <div className="Black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          modal != true ? setModal(true) : setModal(false) 
        }}>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
            modal != true ? setModal(true) : setModal(false) 
          }}>
          {글제목[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          modal != true ? setModal(true) : setModal(false) 
        }}>{글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {/* <button onClick={() => {b(['여자 코트 추천','강남 우동맛집','파이썬 독학'])}}> 버튼 </button> */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          b(copy);
        }}
      >
        버튼
      </button>
      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}
export default App;

function Modal() {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// 리액트 무엇이냐 . 