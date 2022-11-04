import { AppBar, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useAppDispatch } from "../hook"
import { addBoard } from "../store/boardsSlice"

export default function AppHeader() {
  const [newBoard, setNewBoard] = useState('')
  const dispatch = useAppDispatch()

  return (
    <AppBar position="sticky" sx={{padding: '1rem', background: 'lightgrey'}}>
      <div>
        <TextField 
          type="text"
          label="Новая доска"
          sx={{background: 'white', borderRadius: '5px'}}
          value={newBoard}
          onChange={e => setNewBoard(e.target.value)}
        />
        <Button
          variant = 'contained'
          sx={{height: '100%', margin: 'auto 0'}}
          onClick = {() => {
            dispatch(addBoard(newBoard))
            setNewBoard('')
          }}
        >
          +
        </Button>
      </div>
    </AppBar>
  )
}
