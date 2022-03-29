
const Counter = (props) => {

  const { value } = props;

  const formatCounter = () => {
    return value === 0 ? 'empty' : value;
  }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 ';
    classes+=value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  }

  const handleIncrementClickBtn = (id) => {
    props.onIncrement(id);
    //setValue(prevState => prevState + 1);
  }

  const handleDecrementClickBtn = (id) => {
    props.onDecrement(id);
    //setValue(prevState => prevState - 1)
  }
 

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatCounter()}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={() => handleIncrementClickBtn(props.id)}>+</button>
      <button className='btn btn-primary btn-sm m-2' onClick={() => handleDecrementClickBtn(props.id)}>-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  )
}

export default Counter;