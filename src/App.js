import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    fetch('htps:/gitconnected.com/v1/portfolio/JLara97')
    .then (res => res.json())
    .then(user => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;