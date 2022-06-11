import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [users, setUsers] = useState([]);

  const API_REST_URL = 'https://randomuser.me/api/?nat=us,dk,fr,gb&results=20';

  const promesa = async () => {
    const respuesta = await fetch(API_REST_URL);
    const {results} = await respuesta.json();
    return results;
  }

  const getUser = () => {
    const copy = [...users];
    promesa().then((usuarios) => {
      setUsers([...copy,...usuarios])
    });
  }

  if(users.length === 0){
    getUser();
  }else{
    return (
      <div className="App">
        <header className="header">
          <div className='title'>
            <h1>Profiles App</h1>
            <h3>From Html Api Rest</h3>
          </div>
        </header>
        <Card users={users} pedir={getUser}/>
      </div>
    );
  }

}

export default App;
