import type { Camera } from "../interfaces/Camera";
import type { Phone } from "../interfaces/Phone";
import type { AccessPoint } from "../interfaces/AccessPoint";
import type { AccessController } from "../interfaces/AccessController";
import type { Computer } from "../interfaces/Computer";

export type FloorArrayFields = {
  cameras: Camera;
  phones: Phone;
  accessPoints: AccessPoint;
  accessControllers: AccessController;
  computers: Computer;
};