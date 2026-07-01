import { useState } from "react";
import Accordion from "./Accordion";
import { FloorEditor } from "./FloorEditor";
import { GeneralForm } from "./GeneralForm";
import type { Floor } from "../interfaces/Floor";
import type { ProjectSettings } from "../interfaces/project/ProjectSenttings";
import type { FloorArrayFields } from "../types/FloorArrayFields";
import type { TempState } from "../types/TempState";

function Builder() {
  const [floors, setFloors] = useState<number>(0);
  const [confirmed, setConfirmed] = useState(false);
  const [andares, setAndares] = useState<Floor[]>([]);

  const [projectSettings, setProjectSettings] = useState<ProjectSettings>({
    restForGrowth: 50,
    amountOfComputers: 1,
    expectedUserSpeedGbps: 10,
    horizontalCablingLengthMeters: 25,
    patchCordLengthMeters: 3,
    patchCableLengthMeters: 1,
    pigtailReserveLengthMeters: 1.5,
    haveCameras: false,
    havePhones: false,
    haveAccessPoints: false,
    haveAccessControllers: false,
    opticalCordLength: 25,
  });

  const [temp, setTemp] = useState<TempState>({
    cameras: Array.from({ length: floors }, () => ({})),
    phones: Array.from({ length: floors }, () => ({})),
    accessPoints: Array.from({ length: floors }, () => ({})),
    accessControllers: Array.from({ length: floors }, () => ({})),
    computers: Array.from({ length: floors }, () => ({})),
    rack: Array.from({ length: floors }, () => ({}))
  });

  function handleTemp<K extends keyof FloorArrayFields>(
    indexAndar: number,
    categoria: K,
    campo: Partial<FloorArrayFields[K]>
  ) {
    setTemp((prev: TempState) => ({
      ...prev,
      [categoria]: prev[categoria].map((item, i) =>
        i === indexAndar ? { ...item, ...campo } : item
      ),
    }));
  }

  function handleAdd<K extends keyof FloorArrayFields>(
    indexAndar: number,
    categoria: K
  ) {
    const item = temp[categoria][indexAndar];

    setAndares((prev) =>
      prev.map((andar, i) =>
        i === indexAndar
          ? {
            ...andar,
            [categoria]: [
              ...((andar[categoria] as unknown[]) ?? []),
              item,
            ],
          }
          : andar
      )
    );
  }

  if (confirmed) {
    return (
      <>
        <GeneralForm
          settings={projectSettings}
          onSettingsChange={setProjectSettings}
        />

        {andares.map((floor, i) => (
          <FloorEditor
            floor={floor}
            key={i}
            floorIndex={i}
            temp={temp}
            settings={projectSettings}
            handleTemp={handleTemp}
            handleAdd={handleAdd}
          />
        ))}

        <button
          type="button"
          onDoubleClick={() => {
            setFloors(0);
            setConfirmed(false);
          }}
        >
          Resetar
        </button>
      </>
    );
  }

  return (
    <>
      <Accordion open={true}>
        <h2>Quantos andares o prédio possui?</h2>
        <h3>Certifique-se de que o número esteja correto!</h3>
        <br />

        <input
          type="number"
          min={1}
          value={floors || ""}
          onChange={(e) => setFloors(Number(e.target.value))}
        />

        <br />

        <button
          type="button"
          disabled={floors < 1}
          onClick={() => {
            setConfirmed(true);

            setAndares(
              Array.from({ length: floors }, () => ({} as Floor))
            );
            
            setTemp({
              cameras: Array.from({ length: floors }, () => ({})),
              phones: Array.from({ length: floors }, () => ({})),
              accessPoints: Array.from({ length: floors }, () => ({})),
              accessControllers: Array.from({ length: floors }, () => ({})),
              computers: Array.from({ length: floors }, () => ({})),
              rack: Array.from({ length: floors }, () => ({}))
            });
          }}
        >
          Confirmar
        </button>
      </Accordion>
    </>
  );
}

export default Builder;