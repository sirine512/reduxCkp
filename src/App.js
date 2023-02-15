import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <>
    <div className='app'>
      <h1>ToDo</h1>
    <AddTask/>
    <ListTask/>
    </div>
    </>
  );
}

export default App;
