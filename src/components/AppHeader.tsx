import { AppBar, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useAppDispatch } from "../hook"
import { addBoard } from "../store/boardsSlice"

export default function AppHeader() {
  const [newBoard, setNewBoard] = useState('')
  const dispatch = useAppDispatch()

  return (
    <AppBar position="sticky" sx={{padding: '1rem'}}>
      <div style={{display: 'flex'}}>
        <TextField 
          type="text"
          label="Новая доска"

          sx={{background: 'white', borderRadius: '5px'}}
          variant = 'filled'

          value={newBoard}
          onChange={e => setNewBoard(e.target.value)}
        />
        <Button
          variant = 'contained'
          color = 'success'
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
