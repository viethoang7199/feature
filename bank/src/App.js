import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decMoney, incMoney } from './redux/action';

function App() {

  const totalMoney = useSelector(state => state.totalMoney)
  const dispatch = useDispatch();

  const handleDecrease = (e) => {
    const amount = e.target.dataset.amount;
    dispatch(
      decMoney(amount)
    )

  }
  const handleIncrease = (e) => {
    const amount = e.target.dataset.amount;
    dispatch(
      incMoney(amount)
    )
  }

  return (
    <div className="App">
      <h1>Bank</h1>
      <p>{totalMoney} VNĐ</p>
      <button data-amount="100" onClick={handleDecrease}>-100</button>
      <button data-amount="1000" onClick={handleDecrease}>-1000</button>
      <button data-amount="50" onClick={handleIncrease}>+50</button>
      <button data-amount="200" onClick={handleIncrease}>+200</button>
    </div>
  );
}

export default App;
