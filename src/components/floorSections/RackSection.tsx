import { useState } from "react";

import type { ProjectSettings } from "../../interfaces/project/ProjectSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";

interface RackSectionProps {
    floor: FloorEditorProps["floor"];
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function RackSection({
    floorIndex,
    handleTemp,
    handleAdd,
}: RackSectionProps) {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <>
            <label>
                O rack será fechado?
                <input type="checkbox"
                    onChange={(e) => handleTemp(floorIndex, "rack", { closed: (e.target.checked) })} />
                <br />

                O rack possuirá rodinhas?
                <input type="checkbox"
                    onChange={(e) => handleTemp(floorIndex, "rack", { hasWheels: (e.target.checked) })} />
                <br />

                Terá bandeja?
                <input type="checkbox"
                    onChange={(e) => handleTemp(floorIndex, "rack", { hasTray: (e.target.checked) })} />
                <br />

                Usará réguas de fechamento?
                <input type="checkbox"
                    onChange={(e) => handleTemp(floorIndex, "rack", { hasClosingBar: (e.target.checked) })} />
                <br />

                Terá exaustor?
                <input type="checkbox"
                    onChange={(e) => handleTemp(floorIndex, "rack", { hasExhaustFan: (e.target.checked) })} />
                <br />

                Terá roteador?
                <input type="checkbox"
                    onChange={(e) => handleTemp(floorIndex, "rack", {hasRouter: (e.target.checked)})}
                />
                <br/>

                {floorIndex > 0 && (
                    <>
                        Digite a distância do rack principal:
                        <input
                            type="number"
                            onChange={(e) =>
                                handleTemp(
                                    floorIndex,
                                    "rack",
                                    {
                                        distanceToMainRack: Number(e.target.value),
                                    }
                                )
                            }
                        />

                        <br />
                    </>
                )}
                <button
                    onClick={() => {
                        setConfirmed(true);
                        handleAdd(floorIndex, "rack");
                    }}
                    disabled={confirmed}
                >
                    {confirmed
                        ? "Informações sobre o rack confirmadas!"
                        : "Confirmar"}
                </button>
            </label>
        </>
    );
}