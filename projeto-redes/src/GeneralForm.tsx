import type { ProjectSettings } from "./interfaces/ProjetcSenttings";

interface GeneralProjectFormProps {
  settings: ProjectSettings;
  onSettingsChange: React.Dispatch<
    React.SetStateAction<ProjectSettings>
  >;
}

export function GeneralForm({
  settings,
  onSettingsChange,
}: GeneralProjectFormProps) {
  return (
    <label>
      Qual a quantidade total de computadores?
      <input
        type="number"
        min="1"
        value={settings.amountOfComputers}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            amountOfComputers: Number(e.target.value),
          }))
        }
      />

      <br />
      <br />

      Tem câmeras?
      <input
        type="checkbox"
        checked={settings.haveCameras}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            haveCameras: e.target.checked,
          }))
        }
      />

      <br />

      Tem telefones?
      <input
        type="checkbox"
        checked={settings.havePhones}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            havePhones: e.target.checked,
          }))
        }
      />

      <br />

      Tem access points?
      <input
        type="checkbox"
        checked={settings.haveAccessPoints}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            haveAccessPoints: e.target.checked,
          }))
        }
      />

      <br />

      Tem controladores de acesso?
      <input
        type="checkbox"
        checked={settings.haveAccessControllers}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            haveAccessControllers: e.target.checked,
          }))
        }
      />

      <br />
      <br />

      Qual a velocidade esperada para cada usuário? (Gbps)
      <input
        type="number"
        value={settings.expectedUserSpeedGbps}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            expectedUserSpeedGbps: Number(e.target.value),
          }))
        }
      />

      <br />
      <br />

      Qual a medida padrão da Malha Horizontal? (m)
      <input
        type="number"
        value={settings.horizontalCablingLengthMeters}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            horizontalCablingLengthMeters: Number(e.target.value),
          }))
        }
      />

      <br />
      <br />

      Qual a medida padrão do Patch Cord? (m)
      <input
        type="number"
        value={settings.patchCordLengthMeters}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            patchCordLengthMeters: Number(e.target.value),
          }))
        }
      />

      <br />
      <br />

      Qual a medida padrão do Patch Cable? (m)
      <input
        type="number"
        value={settings.patchCableLengthMeters}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            patchCableLengthMeters: Number(e.target.value),
          }))
        }
      />

      <br />
      <br />

      Qual a reserva padrão do Pigtail? (m)
      <input
        type="number"
        value={settings.pigtailReserveLengthMeters}
        onChange={(e) =>
          onSettingsChange((prev: ProjectSettings) => ({
            ...prev,
            pigtailReserveLengthMeters: Number(e.target.value),
          }))
        }
      />
    </label>
  );
}