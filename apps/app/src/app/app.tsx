import React, { useEffect, useState } from 'react';

import styles from './app.module.css'

type Counter = {
  value: number
}

export function App() {
  const [count, setCount] = useState<Counter>({value: 0})

  useEffect(() => {
    fetch('/api/init')
      .then(_ => _.json())
      .then(setCount)
  },[])

  function incrementDouble(){
    fetch('/api/incrementdouble', {
      method: 'POST',
      body: JSON.stringify(count),
      headers: {
        'Content-Type': 'application/json'
    },
    }).then(_ => _.json())
      .then(newCounter => {
      setCount(newCounter)
    })
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Hello react pwa</h1>
      </div>
      
      <p>{count.value}</p>

      <button onClick={() => setCount({value: count.value + 1})}>increment</button>
      <button onClick={() => setCount({value: count.value - 1})}>decrement</button>
      <button onClick={incrementDouble}>incrementDouble</button>

    </div>
  );
}

export default App;
