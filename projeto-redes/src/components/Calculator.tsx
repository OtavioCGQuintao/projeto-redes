import type { ProjectSettings } from "../interfaces/project/ProjectSenttings";
import type { Floor } from "../interfaces/Floor";


interface CalculatorProps {
    settings: ProjectSettings;
    floor: Floor;
}

export function Calculator({ settings, floor }: CalculatorProps) {
    //Tags
    let amountHorizontalCablingTag = 0;
    let amountOutletCoverPlateAndPowerOutletTag = 0;
    let amountPatchCableTag = 0;
    let amountPatchPanelTag = 0;
    let amountPatchPanelPortsTag = 0;

    //PowerStrip
    let powerStripPorts = 0;

    //FemaleRJ45Connector
    let amountFemaleRJ45Connector = 0;

    //OutletCoverPlate (only 2x2 with 2 ports)
    let amountOutletCoverPlate = 0;

    //Cables
    let blueCableDeviceCount = 0;
    let redCableDeviceCount = 0;
    let yellowCableDeviceCount = 0;

    //LengthCables
    let blueCableLength = 0;
    let redCableLength = 0;
    let yellowCableLength = 0;

    //Rack
    let rackHeight = 0;

    //PatchCord
    let patchCordBlueCableLength = 0;
    let patchCordRedCableLength = 0;
    let patchCordYellowCableLength = 0;

    //PatchCable
    let patchCableBlueCableLength = 0;
    let patchCableRedCableLength = 0;
    let patchCableYellowCableLength = 0;

    //HorizontalCabling
    let horizontalCablingLength = 0;

    //Switchs
    let amountPoeSwitch = 0;
    let amountNormalSwitch = 0;

    //PatchPanels
    let amountPoePatchPanel = 0;
    let amountNormalPatchPanel = 0;

    //AccessController
    let poeDoorsAccessController = 0;
    let poeEnergyAccessController = 0;
    let networkDoorsAccessController = 0;

    //Camera
    let poeDoorsCamera = 0;
    let poeEnergyCamera = 0;
    let networkDoorsCamera = 0;

    //Phone
    let poeDoorsPhone = 0;
    let poeEnergyPhone = 0;
    let networkDoorsPhone = 0;

    //AccessPoint
    let poeDoorsAccessPoint = 0;
    let poeEnergyAccessPoint = 0;
    let networkDoorsAccessPoint = 0;

    //Computer
    let networkDoorsComputer = 0;

    function countPortsAndCables() {
        //AccessController
        (floor.accessControllers ?? []).forEach((accessController) => {
            if (accessController.isAcessControllersPoE) {
                poeDoorsAccessController += accessController.accessControllerNetworkPorts ?? 0
                poeEnergyAccessController += accessController.energyAccessControllers ?? 0
            }
            networkDoorsAccessController += accessController.accessControllerNetworkPorts ?? 0
            redCableDeviceCount += accessController.accessControllerNetworkPorts ?? 0;
        });

        //AccessPoint
        (floor.accessPoints ?? []).forEach((accessPoint) => {
            if (accessPoint.isAccessPointsPoE) {
                poeDoorsAccessPoint += accessPoint.accessPoints ?? 0
                poeEnergyAccessPoint += accessPoint.energyAcessPoints ?? 0
            }
            networkDoorsAccessPoint += accessPoint.accessPoints ?? 0
            blueCableDeviceCount += accessPoint.accessPoints ?? 0
        });

        //Camera
        (floor.cameras ?? []).forEach((camera) => {
            if (camera.technologyCameras === "ip_com_poe") {
                poeDoorsCamera += camera.cameras ?? 0
                poeEnergyCamera += camera.energyCameras ?? 0
            }
            networkDoorsCamera += camera.cameras ?? 0
            redCableDeviceCount += camera.cameras ?? 0
        });

        //Phone
        (floor.phones ?? []).forEach((phone) => {
            if (phone.isPhonePoE) {
                poeDoorsPhone += phone.phones ?? 0
                poeEnergyPhone += phone.energyPhones ?? 0
            }
            networkDoorsPhone += phone.phones ?? 0
            yellowCableDeviceCount += phone.phones ?? 0
        });

        //Computer
        (floor.computers ?? []).forEach((computer) => {
            networkDoorsComputer += computer.computers ?? 0
            blueCableDeviceCount += computer.computers ?? 0
        });
    }

    function calculateSwitchAndPatchPanel() {
        //PoESwitch
        const poePorts = (poeDoorsAccessController +
            poeDoorsAccessPoint +
            poeDoorsCamera +
            poeDoorsPhone);
        amountPoeSwitch = Math.ceil((poePorts * settings.restForGrowth) / 24);

        //NormalSwitch
        const networkPorts = (networkDoorsAccessController +
            networkDoorsAccessPoint +
            networkDoorsCamera +
            networkDoorsComputer +
            networkDoorsPhone
        ) - poePorts;
        amountNormalSwitch = Math.ceil((networkPorts * settings.restForGrowth) / 24);

        //PatchPanels
        amountPoePatchPanel = amountPoeSwitch;
        amountNormalPatchPanel = amountNormalSwitch;
    }

    function calculateHorizontalCablesLength() {
        //HorizontalCabling
        horizontalCablingLength =
            (blueCableDeviceCount +
                redCableDeviceCount +
                yellowCableDeviceCount) * settings.horizontalCablingLengthMeters;
    }

    function calculatePatchCordCablesLength() {
        //PatchCordCabling
        patchCordBlueCableLength = blueCableDeviceCount * settings.patchCordLengthMeters;
        patchCordRedCableLength = redCableDeviceCount * settings.patchCordLengthMeters;
        patchCordYellowCableLength = yellowCableDeviceCount * settings.patchCordLengthMeters;
    }

    function calculatePatchCableCablesLength() {
        //PatchCableCabling
        patchCableBlueCableLength = blueCableDeviceCount * settings.patchCableLengthMeters;
        patchCableRedCableLength = redCableDeviceCount * settings.patchCableLengthMeters;
        patchCableYellowCableLength = yellowCableDeviceCount * settings.patchCableLengthMeters;
    }

    function calculateAmountFemaleRJ45Connector() {
        //FemaleRJ45
        const cableCount =
            blueCableDeviceCount +
            redCableDeviceCount +
            yellowCableDeviceCount;
        amountFemaleRJ45Connector = cableCount * 2;
    }

    function calculateOutletCoverPlate() {
        //OutletCoverPlate
        const cableCount =
            blueCableDeviceCount +
            redCableDeviceCount +
            yellowCableDeviceCount;
        amountOutletCoverPlate = cableCount;
    }

    function calculateTags() {
        //HorizontalCabling
        amountHorizontalCablingTag = amountOutletCoverPlate * 4;

        //OutletCoverPlateAndPowerOutlet
        amountOutletCoverPlateAndPowerOutletTag = amountOutletCoverPlate * 3;

        //PatchCable
        amountPatchCableTag = amountOutletCoverPlate * 4;

        //PatchPanel
        amountPatchPanelTag = amountNormalPatchPanel + amountPoePatchPanel;

        //PatchPanelPorts
        amountPatchPanelPortsTag = (amountNormalPatchPanel + amountPoePatchPanel) * 24;
    }

    function calculatePowerStrip() {
        //PowerStrip
        let countDevices = amountPoeSwitch +
            amountNormalSwitch +
            amountPoePatchPanel +
            amountNormalPatchPanel;
        (floor.rack ?? []).forEach(rack => {
            if (rack.hasExhaustFan) {
                countDevices += 1;
            }
            if (rack.hasRouter) {
                countDevices += 1;
            }
        });
        powerStripPorts = Math.round((countDevices * settings.restForGrowth) / 2) * 2;
    }

    function calculateRackHeigth() {
        //RackHeigth
        let countDevices = amountPoeSwitch +
            amountNormalSwitch +
            amountPoePatchPanel +
            amountNormalPatchPanel;
        (floor.rack ?? []).forEach(rack => {
            //CableOrganizer
            countDevices += countDevices;

            //ExhaustFan
            if (rack.hasExhaustFan) {
                countDevices += 1;
            }

            //Tray
            if (rack.hasTray) {
                countDevices += 1;
            }
        });
        if(countDevices * settings.restForGrowth > 20){
            rackHeight = Math.ceil((countDevices * settings.restForGrowth)/2)*2;
        } else{
            rackHeight = Math.ceil((countDevices * settings.restForGrowth)/4)*4;
        }
    }
}