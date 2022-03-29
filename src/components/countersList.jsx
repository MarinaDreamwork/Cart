import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {

  const initialState = [
    {id:1, value:0, name: 'Ненужная вещь'}, 
    {id:2, value:0, name: 'Ложка'}, 
    {id:3, value:0, name: 'Вилка'}, 
    {id:4, value:0, name: 'Тарелка'}, 
    {id:5, value:0, name: 'Набор минималиста'}
  ];

  const [counters, setCounters] = useState(initialState);

  const updatedState = [...counters];

  const handleDelete = (id) => {
    const newCounters = counters.filter(count=> count.id!==id);
    setCounters(newCounters);
  }
  const handleReset = () => {
    setCounters(initialState);
  }
  const onIncrement = (id) => {
    mathOperations(id, updatedState, 'increment');
  }

  const onDecrement = (id) => {
    mathOperations(id, updatedState, 'decrement');
  }

  const mathOperations = (id, updatedArray, operation) => {
    for(let newState of updatedArray) {
      if(id === newState.id) {
        switch(operation) {
          case 'increment':
            newState.value += 1;
            break;
          case 'decrement':
            newState.value -= 1;
            break;
          default:
            break;
        }
      }
      setCounters(updatedArray);
    }
  }

  return <>
    {
      counters.map(count=> <Counter 
                            key={count.id}  
                            {...count}
                            onDelete={handleDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}/>)
    }
    <button className="btn btn-primary m-2" onClick={handleReset}>Сброс</button>
  </>
}

export default CountersList;