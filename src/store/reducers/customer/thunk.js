import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCustomer = createAsyncThunk('customer/list', async (data, { dispatch }) => {
  try {
    let data  = await fetch('./customer.json')
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        return response;
      });
    console.log('data', data);
    // const response = await API.post(API_PATH.LOGOUT, data);
    return data;
  } catch (err) {
    return err;
  }
});

export { fetchCustomer }