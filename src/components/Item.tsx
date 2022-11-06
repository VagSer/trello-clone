import { IconButton, Paper } from '@mui/material'
import { useAppDispatch } from '../hook'
import { removeItem, setItemOne, setItemTwo } from '../store/boardsSlice'
import ClearIcon from '@mui/icons-material/Clear';
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

        >
            {props.title}
            <IconButton
            onClick = {() => dispatch(removeItem({boardID: props.boardID, itemID: props.id}))}
            >
                <ClearIcon />
            </IconButton>
        </Paper>
    )
}