import { useState } from "react";
import type { SubType, Specifications } from "./interfaces";
import { opcoes } from "./data";

interface SubTypeProps {
  subType: string;
  onSalvar: (subType: string) => void;
}

const labels: Record<string, string> = {
  covered:          "Cobertura",
  coreSize:         "Tamanho do núcleo",
  maxDistance:      "Distância máxima",
  waveLength:       "Comprimento de onda",
  couplingLoss:     "Perda de acoplamento",
  lossForKilometer: "Perda por km",
  speed:            "Velocidade",
  bandwidth:        "Largura de banda",
  typeConector:     "Tipo de conector",
  limitOfCables:    "Limite de cabos",
  category:         "Categoria",
  entranceDoors:    "Portas de entrada",
  exitDoors:        "Portas de saída",
  loss:             "Perda",
  insertionLoss:    "Perda de inserção",
  ports:            "Portas",
  pairs:            "Pares",
};

const infosPorTipo: Record<string, string[]> = {
  "twisted-pair-cable": ["speed", "maxDistance", "bandwidth"],
  "fiber-optic":        ["covered", "coreSize", "maxDistance", "waveLength", "bandwidth", "lossForKilometer", "couplingLoss"],
  "dio":                ["entranceDoors", "exitDoors", "typeConector", "limitOfCables", "loss"],
  "to":                 ["ports", "pairs", "typeConector", "category", "insertionLoss"],
};

function renderInfos(specs: Specifications, infos: string[]) {
  return infos.map((key) => {
    const val = (specs as unknown as Record<string, unknown>)[key];
    const texto = Array.isArray(val) ? val.join(", ") : String(val);
    return <p key={key}><strong>{labels[key] ?? key}:</strong> {texto}</p>;
  });
}

function SubTypeThing({ subType, onSalvar }: SubTypeProps) {
  const list = opcoes[subType] ?? [];
  const [selecionado, setSelecionado] = useState<SubType | null>(null);

  if (list.length === 0) return null;

  const tipo = list[0].specifications.type;
  const infos = infosPorTipo[tipo] ?? [];

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
          {renderInfos(selecionado.specifications, infos)}
          <button type="button" onClick={() => onSalvar(selecionado.subType)}>
            Confirmar escolha
          </button>
        </div>
      )}
    </>
  );
}

export default SubTypeThing;