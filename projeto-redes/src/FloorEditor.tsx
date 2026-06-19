import type { ProjectSettings } from "./interfaces/ProjetcSenttings";
import type { FloorArrayFields } from "./types/FloorArrayFields";
import type { TempState } from "./types/TempState";

interface FloorEditorProps {
    floorIndex: number;
    temp: TempState;
    settings: ProjectSettings;

    handleTemp: <K extends keyof FloorArrayFields>(
        floorIndex: number,
        categoria: K,
        campo: Partial<FloorArrayFields[K]>
    ) => void;

    handleAdd: <K extends keyof FloorArrayFields>(
        floorIndex: number,
        categoria: K
    ) => void;
}

export function FloorEditor({
    floorIndex,
    temp,
    settings,
    handleTemp,
    handleAdd
}: FloorEditorProps) {

    return (
        <>
            <div key={floorIndex}>
                <h2>
                    {floorIndex === 0
                        ? "S.E.Q"
                        : `S.E.T ${floorIndex + 1}º Andar`}
                </h2>

                <label>
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
                    <br />
                    <br />

                    {settings.haveCameras && (
                        <label>
                            Número de câmeras neste andar:
                            <input
                                type="number"
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "cameras",
                                        { cameras: Number(e.target.value) }
                                    )
                                }
                            />
                            <br />

                            Selecione a tecnologia da(s) câmera(s):
                            <select
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "cameras",
                                        { technologyCameras: String(e.target.value) }
                                    )
                                }
                            >
                                <option value="">Selecione</option>
                                <option value="ip_sem_poe">IP sem PoE</option>
                                <option value="ip_com_poe">IP com PoE</option>
                                <option value="analogica_hd">Analógica HD </option>
                                <option value="analogica_tradicional">
                                    Analógica Tradicional
                                </option>
                            </select>

                            <br />

                            {temp.cameras[floorIndex]?.technologyCameras === "ip_com_poe" && (
                                <label>
                                    Qual o consumo total das câmeras? (Watts)
                                    <input
                                        type="number"
                                        onChange={(e) =>
                                            handleTemp(
                                                floorIndex,
                                                "cameras",
                                                { energyCameras: Number(e.target.value) }
                                            )
                                        }
                                    />
                                </label>
                            )}

                            <br />
                            <br />

                            <button onClick={() => handleAdd(floorIndex, "cameras")}>
                                Confirmar Câmeras
                            </button>

                            <br />
                            <br />
                        </label>
                    )}

                    {settings.havePhones && (
                        <label>
                            Quantidade de telefones neste andar:
                            <input
                                type="number"
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "phones",
                                        { phones: Number(e.target.value) }
                                    )
                                }
                            />

                            <br />

                            Selecione a tecnologia do(s) telefone(s):
                            <select
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "phones",
                                        { isPhonePoE: Boolean(e.target.value) }
                                    )
                                }
                            >
                                <option value="">Selecione</option>
                                <option value="">Analógico</option>
                                <option value="true">VoIP</option>
                            </select>

                            <br />

                            {temp.phones[floorIndex]?.isPhonePoE === true && (
                                <>
                                    <label>
                                        Qual o consumo total dos telefones?
                                        <input
                                            type="number"
                                            onChange={(e) =>
                                                handleTemp(
                                                    floorIndex,
                                                    "phones",
                                                    { energyPhones: Number(e.target.value) }
                                                )
                                            }
                                        />
                                        <br />
                                    </label>
                                </>
                            )}

                            <br />

                            <button onClick={() => handleAdd(floorIndex, "phones")}>
                                Confirmar telefones
                            </button>

                            <br />
                            <br />
                        </label>
                    )}

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

                    {settings.haveAccessControllers && (
                        <label>
                            Quantidade de controladores de acesso neste andar:
                            <input
                                type="number"
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "accessControllers",
                                        { accessControllers: Number(e.target.value) }
                                    )
                                }
                            />

                            <br />

                            Quantas portas de rede ocupam no total:
                            <input
                                type="number"
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "accessControllers",
                                        { accessControllerNetworkPorts: Number(e.target.value) }
                                    )
                                }
                            />

                            <br />

                            Selecione o tipo de alimentação:
                            <select
                                onChange={(e) =>
                                    handleTemp(
                                        floorIndex,
                                        "accessControllers",
                                        { isAcessControllersPoE: e.target.value === "true" }
                                    )
                                }
                            >
                                <option value="">Selecione</option>
                                <option value="true">PoE</option>
                                <option value="false">Fonte Local</option>
                            </select>

                            <br />

                            {temp.accessControllers[floorIndex]?.isAcessControllersPoE && (
                                <label>
                                    Qual a energia total consumida: (Watts)
                                    <input
                                        type="number"
                                        onChange={(e) =>
                                            handleTemp(
                                                floorIndex,
                                                "accessControllers",
                                                { energyAccessControllers: Number(e.target.value) }
                                            )
                                        }
                                    />
                                    <br />
                                </label>
                            )}

                            <br />

                            <button
                                onClick={() =>
                                    handleAdd(floorIndex, "accessControllers")
                                }
                            >
                                Confirmar controladores de acesso
                            </button>

                            <br />
                            <br />
                        </label>
                    )}
                </label>
            </div>
        </>
    );
}