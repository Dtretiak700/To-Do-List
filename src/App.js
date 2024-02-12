import './App.css';
import { ItemsList } from './ItemsList';

function App() {
  return (
    <div>
      <div className='main-container'>
        <div className='head-container'>
          <h1>To-Do List</h1>
        </div>
        <div className='head-container'>
          <ItemsList />
        </div>
      </div>      
    </div>
  );
}

export default App;
