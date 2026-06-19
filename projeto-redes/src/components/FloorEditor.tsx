import type { FloorEditorProps } from "../types/FloorEditorProps";

import { ComputerSection } from "./devicesSections/ComputerSection";
import { CameraSection } from "./devicesSections/CameraSection";
import { PhoneSection } from "./devicesSections/PhoneSection";
import { AccessPointSection } from "./devicesSections/AccessPointSection";
import { AccessControllerSection } from "./devicesSections/AccessControllerSection";

export function FloorEditor({
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
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}
                    ></ComputerSection>

                    <PhoneSection
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}
                    >
                    </PhoneSection>

                    <CameraSection
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}
                    ></CameraSection>

                    <AccessPointSection
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}>
                    </AccessPointSection>

                    <AccessControllerSection
                        settings={settings}
                        floorIndex={floorIndex}
                        temp={temp}
                        handleTemp={handleTemp}
                        handleAdd={handleAdd}>
                    </AccessControllerSection>
                </label>
            </div>
        </>
    );
}