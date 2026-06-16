import type { Escolha } from "./Escolha";

export interface Floor{
    computers?: number;
    phones?: number;
    cameras?: number;
    escolhas: Escolha[];
}