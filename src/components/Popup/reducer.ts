import { PayloadAction } from "@reduxjs/toolkit"
import { DataType } from "../../types/types"

const initialState = {
    sortType: DataType.DATE_DESC
}

const reducer = (state = initialState, action: PayloadAction<string>) => {
    switch (action.type) {
        case 'CHANGE_SORT_TYPE':
            return {
                sortType: action.payload
            }
        default:
            return state
    }
}

export default reducer;