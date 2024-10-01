import { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState([]);
  let [emote, setEmote] = useState([]); 
  let [add, setAdd] = useState('');
  let [modal, setModal] = useState(false);
  let [selectedTitle, setSelectedTitle] = useState(0);

  let today = new Date();
  let month  = today.getMonth() + 1;
  let date = today.getDate();

  function addTitle(title) {
    if (title !== '') {
      let newTitles = [...name, title];
      setName(newTitles);
      setEmote([...emote, 0]); 
      setAdd('');
    }
  }

  return (
    <div className="App">
      <div className="Black-nav">
        <h4>Blog</h4>
      </div>
      
      <div>
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button onClick={() => addTitle(add)}> 글 작성 </button>
      </div>

      {name.length > 0 ? (
        name.map((title, i) => (
          <div className="list" key={i}>
            <h4 onClick={() => { setModal(true); setSelectedTitle(i); }}>{title}</h4>
            <span
              onClick={() => {
                let newEmote = [...emote];
                newEmote[i] = newEmote[i] + 1;
                setEmote(newEmote);
              }}
            >
              👍 {emote[i]}
            </span>
            <p>2월 17일 발행</p>
          </div>
        ))
      ) : (
        <>
          <p>아직 작성된 글이 없습니다. 글을 추가해보세요!</p>
          <div> 
            <button onClick = { () => {console.log(month + "월" + date + "일")}}>오늘 날짜</button>
          </div>
        </>
      )}

      {name.length > 0 && (
        <button
          onClick={() => {
            let copy = [...name];
            copy.sort();
            setName(copy);
          }}
        >
          글제목 정렬
        </button>
      )}

      {modal && (
        <Modal
          name={name}
          setName={setName}
          selectedTitle={selectedTitle}
          setModal={setModal}
        />
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.name[props.selectedTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.name];
          copy[props.selectedTitle] = "수정된 글 제목";
          props.setName(copy);
        }}
      >
        글 수정하기
      </button>
      <button onClick={() => props.setModal(false)}>닫기</button>
    </div>
  );
}

export default App;
