import { createSlice } from '@reduxjs/toolkit';
import {fetchContract} from './thunk';

const contractSlice = createSlice({
    name: 'contract',
    initialState: {
        contractData: [],
    },
    reducers: {
        setContractData: (state, action) => {
            state.contractData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContract.fulfilled, (state, action) => {
          state.contractData = action.payload;
        });
        builder.addCase(fetchContract.rejected, (state, action) => {
          state.contractData = action.payload;
         //ToastNotifyError(action.error.message);
        });
      },
});

const { reducer } = contractSlice;
const selectorContract = (state) => state.contract;
const { setContractData } = contractSlice.actions;
export { setContractData, selectorContract};

export default reducer;