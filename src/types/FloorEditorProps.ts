import type { TempState } from "./TempState";
import type { ProjectSettings } from "../interfaces/project/ProjectSenttings";
import type { FloorArrayFields } from "./FloorArrayFields";
import type { Floor } from "../interfaces/Floor";

export interface FloorEditorProps {
    floor: Floor;
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