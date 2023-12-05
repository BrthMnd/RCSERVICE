import {createSlice} from "@reduxjs/toolkit"

const State = {
    direction: ""
    ,type:""
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
        },
        changeType:(state,action)=>{
            state.type=action.payload
        }
    }
})

export const {ChangeDirection, ChangeDirectionVoid, changeType} = AddressSlice.actions;


export default AddressSlice.reducer