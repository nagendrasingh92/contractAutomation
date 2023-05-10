import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomer } from './thunk';

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        customerData: [],
    },
    reducers: {
        setCustomerData: (state, action) => {
            state.customerData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCustomer.fulfilled, (state, action) => {
            state.customerData = action.payload;
        });
        builder.addCase(fetchCustomer.rejected, (state, action) => {
            state.customerData = action.payload;
            //ToastNotifyError(action.error.message);
        });
    },
});

const { reducer } = customerSlice;
const selectorCustomer = (state) => state.customer;
const { setCustomerData } = customerSlice.actions;
export { setCustomerData, selectorCustomer };

export default reducer;