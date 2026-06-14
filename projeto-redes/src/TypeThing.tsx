import { useState } from "react";
import SubTypeThing from "./SubTypeThing";

interface ButtonProps {
  type: string[];
}

interface Escolha {
  id: number;
  categoria: string;
  subType: string;
}

function TypeThing({ type }: ButtonProps) {
  const [escolhas, setEscolhas] = useState<Escolha[]>([]);
  const [adicionando, setAdicionando] = useState(false);
  const [editando, setEditando] = useState<number | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const categoriasUsadas = escolhas.map((e) => e.categoria)

  function handleSalvar(subType: string) {
    if (editando !== null) {
      setEscolhas((prev) =>
        prev.map((e) =>
          e.id === editando ? { ...e, categoria: categoriaSelecionada, subType } : e
        )
      );
      setEditando(null);
    } else {
      setEscolhas((prev) => [
        ...prev,
        { id: Date.now(), categoria: categoriaSelecionada, subType },
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
        <div>
          <h3>Equipamentos escolhidos:</h3>
          {escolhas.map((e) => (
            <div key={e.id}>
              <span>{e.categoria} — {e.subType}</span>
              <button type="button" onClick={() => handleEditar(e)}>Editar</button>
              <button type="button" onClick={() => handleRemover(e.id)}>Remover</button>
            </div>
          ))}
        </div>
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