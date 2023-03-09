import React, {useEffect, useState} from 'react';
import Card from './components/card'
import './App.css';
import {IUser} from "./types/types";
import {getUsers} from "./http/userApi";

function App() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        // fetchUsers()
    })

    async function fetchUsers()
    {
        const response = await getUsers()
        setUsers(response)
        
    }


  return (
    <div className="App">
        <Card users={users} />
    </div>
  );
}

export default App;
