import type { ProjectSettings } from "../../interfaces/project/ProjectSenttings";
import type { TempState } from "../../types/TempState";
import type { FloorEditorProps } from "../../types/FloorEditorProps";
import Accordion from "../Accordion";

interface CameraSectionProps {
  floor: FloorEditorProps["floor"];
  settings: ProjectSettings;
  floorIndex: number;
  temp: TempState;
  handleTemp: FloorEditorProps["handleTemp"];
  handleAdd: FloorEditorProps["handleAdd"];
}

export function CameraSection({
  floor,
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

        <Accordion title="Câmeras adicionadas">
        {(floor.cameras ?? []).map((camera, index) =>
          <div key={index}>
            Câmera #{index+1} 
            <br/>
            Tipo: {camera.technologyCameras}
            <br/>
            {camera.technologyCameras === "ip_com_poe" && (
              <>
              Total gasto: {camera.energyCameras}w
              <br/> <br/>
              </>
            )
            }
            <br/>
          </div>
      )

        }
        </Accordion>
      </label>

    );
  } else {
    return null;
  }

}