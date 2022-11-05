import {createSlice, current, PayloadAction} from '@reduxjs/toolkit'

type Item = {
    id: number
    title: string
}

type Board = {
    id: number
    title: string
    items: Item[]
}

type SwapItem = {
    boardID: number
    itemID: number
}

type BoardsState = {
    boards: Board[]
    boardOne: Board | null | undefined
    boardTwo: Board | null | undefined
    itemOne: Item | null | undefined
    itemTwo: Item | null | undefined
}

type NewItem = {
    boardID: number
    newItem: string
}

const initialState: BoardsState = {
    boards: [
        {id: 1, title: 'Надо сделать', items: [{id: 1, title: 'Прийти домой'}, {id: 2, title: 'Съездить с женой в KFC'}]},
        {id: 2, title: 'Сделано', items: [{id: 3, title: 'Сказать жене, что люблю её'}]},
    ],
    boardOne: null,
    boardTwo: null,
    itemOne: null,
    itemTwo: null
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
       },
       setItemOne(state, action: PayloadAction<SwapItem>) {
            console.log('Указан Item One')
            state.boardOne = current(state.boards.find(board => board.id === action.payload.boardID))
            if (state.boardOne) {
                state.itemOne = state.boardOne.items.find(item => item.id === action.payload.itemID)
                console.log(state.itemOne)
            } 
       },
       setItemTwo(state, action: PayloadAction<SwapItem>) {
        console.log('Указан Item Two')
        state.boardTwo = current(state.boards.find(board => board.id === action.payload.boardID))
        if (state.boardTwo) {
            state.itemTwo = state.boardTwo.items.find(item => item.id === action.payload.itemID)
            console.log(state.itemTwo)
            }
       },
       
    }
})

export const {addBoard, removeBoard, addItem, setItemOne, setItemTwo} = boardsSlice.actions

export default boardsSlice.reducer