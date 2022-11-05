import { Paper } from '@mui/material'
import { useAppDispatch } from '../hook'
import { setItemOne, setItemTwo } from '../store/boardsSlice'
import '../styles/Item.css'

interface IItem {
    boardID: number
    id: number
    title: string
}

export default function Item(props: IItem) {
    const dispatch = useAppDispatch()

    return(
        <Paper
            draggable={true}
            className="item"
            onDragStart = {() => dispatch(setItemOne({boardID: props.boardID, itemID: props.id}))}
            onDragLeave = {() => dispatch(setItemTwo({boardID: props.boardID, itemID: props.id}))}
        >
            {props.title}
        </Paper>
    )
}