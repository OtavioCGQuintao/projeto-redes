// src/data.ts
import type { SubType } from "./interfaces/SubType";

export const opcoes: Record<string, SubType[]> = {
  "Par Trançado": [
    { subType: "Cat5", specifications: { type: "twisted-pair-cable", speed: "100Mpbs", maxDistance: "100m", bandwidth: "100MHz" } },
    { subType: "Cat5e", specifications: { type: "twisted-pair-cable", speed: "1Gbps", maxDistance: "100m", bandwidth: "100MHz" } },
    { subType: "Cat6", specifications: { type: "twisted-pair-cable", speed: "10Gbps", maxDistance: "55m", bandwidth: "250MHz" } },
    { subType: "Cat6A", specifications: { type: "twisted-pair-cable", speed: "10Gbps", maxDistance: "100m", bandwidth: "500MHz" } },
    { subType: "Cat7", specifications: { type: "twisted-pair-cable", speed: "10Gbps", maxDistance: "100m", bandwidth: "600MHz" } },
    { subType: "Cat8", specifications: { type: "twisted-pair-cable", speed: "40Gbps", maxDistance: "30m", bandwidth: "2.000MHz" } },
  ],
  "Fibra Óptica": [
    { subType: "OM1", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "62,5/125µm", maxDistance: "275m", waveLength: ["850nm", "1300nm"], bandwidth: ["160 MHz-km", "500 MHz-km"], lossForKilometer: ["3,5 dB/km", "1,5 dB/km"], couplingLoss: "0,75 dB" } },
    { subType: "OM2", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", maxDistance: "550m", waveLength: ["850nm", "1300nm"], bandwidth: ["500 MHz-km", "500 MHz-km"], lossForKilometer: ["3,5 dB/km", "1,5 dB/km"], couplingLoss: "0,75 dB" } },
    { subType: "OM3", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", maxDistance: "300m", waveLength: ["850nm"], bandwidth: ["2000 MHz-km"], lossForKilometer: ["3,5 dB/km"], couplingLoss: "0,75 dB" } },
    { subType: "OM4", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", maxDistance: "550m", waveLength: ["850nm"], bandwidth: ["3500 MHz-km"], lossForKilometer: ["3,5 dB/km"], couplingLoss: "0,75 dB" } },
    { subType: "OM5", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", maxDistance: "150m", waveLength: ["850nm", "953nm"], bandwidth: [""], lossForKilometer: ["3,5 dB/km"], couplingLoss: "0,75 dB" } },
    { subType: "OS1", specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", maxDistance: "10km", waveLength: ["1310nm", "1550nm"], bandwidth: ["N/A"], lossForKilometer: ["1,0 dB/km", "1,0 dB/km"], couplingLoss: "0,75 dB" } },
    { subType: "OS2", specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", maxDistance: "40km", waveLength: ["1310nm", "1550nm"], bandwidth: ["N/A"], lossForKilometer: ["0,5 dB/km", "0,5 dB/km"], couplingLoss: "0,75 dB" } },
  ],
  "DIO": [
    { subType: "DIO 12 portas", specifications: { type: "dio", entranceDoors: 6, exitDoors: 6, typeConector: ["LC", "SC"], limitOfCables: 12, loss: "1,7dB" }},
    { subType: "DIO 24 portas", specifications: { type: "dio", entranceDoors: 12, exitDoors: 12, typeConector: ["LC", "SC"], limitOfCables: 24, loss: "1,7dB" }},
    { subType: "DIO 48 portas", specifications: { type: "dio", entranceDoors: 24, exitDoors: 24, typeConector: ["LC", "SC"], limitOfCables: 48, loss: "1,7dB" } },
  ],
  "TO": [
  { subType: "TO LC OM1", specifications: { type: "to", limitOfCables: 12,  typeConector: "LC", category: "OM1", loss: "0,7dB" }},
  { subType: "TO LC OM2", specifications: { type: "to", limitOfCables: 12,  typeConector: "LC", category: "OM2", loss: "0,7dB" }},
  { subType: "TO LC OM3", specifications: { type: "to", limitOfCables: 12,  typeConector: "LC", category: "OM3", loss: "0,7dB" }},
  { subType: "TO LC OM4", specifications: { type: "to", limitOfCables: 12,  typeConector: "LC", category: "OM4", loss: "0,7dB" }},
  { subType: "TO SC OM1", specifications: { type: "to", limitOfCables: 12,  typeConector: "SC", category: "OM1", loss: "0,7dB" }},
  { subType: "TO SC OM2", specifications: { type: "to", limitOfCables: 12,  typeConector: "SC", category: "OM2", loss: "0,7dB" }},
  { subType: "TO SC OM3", specifications: { type: "to", limitOfCables: 12,  typeConector: "SC", category: "OM3", loss: "0,7dB" }},
  { subType: "TO SC OM4", specifications: { type: "to", limitOfCables: 12,  typeConector: "SC", category: "OM4", loss: "0,7dB" }},
],
};