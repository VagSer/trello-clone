import Item from "./Item"

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
        <div>
            <h3>{props.title}</h3>
            {props.items.map(item => <Item id={item.id} title={item.title}/>)}
        </div>
    )
}