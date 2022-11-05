import Item from "./Item"
import NewItem from "./NewItem"

import '../styles/Board.css'
import { Card, CardHeader } from "@mui/material"

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
        <Card className="board">
            <CardHeader title={props.title}/>
            {props.items.map(item => <Item key={item.id} id={item.id} title={item.title} boardID={props.id}/>)}
            <NewItem boardID={props.id}/>
        </Card>
    )
}