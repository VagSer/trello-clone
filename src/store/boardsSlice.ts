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

type NewItem = {
    boardID: number
    newItem: string
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
           if (action.payload) state.boards.push({
               id: Date.now(),
               title: action.payload,
               items: []
           })
       },
       removeBoard(state, action: PayloadAction<number>) {
           state.boards = state.boards.filter(board => board.id !== action.payload)
       },
       addItem(state, action: PayloadAction<NewItem>) {
           if(action.payload.newItem) state.boards = state.boards.map(board => board.id === action.payload.boardID ? {...board, items: [...board.items, {id: Date.now(), title: action.payload.newItem}]} : board)
       }
    }
})

export const {addBoard, removeBoard, addItem} = boardsSlice.actions

export default boardsSlice.reducer