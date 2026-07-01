import type { Phone } from "./devices/Phone";
import type { Camera } from "./devices/Camera";
import type { AccessPoint } from "./devices/AccessPoint";
import type { AccessController } from "./devices/AccessController";
import type { Computer } from "./devices/Computer";
import type { Rack } from "./devices/Rack";

export interface Floor{
    rack?: Rack[];
    computers?: Computer[];
    phones?: Phone[];
    cameras?: Camera[];
    accessPoints?: AccessPoint[];
    accessControllers?: AccessController[];
}