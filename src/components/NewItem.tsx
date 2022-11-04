import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../hook";
import { addItem } from "../store/boardsSlice"

interface INewItem {
    boardID: number;
}

export default function NewItem(props: INewItem) {
  const [newItem, setNewItem] = useState('')
  const dispatch = useAppDispatch()

  return (
    <div className="newItem">
        <TextField
            type="text"
            label='Новое дело'
            variant="filled"
            sx={{width: '90%'}}
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
        />
        <Button
            variant="contained"
            onClick={() => {
                dispatch(addItem({boardID: props.boardID, newItem}))
                setNewItem('')
            }}
            >+</Button>
    </div>
  )
}
