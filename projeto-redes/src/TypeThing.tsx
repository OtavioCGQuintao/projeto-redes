import { Specs } from "./Specifications";
import Accordion from "./Accordion";
import type { Escolha } from "./interfaces";
import { opcoes } from "./data";

interface TypeThingProps {
  escolhas: Escolha[];
}

export function TypeThing({ escolhas }: TypeThingProps) {
  if (escolhas.length === 0) return null;

  return (
    <Accordion titulo="Equipamentos">
      {escolhas.map((e) => {
        const item = opcoes[e.categoria]?.find((i) => i.subType === e.subType);
        if (!item) return null;

        return (
          <div key={e.id}>
            <h3>{e.categoria} — {e.subType}</h3>
            <Specs specs={item.specifications} />
          </div>
        );
      })}
    </Accordion>
  );
}
