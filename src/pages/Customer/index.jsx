import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCustomerData, selectorCustomer } from "../../store/reducers/customer";
import { setContractData, selectorContract } from "../../store/reducers/contract";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { fetchCustomer } from '../../store/reducers/customer/thunk';
import { fetchContract } from '../../store/reducers/contract/thunk';
import StyledCustomerList from  './StyledCustomerList'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: { 
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CustomerList() {
  const dispatch = useDispatch();
  const customer = useSelector(selectorCustomer);
  const contract = useSelector(selectorContract);
  console.log('customer', customer)
  useEffect(() => {
    dispatch(fetchCustomer());
  }, [])

  useEffect(() => {
    dispatch(fetchContract());
  }, [])

  const handleDeleteContract = (id) => {
    // let temContractList = contractName;
    // temContractList.filter((item) => item.id !== id)
    // setContractName(temContractList);
  }
  return (
    <StyledCustomerList className='pageWrap'>
      <div className='customerListWrap'>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customer.customerData.map((item) => (
                <StyledTableRow key={item.name}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <Button variant='contained' align="center" onClick={() => handleDeleteContract(item.id)}>Delete</Button>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='contractListWrap'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Customer Id</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contract.contractData.map((item) => (
                <StyledTableRow key={item.name}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.customerId}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>

      </div>
    </StyledCustomerList>

  )
}

export default CustomerList;