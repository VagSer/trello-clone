import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Item = {
    id: number
    title: string
}

type Board = {
    id: number
    title: string
    items: Item[]
}

type BoardsState = {
    boards: Board[]
}

const initialState: BoardsState = {
    boards: [
        {id: 1, title: 'Надо сделать', items: [{id: 1, title: 'Прийти домой'}, {id: 2, title: 'Съездить с женой в KFC'}]},
        {id: 2, title: 'Сделано', items: [{id: 3, title: 'Сказать жене, что люблю её'}]},
    ]
}

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
       addBoard(state, action: PayloadAction<string>) {
           state.boards.push({
               id: Date.now(),
               title: action.payload,
               items: []
           })
       },
       removeBoard(state, action: PayloadAction<number>) {
           state.boards = state.boards.filter(board => board.id !== action.payload)
       }
    }
})

export const {addBoard, removeBoard} = boardsSlice.actions

export default boardsSlice.reducer