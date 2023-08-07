import './App.css';
import PropTypes from 'prop-types'
import React, { useState } from 'react';
import Student from './compo/Student';
import Comp01 from './compo/Comp01';
import Comp02 from './compo/Comp02';
import Comp_prac from './compo/Comp_prac';
import Wrapper from './compo/Wrapper';
import Hello from './compo/Hello';
import Cnt from './compo/Cnt1'
import Cnt2 from './compo/Cnt2';

const style = {
  color: 'red',
  backgroundColor: 'green',
  fontSize: '20px',
  padding: '1rem' //다른 단위 사용시 문자열로 설정
}


function Header(tt) {
  return (
    <header>
      {/* 주석 */}
      <><a href="/" onClick={
        function (event) {
          event.preventDefault();
          tt.onChangeMode();
        }
      }>{tt.title}</a></>
    </header>
  )
}
function Nav(q) {
  const lis = []
  for (let i = 0; i < q.topics.length; i++) {
    let t = q.topics[i];
    lis.push(<li key={t.id}>
      <a href={`/read/${t.id}`} onClick={
        event => {
          event.preventDefault();
          q.onChangeMode(parseInt(event.target.id));
        }
      } id={t.id}>{`id : ${t.id} body : ${t.body}`}</a>
    </li>);
  }
  return (
    <nav style={style}>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}
function Article(a) {
  return (
    <article>
      <h2>{a.title}</h2>
      {a.body}
    </article>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onClick(title, body);
        // props.onCreate(title,body);

      }}>
        <input type="text" name='title' placeholder='title' />
        <p><textarea name='body' color='30' rows='10'></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [content, setContent] = useState({
    title: props.title,
    body: props.body
  })
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event => {
        event.preventDefault();
        props.onUpdate(title, body);

      }}>
        <input type="text" name='title' placeholder='title' value={title}
          onChange={(event) => {
            console.log(event.target.value);
            setTitle(event.target.value);
          }} />
        <p><textarea name='body' color='30' rows='10' value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}></textarea></p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>)
}

function Delete(props) {
  // console.log(props.target.id);
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  // const {cnt,setCnt} = useState(0);
  const name = 'react'
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is .......' },
    { id: 2, title: 'css', body: 'css is .......' },
    { id: 3, title: 'javascript', body: 'javascript is .......' }
  ]);
  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title='WELCOME' body={`Welcome, ${topics[0].title}`} />
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = `Read, ${topics[i].body} ${topics[i].id}`
      }
    }
    // title = topics[id-1].title;
    // body = `Read, ${topics[id-1].body} ${topics[id-1].id}`
    content = <Article title={title} body={body} />
    contextControl = [
      <li><a href={"/update" + { id }} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>,
      <li><a href={"/delete" + { id }} onClick={event => {
        event.preventDefault();
        const newTopics = [];
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        
        setTopics(newTopics);
        setMode('WELCOME')
      }}>Delete</a></li>
    ]

  } else if (mode === 'CREATE') {
    content = <Create onClick={(_title, _body) => {
      // content = <Create onCreate={(_title,_body)=>{
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setId(nextId);
      setNextId(nextId => nextId + 1);
      setTopics(newTopics);
      setMode("READ");
    }} />
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = `Read, ${topics[i].body} ${topics[i].id}`
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      console.log(title, body);
      const updateTopics = { id: id, title: title, body: body };
      const newTopics = [...topics]
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === updateTopics.id) {
          newTopics[i] = updateTopics
          break;
        }
      }
      setTopics(newTopics);
    }} />
  }
  return (
    <div className="App">
      {/* Hello, Wordl! */}
      <Header title='11' onChangeMode={function () {
        // mode = 'WELCOME';
        setMode('WELCOME');
      }} />
      <Nav topics={topics} onChangeMode={(id) => {
        // mode = 'READ';
        setMode('READ');
        setId(id);
      }} />{name}
      {content}
      {/* <Cnt/> */}
      {/* <Cnt2/> */}
      {/* <Article title='hi' body='bbbb,web' /> */}
      {/* <Article title='aa' body='ccc' />
      <div style={style}>
        {name}
      </div>
      <div className="gray-box"></div>
      <Student />  */}
      {/* <Comp01/>
      <Comp02/> */}
      {/* <Wrapper>
        <Hello color='green' name = 'React' favoriteNumber={100}/>
        <Hello color='blue' favoriteNumber={100222}/>
        <Hello color='green' name = {123}/>
      </Wrapper> */}
      {/* <Comp_prac/> */}
      <ul>
        <li>
          <a href="/create" onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}


export default App;
