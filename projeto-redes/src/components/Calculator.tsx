import type { ProjectSettings } from "../interfaces/project/ProjectSenttings";
import type { Floor } from "../interfaces/Floor";
import { useState } from "react";


interface CalculatorProps {
    settings: ProjectSettings;
    floor: Floor;
}

export function Calculator({ settings, floor }: CalculatorProps) {
    //FiberCategory
    const fiberCategories = [
        { type: "OM1 1G SX", mode: "multimode", maxSpeedGbps: 1, maxDistance: 275 },
        { type: "OM1 1G LX", mode: "multimode", maxSpeedGbps: 1, maxDistance: 550 },

        { type: "OM2 1G SX", mode: "multimode", maxSpeedGbps: 1, maxDistance: 550 },
        { type: "OM2 1G LX", mode: "multimode", maxSpeedGbps: 1, maxDistance: 550 },

        { type: "OM3 10G SR", mode: "multimode", maxSpeedGbps: 10, maxDistance: 300 },
        { type: "OM3 25G SR", mode: "multimode", maxSpeedGbps: 25, maxDistance: 70 },
        { type: "OM3 40G SR4", mode: "multimode", maxSpeedGbps: 40, maxDistance: 100 },
        { type: "OM3 100G SR4", mode: "multimode", maxSpeedGbps: 100, maxDistance: 100 },

        { type: "OM4 10G SR", mode: "multimode", maxSpeedGbps: 10, maxDistance: 550 },
        { type: "OM4 25G SR", mode: "multimode", maxSpeedGbps: 25, maxDistance: 100 },
        { type: "OM4 40G SR4", mode: "multimode", maxSpeedGbps: 40, maxDistance: 150 },
        { type: "OM4 100G SR4", mode: "multimode", maxSpeedGbps: 100, maxDistance: 150 },

        { type: "OM5 40G SWDM4", mode: "multimode", maxSpeedGbps: 40, maxDistance: 150 },
        { type: "OM5 100G SWDM4", mode: "multimode", maxSpeedGbps: 100, maxDistance: 150 },

        { type: "OS1 10G LX", mode: "singlemode", maxSpeedGbps: 10, maxDistance: 2000 },
        { type: "OS1 10G ZR", mode: "singlemode", maxSpeedGbps: 10, maxDistance: 2000 },

        { type: "OS2 10G LR", mode: "singlemode", maxSpeedGbps: 10, maxDistance: 10000 },
        { type: "OS2 100G LR4", mode: "singlemode", maxSpeedGbps: 100, maxDistance: 10000 },
        { type: "OS2 10G ZR", mode: "singlemode", maxSpeedGbps: 10, maxDistance: 80000 },
        { type: "OS2 100G ER4", mode: "singlemode", maxSpeedGbps: 100, maxDistance: 40000 },
    ];

    //FiberOpticsChosen
    let fiberOpticsChosen;

    //CableCatogory
    const cableCategories = [
        { name: "Cat5e", speed: 1, maxDistance: 100 },
        { name: "Cat6", speed: 10, maxDistance: 55 },
        { name: "Cat6A", speed: 10, maxDistance: 100 },
        { name: "Cat7", speed: 10, maxDistance: 100 },
        { name: "Cat8", speed: 40, maxDistance: 30 },
    ];

    //CableChosen
    let cableChosen;

    //Tags
    let amountHorizontalCablingTag = 0;
    let amountOutletCoverPlateAndPowerOutletTag = 0;
    let amountPatchCableTag = 0;
    let amountPatchPanelTag = 0;
    let amountPatchPanelPortsTag = 0;

    //PowerStrip
    let powerStripPorts = 0;

    //Exhaustor
    let amountExhaustFan = 0;

    //FemaleRJ45Connector
    let amountFemaleRJ45Connector = 0;

    //OutletCoverPlate (only 2x2 with 2 ports)
    let amountOutletCoverPlate = 0;

    //CageNut
    let amountCageNut = 0;

    //ClosingBar
    let amountClosingBar = 0;

    //VelcroCableTie
    let amountVelcroCableTie = 0;

    //PlasticCableTie
    let amountPlasticCableTie = 0;

    //Tray
    let amountTray = 0;

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
    let patchCordWhiteCableLength = 0;
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

    //DVR
    let amountDVR = 0;

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

    function countPortsAndCablesAndDVR() {
        poeDoorsAccessController = 0;
        poeDoorsAccessPoint = 0;
        poeDoorsCamera = 0;
        poeDoorsPhone = 0;

        networkDoorsAccessController = 0;
        networkDoorsAccessPoint = 0;
        networkDoorsCamera = 0;
        networkDoorsComputer = 0;
        networkDoorsPhone = 0;

        poeEnergyAccessController = 0;
        poeEnergyAccessPoint = 0;
        poeEnergyCamera = 0;
        poeEnergyPhone = 0;

        blueCableDeviceCount = 0;
        redCableDeviceCount = 0;
        yellowCableDeviceCount = 0;
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
            if (camera.technologyCameras === "ip_with_poe") {
                poeDoorsCamera += camera.cameras ?? 0
                poeEnergyCamera += camera.energyCameras ?? 0
            } if(camera.technologyCameras === "dvr"){
                amountDVR += Math.ceil((camera.cameras ?? 0)/32);
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

    function calculateCableChosen() {
        //CableChosen
        cableChosen = cableCategories.find(cable =>
            cable.maxDistance > settings.horizontalCablingLengthMeters &&
            cable.speed >= settings.expectedUserSpeedGbps
        )?.name
    }

    function calculateHorizontalCablesLength() {
        //HorizontalCabling
        horizontalCablingLength =
            (blueCableDeviceCount +
                redCableDeviceCount +
                yellowCableDeviceCount) * settings.horizontalCablingLengthMeters * 2;
    }

    function calculatePatchCordCablesLength() {
        //PatchCordCabling
        patchCordBlueCableLength = blueCableDeviceCount * settings.patchCordLengthMeters;
        patchCordWhiteCableLength = redCableDeviceCount * settings.patchCordLengthMeters;
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
                amountExhaustFan = 1;
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
            countDevices += amountPoePatchPanel + amountNormalPatchPanel;

            //ExhaustFan
            if (rack.hasExhaustFan) {
                countDevices += 1;
            }

            //Tray
            if (rack.hasTray) {
                amountTray = 1;
                countDevices += 4;
            }
        });
        if (countDevices * settings.restForGrowth < 20) {
            rackHeight = Math.ceil((countDevices * settings.restForGrowth) / 2) * 2;
        } else {
            rackHeight = Math.ceil((countDevices * settings.restForGrowth) / 4) * 4;
        }
    }

    function calculateCageNut() {
        //CageNut
        amountCageNut = rackHeight * 4;
    }

    function calculateVelcroCableTie() {
        //VelcroCableTie
        amountVelcroCableTie = 1;
    }

    function calculatePlasticCableTie() {
        //PlasticCableTie
        const totalCablingHorizontal =
            blueCableDeviceCount +
            redCableDeviceCount +
            yellowCableDeviceCount;
        amountPlasticCableTie = Math.ceil(totalCablingHorizontal / 100);
    }

    function calculateClosingBar() {
        //ClosingBar
        let countDevices = amountPoeSwitch +
            amountNormalSwitch +
            amountPoePatchPanel +
            amountNormalPatchPanel;
        (floor.rack ?? []).forEach(rack => {
            //CableOrganizer
            countDevices += amountPoePatchPanel + amountNormalPatchPanel;
            //ExhaustFan
            if (rack.hasExhaustFan) {
                countDevices += 1;
            }

            //Tray
            if (rack.hasTray) {
                countDevices += 4;
            }
        });
        amountClosingBar = rackHeight - countDevices;
    }

    function calculateFiberOptics() {
        const countDevices =
            blueCableDeviceCount +
            redCableDeviceCount +
            yellowCableDeviceCount;

        const maxDistance = Math.max(
            ...(floor.rack ?? []).map(r => r.distanceToMainRack || 0)
        );

        const realThroughput =
            settings.expectedUserSpeedGbps *
            0.3 *
            countDevices;

        fiberOpticsChosen = fiberCategories.find(fiber =>
            fiber.maxSpeedGbps >= realThroughput &&
            fiber.maxDistance >= maxDistance
        )?.type;
    }

    const [calculate, setCalculate] = useState(false)

    countPortsAndCablesAndDVR();
    calculateSwitchAndPatchPanel();
    calculateCableChosen();
    calculateHorizontalCablesLength();
    calculatePatchCordCablesLength();
    calculatePatchCableCablesLength();
    calculateAmountFemaleRJ45Connector();
    calculateOutletCoverPlate();
    calculateTags();
    calculatePowerStrip();
    calculateRackHeigth();
    calculateCageNut();
    calculateVelcroCableTie();
    calculatePlasticCableTie();
    calculateClosingBar();
    calculateFiberOptics();

    let indexItemA = 1;
    let indexItemB = 1;
    let indexItemC = 1;
    let indexItemD = 1;

    return calculate ? (
        <tbody>
            <tr>
                <td colSpan={4}><b>1. ÁREA DE TRABALHO</b></td>
            </tr>

            {amountFemaleRJ45Connector > 0 && (
                <tr>
                    <td>a.{indexItemA++}</td>
                    <td>Tomada RJ45 Fêmea {cableChosen}</td>
                    <td>unid</td>
                    <td>{amountFemaleRJ45Connector}</td>
                </tr>

            )}

            {amountOutletCoverPlate > 0 && (
                <tr>
                    <td>a.{indexItemA++}</td>
                    <td>Espelho 4x4 - 2 estradas/furações</td>
                    <td>unid</td>
                    <td>{amountOutletCoverPlate}</td>
                </tr>
            )}

            {blueCableDeviceCount > 0 && (
                <tr>
                    <td>a.{indexItemA++}</td>
                    <td>Patch Cord {cableChosen} azul, {settings.patchCordLengthMeters}m </td>
                    <td>unid</td>
                    <td>{blueCableDeviceCount}</td>
                </tr>
            )}

            {redCableDeviceCount > 0 && (
                <tr>
                    <td>a.{indexItemA++}</td>
                    <td>Patch Cord {cableChosen} branco, {settings.patchCableLengthMeters}m </td>
                    <td>unid</td>
                    <td>{redCableDeviceCount}</td>
                </tr>
            )}

            {yellowCableDeviceCount > 0 && (
                <tr>
                    <td>a.{indexItemA++}</td>
                    <td>Patch Cord {cableChosen} amarelo, {settings.patchCableLengthMeters}m </td>
                    <td>unid</td>
                    <td>{yellowCableDeviceCount}</td>
                </tr>
            )}

            <tr>
                <td colSpan={4}><b>2. CABEAMENTO HORIZONTAL</b></td>
            </tr>

            {horizontalCablingLength > 0 && (
                <tr>
                    <td>b.{indexItemB++}</td>
                    <td>Cabo UTP par trançado {cableChosen}  (MH)</td>
                    <td>cxs</td>
                    <td>{Math.ceil(horizontalCablingLength/305)}</td>
                </tr>
            )}

            <tr>
                <td colSpan={4}><b>3. SALA DE EQUIPAMENTOS / TELECOM (SEQ/SET)</b></td>
            </tr>

            {(amountNormalPatchPanel + amountPoePatchPanel) > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Patch Panel (cableChosen), 24 portas (PPMH - Patch de malha horizontal)</td>
                    <td>unid</td>
                    <td>{amountNormalPatchPanel + amountPoePatchPanel}</td>
                </tr>
            )}

            {(amountNormalSwitch + amountPoeSwitch) > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Switch (cableChosen), 24 portas</td>
                    <td>unid</td>
                    <td>{amountNormalSwitch + amountPoeSwitch}</td>
                </tr>
            )}

            {(amountDVR) > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>DVR 32 portas</td>
                    <td>unid</td>
                    <td>{amountDVR}</td>
                </tr>
            )}

            {rackHeight > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    {(floor.rack ?? []).map((rack, index) => (
                        <span key={index}>
                            Rack {rack.closed ? "Fechado" : "Aberto"}, largura de 19" e tamanho de {rackHeight}U
                        </span>
                    ))}
                    <td>unid</td>
                    <td>1</td>
                </tr>
            )}

            {(blueCableDeviceCount + redCableDeviceCount + yellowCableDeviceCount) > 0 && 
            (Number((floor.rack ?? []).map((rack) => rack.distanceToMainRack)) > 0) &&(
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Fibra Óptica {fiberOpticsChosen}</td>
                    <td>m</td>
                    <td>
                        {Math.max(
                            ...(floor.rack ?? []).map(r => r.distanceToMainRack || 0)
                        )}
                    </td>
                </tr>
            )}

            {blueCableDeviceCount > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Patch Cable (cableChosen) azul, {settings.patchCableLengthMeters}</td>
                    <td>unid</td>
                    <td>{blueCableDeviceCount}</td>
                </tr>
            )}

            {redCableDeviceCount > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Patch Cable (cableChosen) vermelho, {settings.patchCableLengthMeters}</td>
                    <td>unid</td>
                    <td>{redCableDeviceCount}</td>
                </tr>
            )}

            {yellowCableDeviceCount > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Patch Cable (cableChosen) amarelo, {settings.patchCableLengthMeters}</td>
                    <td>unid</td>
                    <td>{yellowCableDeviceCount}</td>
                </tr>
            )}

            {(amountTray) > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Bandeja fixa</td>
                    <td>unid</td>
                    <td>{amountTray}</td>
                </tr>
            )}

            {(amountExhaustFan) > 0 && (
                <tr>
                    <td>c.{indexItemC++}</td>
                    <td>Exaustor 19"</td>
                    <td>unid</td>
                    <td>{amountExhaustFan}</td>
                </tr>
            )}

            <tr>
                <td colSpan={4}><b>4. MISCELÂNEA</b></td>
            </tr>

            {amountPatchPanelTag > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Etiquetas Patch Panel</td>
                    <td>unid</td>
                    <td>{amountPatchPanelTag}</td>
                </tr>
            )}

            {amountPatchPanelPortsTag > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Etiquetas Portas Patch Panel</td>
                    <td>unid</td>
                    <td>{amountPatchPanelPortsTag}</td>
                </tr>
            )}

            {amountPatchCableTag > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Etiquetas Patch Cable</td>
                    <td>unid</td>
                    <td>{amountPatchCableTag}</td>
                </tr>
            )}

            {amountOutletCoverPlateAndPowerOutletTag > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Etiquetas Tomadas</td>
                    <td>unid</td>
                    <td>{amountOutletCoverPlateAndPowerOutletTag}</td>
                </tr>
            )}

            {amountHorizontalCablingTag > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Etiquetas de identificação Cabos UTP - MH</td>
                    <td>unid</td>
                    <td>{amountHorizontalCablingTag}</td>
                </tr>
            )}

            {amountPlasticCableTie > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Abraçadeira plástica, pacote 100 unidades</td>
                    <td>pct</td>
                    <td>{Math.ceil(amountPlasticCableTie/100)}</td>
                </tr>
            )}

            {amountVelcroCableTie > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Abraçadeira velcro, rolo 3m</td>
                    <td>rolo</td>
                    <td>{amountVelcroCableTie}</td>
                </tr>
            )}

            {powerStripPorts > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Régua com {powerStripPorts} tomadas - filtro de linha</td>
                    <td>unid</td>
                    <td>1</td>
                </tr>
            )}

            {amountClosingBar > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Régua de fechamento - 1U</td>
                    <td>unid</td>
                    <td>{amountClosingBar}</td>
                </tr>
            )}

            {amountCageNut > 0 && (
                <tr>
                    <td>d.{indexItemD++}</td>
                    <td>Porca gaiola pacotes 10 unidades</td>
                    <td>pct</td>
                    <td>{Math.ceil(amountCageNut / 10)}</td>
                </tr>

            )}
        </tbody>
    ) : (<>
        <label>
            <br />
            Certifique-se de que todos os dados do andar estão corretos!
            <br />
            <button onClick={() => setCalculate(true)}>
                {calculate ? "Calculado" : "Calcular!"}
            </button>
        </label>
    </>);
}
