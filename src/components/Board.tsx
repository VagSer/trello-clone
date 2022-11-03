import Item from "./Item"
import '../styles/Board.css'

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
    return(
        <div className="board">
            <h3 className="board__name">{props.title}</h3>
            {props.items.map(item => <Item key={item.id} id={item.id} title={item.title}/>)}
        </div>
    )
}