import type { ProjectSettings } from "../../interfaces/project/ProjectSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";
import Accordion from "../Accordion";


interface PhoneProps {
    floor: FloorEditorProps["floor"];
    settings: ProjectSettings;
    floorIndex: number;
    temp: TempState;
    handleTemp: FloorEditorProps["handleTemp"];
    handleAdd: FloorEditorProps["handleAdd"];
}

export function PhoneSection({
    floor,
    settings,
    floorIndex,
    temp,
    handleTemp,
    handleAdd,
}: PhoneProps) {
    if (settings.havePhones) {
        return (
            <>
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
                    <Accordion title="Telefones adicionados">
                        {(floor.phones ?? []).map((phone, index) =>
                            <div key={index}>
                                Telefone #{index + 1}:
                                <br />
                                Quantidade: {phone.phones}
                                <br />
                                {phone.isPhonePoE ? (
                                    <>
                                        Tipo: VoIP
                                        <br />
                                        Energia total gasta: {phone.energyPhones}w
                                        <br /> <br />
                                    </>
                                ) : (
                                    <>
                                        Tipo: Analógico
                                        <br /> <br />
                                    </>
                                )
                                }
                            </div>
                        )

                        }
                    </Accordion>
                </label>
            </>
        );
    } else{
        return null;
    }
}