import type { ProjectSettings } from "../../interfaces/project/ProjetcSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";


interface AccessPointProps {
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function AccessPointSection({
    settings,
    floorIndex,
    temp,
    handleTemp,
    handleAdd,
}: AccessPointProps) {
    if (settings.haveAccessPoints)
        return (
            <>
                {settings.haveAccessPoints && (
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
                            onChange={(e) =>
                                handleTemp(
                                    floorIndex,
                                    "accessPoints",
                                    { isAccessPointsPoE: Boolean(e.target.value) }
                                )
                            }
                        >
                            <option value="">Selecione</option>
                            <option value="true">Com PoE</option>
                            <option value="false">Sem PoE</option>
                        </select>

                        <br />

                        {temp.accessPoints[floorIndex].isAccessPointsPoE === true && (
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
                        <br />
                    </label>
                )}
            </>
        );
}