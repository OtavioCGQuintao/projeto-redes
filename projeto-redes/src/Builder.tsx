import { useState } from "react";
import { opcoes } from "./data";
import TypeThing from "./TypeThing";

function Builder() {
  const [floors, setFloors] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);

  const types = Object.keys(opcoes);

  if (confirmed) {
    return (
      <>
        {Array.from({ length: floors }, (_, i) => (
          <div key={i}>
            <h2>Andar {i + 1}</h2>
            <TypeThing type={types} />
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