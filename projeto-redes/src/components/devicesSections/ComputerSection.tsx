import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";
import { useState } from "react";
import Accordion from "../Accordion";

interface ComputerSectionProps {
    floor: FloorEditorProps["floor"];
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function ComputerSection({
    floor,
    floorIndex,
    handleTemp,
    handleAdd,
}: ComputerSectionProps) {
    const [confirmed, setConfirmed] = useState(false);
    return (
        <>
            Número de computadores neste andar:
            <input
                type="number"
                onChange={(e) =>
                    handleTemp(
                        floorIndex,
                        "computers",
                        { computers: Number(e.target.value) }
                    )
                }
            /> <br /><br />

            <button onClick={() => { handleAdd(floorIndex, "computers"); setConfirmed(true) }}
                disabled={confirmed}>
                Confirmar Computadores
            </button>
            <br />
            <br />
            <Accordion title="Computadores adicionados">
                {(floor.computers ?? []).map((computer, index) => (
                    <>
                    <div key={index}>
                        Quantidade: {computer.computers}
                    </div>
                    </>
                ))}
            </Accordion>
        </>
    );
}