import type { FloorArrayFields } from "./FloorArrayFields";

export type TempState = {
    [K in keyof FloorArrayFields]: FloorArrayFields[K][];
};