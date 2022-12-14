import './App.css';
import Board from './components/Board';
import { useAppSelector } from './hook';
import {useState} from 'react'
import AppHeader from './components/AppHeader';

function App() {
  const boards = useAppSelector(state => state.boards.boards)
  const [currentBoard, setCurrentBoard] = useState(null)

  const [currentItem, setCurrentItem] = useState(null)

  return (
    <div>
      <AppHeader />
      {boards.map(board => 
      <Board 
        key={board.id} 
        id={board.id} 
        title={board.title} 
        items={board.items}
      />)}
    </div>
  );
}

export default App;
