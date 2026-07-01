import type { FloorEditorProps } from "../types/FloorEditorProps";

import { ComputerSection } from "./floorSections/ComputerSection";
import { CameraSection } from "./floorSections/CameraSection";
import { PhoneSection } from "./floorSections/PhoneSection";
import { AccessPointSection } from "./floorSections/AccessPointSection";
import { AccessControllerSection } from "./floorSections/AccessControllerSection";
import { RackSection } from "./floorSections/RackSection";

export function FloorEditor({
    floor,
    floorIndex,
    temp,
    settings,
    handleTemp,
    handleAdd
}: FloorEditorProps) {

    return (
        <>
            <div key={floorIndex}>
                <h2>
                    {floorIndex === 0
                        ? "S.E.Q"
                        : `S.E.T ${floorIndex + 1}º Andar`}
                </h2>
                <label>
                    <ComputerSection
                        floor={floor}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}
                    ></ComputerSection>

                    <PhoneSection
                        floor={floor}
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}
                    >
                    </PhoneSection>

                    <CameraSection
                        floor={floor}
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}
                    ></CameraSection>

                    <AccessPointSection
                        floor={floor}
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}>
                    </AccessPointSection>

                    <AccessControllerSection
                        floor={floor}
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}>
                    </AccessControllerSection>

                    <RackSection
                        floor={floor}
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}>
                    </RackSection>

                </label>
            </div>
        </>
    );
}