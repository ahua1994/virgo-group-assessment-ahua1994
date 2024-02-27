import {
    Button,
    Checkbox,
    ConfigProvider,
    Form,
    Radio,
    RadioChangeEvent,
    Space,
    Switch,
    Typography,
} from "antd";
import { FC, useState } from "react";
import { dfault } from "./data";
import "./App.css";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const App: FC = () => {
    const [editable, setEditable] = useState(true);
    const [data, setData] = useState(dfault);
    const checkboxes: Array<String> = [data["0"], data["1"], data["2"], data["3"], data["4"]];

    const handleRadio = (e: RadioChangeEvent) => setData({ ...data, isProficient: e.target.value });

    const handleCheckBox = (e: CheckboxChangeEvent, i: number) => {
        let newTools = data.toolsUsed.split(",");
        if (e.target.checked) {
            !newTools.includes(String(i)) && newTools.push(String(i));
        } else {
            newTools = newTools.filter(t => t !== String(i));
        }
        setData({ ...data, toolsUsed: newTools.join(",") });
    };

    const handleProcess = (): void => console.log(data);

    return (
        <ConfigProvider
            theme={{
                components: {
                    // overwrite switch styling
                    Switch: {
                        handleBg: editable ? "white" : "#6B47ED",
                        handleSize: 14,
                        trackPadding: editable ? 4 : 1,
                    },
                    Button: {
                        colorBgContainerDisabled: "#D4CCF7",
                        colorTextDisabled: "white",
                    },
                    Checkbox: {
                        colorBgContainerDisabled: "D8D8D8",
                        colorBorder: editable ? "#6B47ED" : "D8D8D8",
                    },
                    Radio: {
                        colorBgContainerDisabled: "D8D8D8",
                        colorBorder: editable ? "#6B47ED" : "D8D8D8",
                    },
                },
                token: { colorPrimary: editable ? "#6B47ED" : "D8D8D8", colorTextBase: "#343434" },
            }}
        >
            <Form className="form bg-white w-[409px] h-[583px] px-8 py-5 flex flex-col justify-around">
                <Space className="flex justify-between">
                    <Typography className="text-base font-medium">Editable</Typography>
                    <Switch
                        style={{ border: editable ? "none" : "3px solid #D4CCF7" }}
                        checked={editable}
                        onClick={() => setEditable(!editable)}
                    />
                </Space>
                <Typography className="text-[18px] font-bold">
                    Are you proficient in ReactJS development?
                </Typography>
                <Radio.Group
                    defaultValue={data.isProficient}
                    className="flex flex-col h-[59px] justify-between font-[450]"
                >
                    {[true, false].map((x: boolean, i: number) => (
                        <Radio
                            className="font-[550]"
                            onChange={(e: RadioChangeEvent) => handleRadio(e)}
                            style={{ color: data.isProficient === x ? "#343434" : "#979797" }}
                            key={i}
                            disabled={!editable}
                            value={x}
                        >
                            {`${x ? "Yes" : "No"}`}
                        </Radio>
                    ))}
                </Radio.Group>{" "}
                <Space className="flex flex-col items-start">
                    <Typography className="text-[18px] font-bold">
                        Which tools do you use?
                    </Typography>
                    <Typography className="text-base ">Please select all that apply.</Typography>{" "}
                </Space>
                <Checkbox.Group
                    defaultValue={[data[0], data[2], data[3], data[4]]}
                    className="flex flex-col h-[170px] justify-between"
                >
                    {checkboxes.map((x, i) => (
                        <Checkbox
                            onChange={(e: CheckboxChangeEvent) => handleCheckBox(e, i)}
                            style={{
                                color: data.toolsUsed.split(",").includes(String(i))
                                    ? "#343434"
                                    : "#979797",
                            }}
                            disabled={!editable}
                            value={x}
                            className="font-[550]"
                            key={i}
                            checked={data.toolsUsed.split(",").includes(String(i))}
                        >
                            {x}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
                <Space className="flex justify-center">
                    <Button
                        shape="round"
                        size="large"
                        disabled={!editable}
                        className="text-[18px] w-[200px] h-[60px] text-white bg-[#6B47ED] align-self-center"
                        onClick={handleProcess}
                    >
                        Process
                    </Button>
                </Space>
            </Form>
        </ConfigProvider>
    );
};

export default App;
