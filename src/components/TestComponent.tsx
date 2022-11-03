import { useState } from 'react'
import '../style/TestComponent.css'

export default function TestComponent() {
    return(
        <div>
            
        </div>
    )
}

/* export default function TestComponent() {
    const [boards, setBoards] = useState([
        {id: 1, title: 'Сделать', items: [{id: 1, title: 'Выкинуть мусор'}, {id: 2, title: 'Посмотреть YouTube'}, {id: 3, title: 'Сделать задание'}]},
        {id: 2, title: 'Уже сделано', items: [{id: 4, title: 'Проснуться'}, {id: 5, title: 'Умыться'}, {id: 6, title: 'Поспать'}]}
    ])

    const [currentBoard, setCurrentBoard] = useState(null)

    const [currentItem, setCurrentItem] = useState(null)

    const dragOverHandler = (e) => {
        e.preventDefault()
        if(e.target.className === 'item') {
            e.target.style.boxShadow = '0 4px 3px black'
        }
    }

    const dragStartHandler = (e, board, item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dragLeaveHandler = (e) => {
        e.target.style.boxShadow = 'none'
    }

    const dragEndHandler = (e) => {
        e.target.style.boxShadow = 'none'
    }

    const dropHandler = (e, board, item) => {
        e.preventDefault()
        e.target.style.boxShadow = 'none'
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    const dropCardHandler = (e, board) => {
        e.preventDefault()
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }


    return(
        <div>
            <h2>Это тестовый компонент</h2>
            {boards.map(board => 
                <div
                    className='board'
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}
                >
                    <h3>{board.title}</h3>
                    {board.items.map(item => 
                        <div 
                            draggable={true}
                            className='item'
                            onDragOver={e => dragOverHandler(e)}
                            onDragStart={e => dragStartHandler(e, board, item)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDrop={e => dropHandler(e, board, item)}
                        >
                            {item.title}
                        </div>)}
                </div>)}
        </div>
    )
} */