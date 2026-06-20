import type { ProjectSettings } from "../../interfaces/project/ProjetcSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";
import Accordion from "../Accordion";


interface AccessPointProps {
    floor: FloorEditorProps["floor"];
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function AccessPointSection({
    floor,
    settings,
    floorIndex,
    temp,
    handleTemp,
    handleAdd,
}: AccessPointProps) {
    if (settings.haveAccessPoints) {
        return (
            <>
                <label>
                    Quantidade de pontos de acesso neste andar:
                    <input
                        type="number"
                        min="1"
                        onChange={(e) =>
                            handleTemp(
                                floorIndex,
                                "accessPoints",
                                { acessPoints: Number(e.target.value) }
                            )
                        }
                    />

                    <br />

                    Selecione se é com PoE ou sem:
                    <select
                        onChange={(e) => {
                            console.log(e.target.value);
                            handleTemp(
                                floorIndex,
                                "accessPoints",
                                { isAccessPointsPoE: e.target.value === "true" }
                            )
                        }
                        }
                    >
                        <option value="">Selecione</option>
                        <option value="true">Com PoE</option>
                        <option value="">Sem PoE</option>
                    </select>

                    <br />

                    {temp.accessPoints[floorIndex].isAccessPointsPoE && (
                        <label>
                            Qual o consumo total dos pontos de acesso: (Watts)
                            <input
                                type="number"
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "accessPoints",
                                        { energyAcessPoints: Number(e.target.value) }
                                    )
                                }
                            />
                        </label>
                    )}

                    <br />
                    <br />

                    <button
                        onClick={() =>
                            handleAdd(floorIndex, "accessPoints")
                        }
                    >
                        Confirmar pontos de acesso
                    </button>

                    <br />

                    <Accordion title="Pontos de acesso adicionados">
                        {(floor.accessPoints ?? []).map((accessPoint, index) =>
                            <div key={index}>
                                Ponto de acesso #{index + 1}
                                <br />
                                Quantidade: {accessPoint.acessPoints}
                                <br />
                                {accessPoint.isAccessPointsPoE ? (
                                    <>
                                    Tipo: Com PoE
                                    <br/>
                                    Energia total gasta: {accessPoint.energyAcessPoints}w
                                    <br/>
                                    </>
                                ) : (
                                    <>
                                    Tipo: Sem PoE
                                    <br/>
                                    </>
                                )
                                }
                                <br/>
                                <br/>
                            </div>
                        )
                        }
                    </Accordion>

                </label>
            </>
        );
    } else {
        return null;
    }
}