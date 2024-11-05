import { useParams } from "react-router-dom";

const Produtos = () => {
    const {nome, id} = useParams()
    return ( 
        <>
        <h1>Produtos de #{id}-{nome}</h1>
        </>
     );
}
 
export default Produtos;