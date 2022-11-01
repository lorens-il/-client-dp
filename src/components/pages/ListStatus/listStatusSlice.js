import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusId: null,
    varSendMethod: "PUT",
    showModal: false
}

const listStatusSlice = createSlice({
    name: "listStatus",
    initialState,
    reducers: {
        setStatusId(state, action) {
            state.statusId = action.payload
        },
        setVarSendMethod(state, action) {
            state.varSendMethod = action.payload
        },
        setShowModal(state, action) {
            state.showModal = action.payload
        }
    }
});

const {actions, reducer} = listStatusSlice;

export default reducer;

export const {setStatusId, setVarSendMethod, setShowModal} = actions;