import type { ProjectSettings } from "../../interfaces/project/ProjectSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";
import { useState } from "react";

interface DistanceToMainRackSectionProps {
    floor: FloorEditorProps["floor"];
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function DistanceToMainRackSection({
    floorIndex,
    handleTemp,
    handleAdd,
}: DistanceToMainRackSectionProps) {
    const [confirmed, setConfirmed] = useState(false);
    if (floorIndex > 0) {
        return (
            <>
                <label>
                    Digite a distância do rack principal:
                    <input type="number"
                        onChange={(e) => handleTemp(floorIndex, "distanceToMainRack", {distanceToMainRack: Number(e.target.value)})}
                    />
                </label><br />
                <button
                    onClick={() => {
                        setConfirmed(true);
                        handleAdd(floorIndex, "distanceToMainRack")
                    }}
                    disabled={confirmed}
                >
                    {confirmed ? (
                        <label>
                            Distancia confirmada
                        </label>
                    ) : (
                        <label>
                            Confirmar distância
                        </label>
                    )
                }
                </button>
            </>
        );
    }
    else {
        return null;
    }

}