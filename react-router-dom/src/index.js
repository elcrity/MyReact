import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, HashRouter, NavLink, useParams } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

const contents = [
  { id: 1, title: 'HTML', description: 'HTML...' },
  { id: 2, title: 'JS', description: 'JS...' },
  { id: 3, title: 'React', description: 'React...' }
]

function Topic() {
  const params = useParams();
  console.log('params: ', params);

  const topic_id = params.topic_id;

  let selected_topic = {
    title: '없',
    description: '없'
  }

  for (let i of contents) {
    if (i.id === Number(topic_id)) { selected_topic = i; break; }
  }

  return (
    <div>
      <h2>{selected_topic.title}</h2>
      {selected_topic.description}
    </div>

  )
}

function Topics() {

  let lis = [];
  for (let i of contents) {
    lis.push(<li><NavLink to={`/topics/${i.id}`}>{i.title}</NavLink></li>)
  }

  let rLis = [];
  for (let r of contents) {
    rLis.push(<Route path={`/${r.id}`} element={r.description}></Route>)
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path='/:topic_id' element={<Topic />}></Route>
      </Routes>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/*" element={'404 Not Found'} />
      </Routes>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
