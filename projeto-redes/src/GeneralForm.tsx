import { useState } from "react";

function GeneralForm(){
    const [velocidadeEsperada, setVelocidadeEsperada] = useState(0);
    const [medidaMalhaHorizontal, setmedidaMalhaHorizonta] = useState(0);
    const [medidaPatchCord, setmedidaPatchCord] = useState(0);
    const [medidaPatchCable, setmedidaPatchCable] = useState(0);
    const [quantidadeComputadores, setQuantidadeComputadores]= useState(0);
    const [cameraOuTelefone, setCameraOuTelefone] = useState(false);

 return(
    <>
    <label>
        Qual a velocidade esperada? (Em MB)
        <input type="number"
        
        /> <br/> <br/>
        Qual a medida padrão da Malha Horizontal? (Metros)
        <input type="number" 
        onChange={(e)=> setmedidaMalhaHorizonta(Number(e.target.value))}/><br/> <br/>
        Qual a medida padrão do Patch Cord? (Metros)
        <input type="number"
        onChange={(e)=> setmedidaPatchCord(Number(e.target.value))}/><br/> <br/>
        Qual a medida padrão do Patch Cable? (Metros)
        <input type="number"
        onChange={(e)=> setmedidaPatchCable(Number(e.target.value))}/><br/> <br/>
        Qual a quantidade total de computadores? 
        <input type="number"
        onChange={(e)=> setQuantidadeComputadores(Number(e.target.value))}/><br/> <br/>
        Tem câmeras ou telefones?
        <input type="checkbox"
        onChange={(e)=> setCameraOuTelefone(Boolean(e.target.value))}/><br/> <br/>


    </label>
    </>
 );
}

export default GeneralForm