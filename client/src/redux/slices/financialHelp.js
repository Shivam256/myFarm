import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    financialRequests:[],
}

const slice = createSlice({
    name:"financialHelp",
    initialState,
    reducers:{
        getFinancialRequestsSuccess(state,action){
            state.financialRequests = action.payload;
            return state;
        }
    }
})

export const {getFinancialRequestsSuccess} = slice.actions;

export default slice.reducer;