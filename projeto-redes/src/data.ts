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
  { subType: "OM1 - 1G SX (850nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "62,5/125µm", waveLength: "850nm",  transceiver: "1000BASE-SX",  speed: "1 Gbps",   maxDistance: "275m",  bandwidth: "200 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM1 - 1G LX (1300nm)", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "62,5/125µm", waveLength: "1300nm", transceiver: "1000BASE-LX",  speed: "1 Gbps",   maxDistance: "550m",  bandwidth: "500 MHz-km", lossForKilometer: "1,5 dB/km", couplingLoss: "0,75 dB" }},

  { subType: "OM2 - 1G SX (850nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm",  transceiver: "1000BASE-SX",  speed: "1 Gbps",   maxDistance: "550m",  bandwidth: "500 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM2 - 1G LX (1300nm)", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "1300nm", transceiver: "1000BASE-LX",  speed: "1 Gbps",   maxDistance: "550m",  bandwidth: "500 MHz-km", lossForKilometer: "1,5 dB/km", couplingLoss: "0,75 dB" }},

  { subType: "OM3 - 10G SR (850nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "10GBASE-SR",  speed: "10 Gbps",  maxDistance: "300m",  bandwidth: "2000 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM3 - 25G SR (850nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "25GBASE-SR",  speed: "25 Gbps",  maxDistance: "70m",   bandwidth: "2000 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM3 - 40G SR4 (850nm)", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "40GBASE-SR4", speed: "40 Gbps",  maxDistance: "100m",  bandwidth: "2000 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM3 - 100G SR4 (850nm)",specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "100GBASE-SR4",speed: "100 Gbps", maxDistance: "100m",  bandwidth: "2000 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},

  { subType: "OM4 - 10G SR (850nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "10GBASE-SR",  speed: "10 Gbps",  maxDistance: "550m",  bandwidth: "4700 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM4 - 25G SR (850nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "25GBASE-SR",  speed: "25 Gbps",  maxDistance: "100m",  bandwidth: "4700 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM4 - 40G SR4 (850nm)", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "40GBASE-SR4", speed: "40 Gbps",  maxDistance: "150m",  bandwidth: "4700 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM4 - 100G SR4 (850nm)",specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850nm", transceiver: "100GBASE-SR4",speed: "100 Gbps", maxDistance: "150m",  bandwidth: "4700 MHz-km", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},

  { subType: "OM5 - 40G SWDM4 (850-953nm)",  specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850-953nm", transceiver: "40G-SWDM4",   speed: "40 Gbps",  maxDistance: "150m", bandwidth: "4700 MHz-km (850nm) / 2470 MHz-km (953nm)", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OM5 - 100G SWDM4 (850-953nm)", specifications: { type: "fiber-optic", covered: "Multimodo", coreSize: "50/125µm", waveLength: "850-953nm", transceiver: "100G-SWDM4",  speed: "100 Gbps", maxDistance: "150m", bandwidth: "4700 MHz-km (850nm) / 2470 MHz-km (953nm)", lossForKilometer: "3,5 dB/km", couplingLoss: "0,75 dB" }},

  { subType: "OS1 - 10G LX (1310nm)", specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", waveLength: "1310nm", transceiver: "10GBASE-LR", speed: "10 Gbps", maxDistance: "2km",  bandwidth: "N/A", lossForKilometer: "1,0 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OS1 - 10G ZR (1550nm)", specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", waveLength: "1550nm", transceiver: "10GBASE-ZR", speed: "10 Gbps", maxDistance: "2km",  bandwidth: "N/A", lossForKilometer: "1,0 dB/km", couplingLoss: "0,75 dB" }},

  { subType: "OS2 - 10G LR (1310nm)",  specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", waveLength: "1310nm", transceiver: "10GBASE-LR",  speed: "10 Gbps",  maxDistance: "10km",  bandwidth: "N/A", lossForKilometer: "0,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OS2 - 100G LR4 (1310nm)",specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", waveLength: "1310nm", transceiver: "100GBASE-LR4",speed: "100 Gbps", maxDistance: "10km",  bandwidth: "N/A", lossForKilometer: "0,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OS2 - 10G ZR (1550nm)",  specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", waveLength: "1550nm", transceiver: "10GBASE-ZR",  speed: "10 Gbps",  maxDistance: "80km",  bandwidth: "N/A", lossForKilometer: "0,5 dB/km", couplingLoss: "0,75 dB" }},
  { subType: "OS2 - 100G ER4 (1550nm)",specifications: { type: "fiber-optic", covered: "Monomodo", coreSize: "9/125µm", waveLength: "1550nm", transceiver: "100GBASE-ER4",speed: "100 Gbps", maxDistance: "40km",  bandwidth: "N/A", lossForKilometer: "0,5 dB/km", couplingLoss: "0,75 dB" }},
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