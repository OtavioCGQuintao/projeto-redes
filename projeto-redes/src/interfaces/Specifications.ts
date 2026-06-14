import type { TwistedPairCable } from "./TwistedPairCable";
import type { FiberOptic } from "./FiberOptic";
import type { DIO } from "./DIO";
import type { TO } from "./TO";

export  type Specifications =
    | TwistedPairCable
    | FiberOptic
    | DIO
    | TO;