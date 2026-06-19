import type { ProjectSettings } from "../../interfaces/project/ProjetcSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";


interface PhoneProps {
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function PhoneSection({
    settings,
    floorIndex,
    temp,
    handleTemp,
    handleAdd,
}: PhoneProps) {
    if (settings.havePhones)
        return (
            <>
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
            </>
        );
}