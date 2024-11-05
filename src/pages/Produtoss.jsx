import { Link } from "react-router-dom";

const Produtoss = () => {
    return ( 
        <>
        <h1>Bolos</h1>
        <ul>
            <li><Link to={"/produtoss/1/Chocolate"}>Chocolate com recheio de ninho</Link></li>
            <li><Link to={"/produtoss/2/Baunilha"}>Baunilha com recheio de chocolate e cobertura de Nutella com morangos</Link></li>
            <li><Link to={"/produtoss/3/Red"}>Red Velvet com recheio brigadeiro de ninho polvilhado no leite ninho</Link></li>
            <li><Link to={"/produtoss/4/Cenoura"}>Cenoura com cobertura de chocolate ao leite</Link></li>
            <li><Link to={"/produtoss/5/Banana"}>Banana com recheio de doce de leite finalizado com canela e chantilly</Link></li>
        </ul>
        </>
     );
}
 
export default Produtoss;