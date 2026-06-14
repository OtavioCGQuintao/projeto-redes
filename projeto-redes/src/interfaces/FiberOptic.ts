// FiberOptic.ts
export interface FiberOptic {
  type: "fiber-optic";
  maxDistance: string;
  covered: string;
  coreSize: string;
  waveLength: string[];
  bandwidth: string[];
  couplingLoss: string;
  lossForKilometer: string[];
}