
import { styled } from '@mui/material/styles';

const StyledCustomerList = styled('div')(
  ({theme}) => `
  display: flex;
  margin: 30px;
  justify-content: space-between;

  .customerListWrap {
      width: 30%;
      margin: 0, auto;

      Button {
          margin: 10px;
      }
  }

  .contractListWrap {
      width: 60%;
      margin: auto;
  }
        
    }
`);

export default StyledCustomerList;