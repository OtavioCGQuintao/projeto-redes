import { useState } from "react";
import SubTypeThing from "./SubTypeThing";
import type { Specifications } from "./interfaces";
import { opcoes } from "./data"
import { Specs } from "./Specifications";
import Accordion from "./Accordion"

interface Escolha {
  id: number;
  categoria: string;
  subType: string;
  specifications: Specifications;
}

interface ButtonProps {
  type: string[];
  escolhas?: Escolha[];
  setEscolhas?: React.Dispatch<React.SetStateAction<Escolha[]>>;
}


function TypeThing({ type, escolhas: escolhasExternas, setEscolhas: setEscolhasExternas }: ButtonProps) {
  const [adicionando, setAdicionando] = useState(false);
  const [editando, setEditando] = useState<number | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [escolhasInternas, setEscolhasInternas] = useState<Escolha[]>([]);
  const escolhas = escolhasExternas ?? escolhasInternas;
  const setEscolhas = setEscolhasExternas ?? setEscolhasInternas;
  const categoriasUsadas = escolhas.map((e) => e.categoria)

  function handleSalvar(subType: string) {
    const item = opcoes[categoriaSelecionada]?.find((i) => i.subType == subType)
    if (!item) return
    if (editando !== null) {
      setEscolhas((prev) =>
        prev.map((e) =>
          e.id === editando ? { ...e, categoria: categoriaSelecionada, subType, specifications: item?.specifications } : e
        )
      );
      setEditando(null);
    } else {
      setEscolhas((prev) => [
        ...prev,
        { id: Date.now(), categoria: categoriaSelecionada, subType, specifications: item?.specifications },
      ]);
    }
    setAdicionando(false);
    setCategoriaSelecionada("");
  }

  function handleRemover(id: number) {
    setEscolhas((prev) => prev.filter((e) => e.id !== id));
  }

  function handleEditar(escolha: Escolha) {
    setEditando(escolha.id);
    setCategoriaSelecionada(escolha.categoria);
    setAdicionando(true);
  }

  function handleCancelar() {
    setAdicionando(false);
    setEditando(null);
    setCategoriaSelecionada("");
  }

  return (
    <>
      {escolhas.length > 0 && (
        <Accordion titulo="Equipamentos escolhidos">
          <h3>Equipamentos escolhidos:</h3>
          {escolhas.map((e) => (
            <div key={e.id}>
              <span>{e.categoria} — {e.subType}</span>
              <Specs specs={e.specifications}/>
              <button type="button" onClick={() => handleEditar(e)}>Editar</button>
              <button type="button" onClick={() => handleRemover(e.id)}>Remover</button>
              </div>
          ))}
          </Accordion>
      )}

      {adicionando ? (
        <>
          <h3>{editando !== null ? "Editando equipamento" : "Adicionar equipamento"}</h3>

          {!categoriaSelecionada ? (
            <>
              <p>Escolha a categoria:</p>
              {type
                .filter((t) => !categoriasUsadas.includes(t) || t === categoriaSelecionada)
                .map((t) => (
                  <div key={t}>
                    <input
                      type="radio"
                      id={t}
                      name="categoria"
                      value={t}
                      onChange={() => setCategoriaSelecionada(t)}
                    />
                    <label htmlFor={t}>{t}</label>
                  </div>
                ))}
            </>
          ) : (
            <>
              <p>Categoria: <strong>{categoriaSelecionada}</strong></p>
              <SubTypeThing
                subType={categoriaSelecionada}
                onSalvar={handleSalvar}
              />
            </>
          )}

          <button type="button" onClick={handleCancelar}>Cancelar</button>
        </>
      ) : (
        <button type="button" onClick={() => setAdicionando(true)}>
          + Adicionar equipamento
        </button>
      )}
    </>
  );
}

export default TypeThing;