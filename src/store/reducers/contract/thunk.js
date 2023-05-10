import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContract = createAsyncThunk('contract/list', async (data, { dispatch }) => {
  try {

    let data  = await fetch('./contracts.json')
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        return response;
        // dispatch(setContractData(response))
      });
    console.log('data', data);

    // const response = await API.post(API_PATH.LOGOUT, data);

    return data;
  } catch (err) {
    return err;
  }
});

export { fetchContract }