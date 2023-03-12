import React, {useEffect, useState} from 'react';
import { Route, Routes} from 'react-router-dom'
import { Login }  from './components/login'
import './App.css';
import {getUsers} from "./http/userApi";

function App() {
    // const [users, setUsers] = useState<IUser[]>([])

    // useEffect(() => {
         // fetchUsers()
    // })

    // async function fetchUsers()
    // {
    //     const response = await getUsers()
    //     setUsers(response)
    //
    // }


  return (
    <Routes>
        <Route path="/" element={<Login />} />

    </Routes>
      );
}

export default App;
