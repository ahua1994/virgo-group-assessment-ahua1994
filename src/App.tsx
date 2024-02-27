import { Button, Checkbox, ConfigProvider, Form, Radio, Space, Switch, Typography } from "antd";
import { FC, useState } from "react";
import "./App.css";

const App: FC = () => {
    const [editable, setEditable] = useState(true);
    const checkboxes = ["Redux", "Lodash", "Ant design", "Webpack", "Other"];
    // const purple = "#6B47ED"
    // const border = "#D4CCF7"
    // const unselected = "#979797"
    return (
        <ConfigProvider
            theme={{
                components: {
                    Switch: {
                        handleBg: editable ? "white" : "#6B47ED",
                        handleSize: 14,  
                        trackPadding:editable?4:1
                    },
                },
                token: { colorPrimary: "#6B47ED", colorTextBase: "#343434"  },
            }}
        >
            <Form className="form bg-white w-[409px] h-[583px] px-8 py-5 flex flex-col justify-around">
                <Space className="flex justify-between">
                    <Typography className="text-base font-medium">Editable</Typography>
                    <Switch style={{border:editable?"none":"3px solid #D4CCF7"}} checked={editable} onClick={() => setEditable(!editable)} />
                </Space>
                <Typography className="text-[18px] font-bold">
                    Are you proficient in ReactJS development?
                </Typography>
                <Radio.Group className="flex flex-col h-[59px] justify-between font-[450]">
                    <Radio defaultChecked={true} value="no">
                        No
                    </Radio>
                    <Radio value="yes">Yes</Radio>
                </Radio.Group>{" "}
                <Space className="flex flex-col items-start">
                    <Typography className="text-[18px] font-bold">
                        Which tools do you use?
                    </Typography>
                    <Typography className="text-base ">Please select all that apply.</Typography>{" "}
                </Space>
                <Checkbox.Group className="flex flex-col h-[170px] justify-between">
                    {checkboxes.map(x => (
                        <Checkbox value={x} className="font-[550]" key={x}>
                            {x}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
                <Space className="flex justify-center">
                    <Button
                        shape="round"
                        size="large"
                        className="text-[18px] w-[200px] h-[60px] text-white bg-[#6B47ED] align-self-center"
                    >
                        Process
                    </Button>
                </Space>
            </Form>
        </ConfigProvider>
    );
};

export default App;
