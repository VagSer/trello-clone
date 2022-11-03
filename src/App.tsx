import './App.css';
import Board from './components/Board';
import { useAppSelector } from './hook';

function App() {
  const boards = useAppSelector(state => state.boards.boards)

  return (
    <div>
      {boards.map(board => <Board id={board.id} title={board.title} items={board.items}/>)}
    </div>
  );
}

export default App;
