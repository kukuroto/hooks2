import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
background-color: red; width: 1200px; flex: 1; display: flex; flex-direction: column;
`
const PageLayout = () => {
    return ( 

        <Container>
        <Header/>
        <Outlet/>
        <Footer/>
        </Container>
     );
}
 
export default PageLayout;