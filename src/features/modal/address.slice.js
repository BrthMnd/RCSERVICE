import {createSlice} from "@reduxjs/toolkit"

const State = {
    direction: ""

}
const AddressSlice = createSlice({
    name:"address",
    initialState:State,
    reducers:{
        ChangeDirection: (state, action)=>{
            state.direction = action.payload
        },
        ChangeDirectionVoid:(state)=>{
            state.direction= ""
        }
    }
})

export const {ChangeDirection, ChangeDirectionVoid} = AddressSlice.actions;


export default AddressSlice.reducer