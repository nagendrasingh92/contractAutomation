import { Link } from "react-router-dom";
import StyledHeader from  './StyledHeader'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Header() {

    return (
        <StyledHeader className="sectionOne">
            <div className="logo">
                <a href="https://nagendrasingh92.github.io/reactPractice/" target="_blank">Portfolio</a>
            </div>
            <div className="linkWrap">
                <div className="pannel">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/contractAutomation/contractList" >Contracts</a></li>
                        <li><a href="/contractAutomation/customerList" >Customers</a></li>
                    </ul>
                </div>
                <div className="directLink">
                    <a href="https://github.com/nagendrasingh92/reactPractice" target="_blank"><GitHubIcon /></a>
                    <a href="https://twitter.com/nagendraReact" target="_blank"><TwitterIcon /></a>
                    <a href="https://www.linkedin.com/in/nagendra-singh-chauhan-0328091aa" target="_blank"><LinkedInIcon /></a>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;