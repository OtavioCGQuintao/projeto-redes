import { useState } from "react";
import { opcoes } from "./data";
import TypeThing from "./TypeThing";
import type { Specifications } from "./interfaces"
import type { Escolha } from "./interfaces"
import Accordion from "./Accordion"
import type { Floor } from "./interfaces/Floor";

function Builder() {
  const [floors, setFloors] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);
  const [escolhasCompartilhadas, setEscolhasCompartilhadas] = useState<Escolha[]>([]);
  const [checkBoxEscolhasCompartilhadas, setCheckBoxEscolhasCompartilhadas] = useState(false);
  const [andares, setAndares] = useState<Floor[]>([])
  const types = Object.keys(opcoes);

  const [quantidadeComputadores, setQuantidadeComputadores] = useState(1);
  const [quantidadeCamera, setQuantidadeCamera] = useState(0);
  const [quantidadeTelefone, setQuantidadeTelefone] = useState(0);
  const [cameraOuTelefone, setCameraOuTelefone] = useState(false);
  const [velocidadeEsperada, setVelocidadeEsperada] = useState(10);
  const [medidaMalhaHorizontal, setmedidaMalhaHorizonta] = useState(25);
  const [medidaPatchCord, setmedidaPatchCord] = useState(3);
  const [medidaPatchCable, setmedidaPatchCable] = useState(1);
  const [medidaPigTail, setMedidaPigTail] = useState(1.5);

  function handleAndar(index: number, campo: Partial<Floor>){
    setAndares((prev)=>
    prev.map((andar, i) =>
      i === index ? {...andar, ...campo} : andar
    )
  );
  }

  if (confirmed) {
    return (
      <>
        <label>
          Qual a quantidade total de computadores?
          <input type="number"
            placeholder={String(quantidadeComputadores)}
            min="1"
            onChange={(e) => setQuantidadeComputadores(Number(e.target.value))} /><br /> <br />
          Tem câmeras ou telefones?
          <input type="checkbox"
            checked={cameraOuTelefone}
            onChange={(e) => setCameraOuTelefone(e.target.checked)} /><br /> <br />
          {cameraOuTelefone && (
            <label>
              Qual a quantidade total de telefones?
              <input type="number"
                min="1"
                onChange={(e) => setQuantidadeTelefone(Number(e.target.value))}
              /> <br /><br />
              Qual a quantidade total de câmeras?
              <input type="number"
                min="1"
                onChange={(e) => setQuantidadeCamera(Number(e.target.value))}
              /><br /><br />
            </label>
          )
          }

          Qual a velocidade esperada? (Em GB)
          <input type="number"
            placeholder={String(velocidadeEsperada)}
            onChange={(e) => setVelocidadeEsperada(Number(e.target.value))}
          /> <br /> <br />
          Qual a medida padrão da Malha Horizontal? (Metros)
          <input type="number"
            placeholder={String(medidaMalhaHorizontal)}
            onChange={(e) => setmedidaMalhaHorizonta(Number(e.target.value))} /><br /> <br />
          Qual a medida padrão do Patch Cord? (Metros)
          <input type="number"
            placeholder={String(medidaPatchCord)}
            onChange={(e) => setmedidaPatchCord(Number(e.target.value))} /><br /> <br />
          Qual a medida padrão do Patch Cable? (Metros)
          <input type="number"
            placeholder={String(medidaPatchCable)}
            onChange={(e) => setmedidaPatchCable(Number(e.target.value))} /><br /> <br />
          Qual a reserva padrão do pig tail? (Metros)
          <input type="number"
            placeholder={String(medidaPigTail)}
            onChange={(e) => setMedidaPigTail(Number(e.target.value))}
          /> <br /> <br />
        </label>

        {andares.map((andar, i) => (
          <div key={i}>
            <h2>{i === 0 ? "S.E.Q" : `S.E.T ${i + 1}º Andar`}</h2>
            {i === 0 ?
              (
                <>
                  <label>
                    Número de computadores neste andar:
                    <input type="number"
                    onChange={(e)=>handleAndar(i, {computers: Number(e.target.value)})}
                    /> <br/>
                    Número de câmeras neste andar:
                    <input type="number"
                    onChange={(e)=>handleAndar(i, {cameras: Number(e.target.value)})}
                    /> <br/>
                    Número de telefones neste andar:
                    <input type="number"
                    onChange={(e)=>handleAndar(i, {phones: Number(e.target.value)})}
                    /> <br/> <br/>
                  </label>
                  <TypeThing type={types} />
                </>
              )
              : checkBoxEscolhasCompartilhadas ? (
                <TypeThing
                  type={types}
                  escolhas={escolhasCompartilhadas}
                  setEscolhas={setEscolhasCompartilhadas} />
              ) : (
                <TypeThing
                  type={types} />
              )}
          </div>
        ))}
        <button
          type="button"
          onDoubleClick={() => {
            setFloors(0);
            setConfirmed(false);
          }}
        >
          Resetar
        </button>
      </>
    );
  }

  return (
    <>
      <Accordion>
        <h2>Quantos andares o prédio possui?</h2>
        <h3>Certifique-se de que o número esteja correto!</h3>
        <br />
        <input
          type="number"
          min={1}
          value={floors || ""}
          onChange={(e) => setFloors(Number(e.target.value))}
        />
        <label>
          <input
            type="checkbox"
            checked={checkBoxEscolhasCompartilhadas}
            onChange={(e) => setCheckBoxEscolhasCompartilhadas(e.target.checked)}
          />
          Todos os S.E.Ts terão os mesmos equipamentos?
        </label>
        <button
          type="button"
          disabled={floors < 1}
          onClick={() => {
            setConfirmed(true);
            setAndares(Array.from({ length: floors }, () => ({
              escolhas: [],
            })));
          }}
        >
          Confirmar
        </button>
    </Accordion >
    </>
  );
}

export default Builder;
