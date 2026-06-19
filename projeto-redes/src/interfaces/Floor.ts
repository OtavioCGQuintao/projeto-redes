import type { Phone } from "./Phone";
import type { Camera } from "./Camera";
import type { AccessPoint } from "./AccessPoint";
import type { AccessController } from "./AccessController";
import type { Escolha } from "./Choices";
import type { Computer } from "./Computer";

export interface Floor{
    computers?: Computer[];
    phones?: Phone[];
    cameras?: Camera[];
    accessPoints?: AccessPoint[];
    accessControllers?: AccessController[];
    escolhas?: Escolha[];
}