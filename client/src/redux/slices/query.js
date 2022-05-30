import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    queries:[],
    userQueries:[]
}

const slice = createSlice({
    name:"query",
    initialState,
    reducers:{
        getQueriesSuccess(state,action){
            state.queries = action.payload;
            return state;
        },
        getUserQueriesSuccess(state,action){
            state.userQueries = action.payload;
            return state;
        }
    }
})

export const {getQueriesSuccess,getUserQueriesSuccess} = slice.actions;

export default slice.reducer;
