import './App.css';
import InputSample from './components/InputSample';
import InputSample2 from './components/InputSample2';
import EventHandling from './components/EventHandling';
import EventPractice from './components/EventPractice';
import ValidationSample from './components/ValidationSample';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import { useRef, useState } from 'react';
import RefLocal from './components/RefLocal';
import RefLocal2 from './components/RefLocal2';

function App() {
  const [inputs, setInputs] = useState({
    username: '', email: ''
  });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // users.push(user);
    // setUsers(users);
    setUsers(users.concat(user));
    nextId.current += 1;
    setInputs({ username: '', email: '' })
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onDelete = (id) => {
    console.log(id);
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : { ...user }
    ))
  }
  return (
    <div className="App">
      {/* <InputSample/>
      <EventHandling/>
      <EventPractice/> */}
      {/* <InputSample2></InputSample2> */}
      {/* <ValidationSample/> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users} onToggle={onToggle} onDelete={onDelete} />
      <RefLocal/>
      <RefLocal2/>
    </div>
  )
};

export default App;
