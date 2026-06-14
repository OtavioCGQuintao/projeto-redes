import { useState } from "react";
import type { SubType, Specifications } from "./interfaces";
import { opcoes } from "./data";
import { Specs } from "./Specifications"

interface SubTypeProps {
  subType: string;
  onSalvar: (subType: string) => void;
}

function SubTypeThing({ subType, onSalvar }: SubTypeProps) {
  const list = opcoes[subType] ?? [];
  const [selecionado, setSelecionado] = useState<SubType | null>(null);

  if (list.length === 0) return null;


  return (
    <>
      <select
        onChange={(e) => {
          const encontrado = list.find((i) => i.subType === e.target.value);
          setSelecionado(encontrado ?? null);
        }}
      >
        <option value="">Selecione...</option>
        {list.map((item) => (
          <option key={item.subType} value={item.subType}>
            {item.subType}
          </option>
        ))}
      </select>

      {selecionado && (
        <div>
          <h3>{selecionado.subType}</h3>
          <Specs specs={selecionado.specifications} />
          <button type="button" onClick={() => onSalvar(selecionado.subType)}>
            Confirmar escolha
          </button>
        </div>
      )}
    </>
  );
}

export default SubTypeThing;