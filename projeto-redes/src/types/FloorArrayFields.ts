import type { Camera } from "../interfaces/devices/Camera";
import type { Phone } from "../interfaces/devices/Phone";
import type { AccessPoint } from "../interfaces/devices/AccessPoint";
import type { AccessController } from "../interfaces/devices/AccessController";
import type { Computer } from "../interfaces/devices/Computer";
import type { Rack } from "../interfaces/devices/Rack";

export type FloorArrayFields = {
  rack: Rack;
  cameras: Camera;
  phones: Phone;
  accessPoints: AccessPoint;
  accessControllers: AccessController;
  computers: Computer;
};