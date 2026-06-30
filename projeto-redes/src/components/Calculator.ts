import type { ProjectSettings } from "../interfaces/project/ProjectSenttings";
import type { Floor } from "../interfaces/Floor";


interface CalculatorProps {
    settings: ProjectSettings;
    floor: Floor;
}

export function Calculator({ settings, floor }: CalculatorProps) {

    let poeDoorsAccessController = 0;
    let poeEnergyAccessController = 0;
    let networkDoorsAccessController = 0;

    let poeDoorsCamera = 0;
    let poeEnergyCamera = 0;
    let networkDoorsCamera = 0;

    let poeDoorsPhone = 0;
    let poeEnergyPhone = 0;
    let networkDoorsPhone = 0;

    let poeDoorsAccessPoint = 0;
    let poeEnergyAccessPoint = 0;
    let networkDoorsAccessPoint = 0;

    let networkDoorsComputer = 0;

    function countPorts() {
        //AccessController
        (floor.accessControllers ?? []).forEach((accessController) => {
            if (accessController.isAcessControllersPoE) {
               poeDoorsAccessController += accessController.accessControllerNetworkPorts ?? 0
               poeEnergyAccessController += accessController.energyAccessControllers ?? 0
            }
            networkDoorsAccessController += accessController.accessControllerNetworkPorts ?? 0
        });
        //AccessPoint
        (floor.accessPoints ?? []).forEach((accessPoint) => {
            if (accessPoint.isAccessPointsPoE) {
               poeDoorsAccessPoint += accessPoint.accessPoints ?? 0
               poeEnergyAccessPoint += accessPoint.energyAcessPoints ?? 0
            }
            networkDoorsAccessController += accessPoint.accessPoints ?? 0
        });    
        //Camera
        (floor.cameras ?? []).forEach((camera) => {
            if (camera.technologyCameras === "ip_com_poe") {
               poeDoorsCamera += camera.cameras ?? 0
               poeEnergyCamera += camera.energyCameras ?? 0
            }
            networkDoorsAccessController += camera.cameras ?? 0
        });
        //Phone
        (floor.phones ?? []).forEach((phone) => {
            if (phone.isPhonePoE) {
               poeDoorsPhone += phone.phones ?? 0
               poeEnergyPhone += phone.energyPhones ?? 0
            }
            networkDoorsPhone += phone.phones ?? 0
        });
        //Computer
        (floor.computers ?? []).forEach((computer) => {
            networkDoorsComputer += (computer.computers ?? 0);
        });
    }
}