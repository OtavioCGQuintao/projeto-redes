import type { ProjectSettings } from "../../interfaces/project/ProjetcSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";


interface CameraSectionProps {
  settings: ProjectSettings;
  floorIndex: number;
  temp: TempState;
  handleTemp: FloorEditorProps["handleTemp"];
  handleAdd: FloorEditorProps["handleAdd"];
}

export function CameraSection({
  settings,
  floorIndex,
  temp,
  handleTemp,
  handleAdd,
}: CameraSectionProps) {
  if (settings.haveCameras) {
    return (

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

    );
  } else {
    <>
    </>
  }

}