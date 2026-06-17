import type { Escolha } from "./Escolha";

export interface Floor{
    computers?: number;

    phones?: number;
    technologyPhones?: string;
    energyPhones?: number;

    cameras?: number;
    technologyCameras?: string;
    energyCameras?: number;

    acessPoints?: number;
    technologyAcessPoints?: string;
    energyAcessPoints?: number;

    accessControllers?: number;
    technologyAcessControllers?: string;
    energyAccessControllers?: number;
    accessPointNetworkPorts: number;
    isAcessControllersPoE?: boolean;


    escolhas: Escolha[];
}