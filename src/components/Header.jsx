import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
background-color: purple;
padding: 0 60px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
width: '100%';


& h1{
    color: white;
    
}

& nav ul{
    display: flex;
    gap: 36px;
    list-style: none;
    & li a{
        color: pink;
        text-decoration: none;
        font-size: 18px;
        &:hover, &.active{
            color: #FFFFFF;
        }
    }
}
`
const Header = () => {
    return ( 
        <HeaderContainer>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
            </ul>
        </nav>
        </HeaderContainer>
     );
}
 
export default Header;