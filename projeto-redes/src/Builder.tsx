import { useState } from "react";
import { opcoes } from "./data";
import TypeThing from "./TypeThing";
import type { Specifications } from "./interfaces"

interface Escolha {
  id: number;
  categoria: string;
  subType: string;
  specifications: Specifications;
}

function Builder() {
  const [floors, setFloors] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);
  const [escolhasCompartilhadas, setEscolhasCompartilhadas] = useState<Escolha[]>([]);
  const [checkBoxEscolhasCompartilhadas, setCheckBoxEscolhasCompartilhadas] = useState(false);
  const types = Object.keys(opcoes);

  if (confirmed) {
    return (
      <>
        {Array.from({ length: floors }, (_, i) => (
          <div key={i}>
            <h2>{i === 0 ? "S.E.Q" : `S.E.T ${i + 1}º Andar`}</h2> 
            {i === 0 ?  
            ( <TypeThing type={types}/> ) 
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
        onClick={() => setConfirmed(true)}
      >
        Confirmar
      </button>
    </>
  );
}

export default Builder;
