import type { Phone } from "./devices/Phone";
import type { Camera } from "./devices/Camera";
import type { AccessPoint } from "./devices/AccessPoint";
import type { AccessController } from "./devices/AccessController";
import type { Choices } from "./Choices";
import type { Computer } from "./devices/Computer";

export interface Floor{
    distanceToMainRack?: number;
    computers?: Computer[];
    phones?: Phone[];
    cameras?: Camera[];
    accessPoints?: AccessPoint[];
    accessControllers?: AccessController[];
    choices?: Choices[];
}