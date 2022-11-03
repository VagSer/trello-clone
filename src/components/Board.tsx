import Item from "./Item"
import { useState } from "react"
import '../styles/Board.css'
import { addItem } from "../store/boardsSlice"
import { useAppDispatch } from "../hook"

interface IItem {
    id: number
    title: string
}

interface IBoard {
    id: number
    title: string
    items: IItem[]
}

export default function Board(props: IBoard) {
    const [newItem, setNewItem] = useState('')
    const dispatch = useAppDispatch()

    return(
        <div className="board">
            <h3 className="board__name">{props.title}</h3>
            {props.items.map(item => <Item key={item.id} id={item.id} title={item.title}/>)}
            <div className="newItem">
                <input 
                    type="text"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                <button
                    onClick={e => {
                        dispatch(addItem({boardID: props.id, newItem}))
                        setNewItem('')
                    }}
                >+</button>
            </div>
        </div>
    )
}