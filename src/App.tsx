import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {

  const [aa, setAA] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const responsedata = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
      console.log(responsedata, 'a')
      setAA(responsedata)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Card
        width='200px'
        height='200px'
        variant={CardVariant.primary}
        onClick={(num) => console.log('alo', num)}
      >
        <button>sfs</button>
      </Card>
      <UserList users={aa} />
    </div>
  );
}

export default App;
