import type { TempState } from "./TempState";
import type { ProjectSettings } from "../interfaces/project/ProjetcSenttings";
import type { FloorArrayFields } from "./FloorArrayFields";

export interface FloorEditorProps {
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