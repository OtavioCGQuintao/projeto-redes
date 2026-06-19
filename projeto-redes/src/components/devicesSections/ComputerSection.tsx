import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";

interface ComputerSectionProps {
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function ComputerSection({
    floorIndex,
    handleTemp,
    handleAdd,
}: ComputerSectionProps) {
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
            />

            <button onClick={() => handleAdd(floorIndex, "computers")}>
                Confirmar Computadores
            </button>
            <br />
            <br />
        </>
    );
}