
import { styled } from '@mui/material/styles';

const StyledHeader = styled('div')(
    ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        color: #666666;
        font-size: 20px;
        padding: 0 100px;
        font-weight: bold;
        a{
            text-decoration: none;
        }
    }
    .menu {
        display: none;
    }
    .linkWrap {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: 80px;
        .pannel ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
        }
        li {
            margin: 0px 2rem;
            display: inline-block;
            a {
                box-sizing: border-box;
                text-decoration: none;
                color: #666666;
                font-size: 1rem;
                font-family: sans-serif;
                text-transform: uppercase;
            }
            a:hover {
                background: #13B0F5;
            }
        }
        .directLink {
            a {
                color: #666666;
                margin: 0 0.5rem;
            }
        }
        
    }
    @media (max-width: 768px) {
           .menu {
               display: block;
           }
           .linkWrap {
               display: none;
               width: 100%;
               left: 0px;
               right: 0px;
               position: absolute;
               top: 60px;
               width: revert;
               background: gray;
               margin: 0;
           }
           .pannel{
               ul {
                   flex-direction: column;
                   li a {
                       color: #fff;
                   }
               }
           } 
`);

export default StyledHeader;