import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    queries:[],
}

const slice = createSlice({
    name:"query",
    initialState,
    reducers:{
        getQueriesSuccess(state,action){
            state.queries = action.payload;
            return state;
        }
    }
})

export const {getQueriesSuccess} = slice.actions;

export default slice.reducer;
