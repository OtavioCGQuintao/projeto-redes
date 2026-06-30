import type { ProjectSettings } from "../../interfaces/project/ProjectSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";
import Accordion from "../Accordion";


interface AccessControllerProps {
    floor: FloorEditorProps["floor"];
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function AccessControllerSection({
    floor,
    settings,
    floorIndex,
    temp,
    handleTemp,
    handleAdd,
}: AccessControllerProps) {
    if (settings.haveAccessControllers){
        return (
            <>
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
                        onChange={(e) =>{
                            handleTemp(
                                floorIndex,
                                "accessControllers",
                                { isAcessControllersPoE: e.target.value === "true" }
                            )}
                        }
                    >
                        <option value="">Selecione</option>
                        <option value="true">PoE</option>
                        <option value="">Fonte Local</option>
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

                        <Accordion title="Controles de acesso adicionados">
                        {(floor.accessControllers ?? []).map((AccessController,index)=>
                        <>
                        <div key={index}>
                        Controlador de acesso #{index+1}
                        <br/>
                        Quantidade: {AccessController.accessControllers}
                        <br/>
                        Total de portas de rede utilizadas: {AccessController.accessControllerNetworkPorts}
                        <br/>
                        {AccessController.isAcessControllersPoE ? (
                            <>
                            Tipo: Com PoE
                            <br/>
                            Total de energia gasto: {AccessController.energyAccessControllers}w
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
                        </div>
                        </>    
                    )

                        }
                        </Accordion>

                </label>
            </>
        );
    }
}