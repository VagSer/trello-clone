import { Paper } from '@mui/material'
import '../styles/Item.css'

interface IItem {
    id: number
    title: string
}

export default function Item(props: IItem) {
    return(
        <Paper
            draggable={true}
            className="item"
        >
            {props.title}
        </Paper>
    )
}