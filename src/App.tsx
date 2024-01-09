import "./App.css";
import { Button, Checkbox, ConfigProvider } from "antd";
import DesignTokens from "./utils/provider";

function App() {
  const plainOptions = ["Apple", "Pear", "Orange"];

  return (
    <ConfigProvider theme={DesignTokens}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button type="primary">Primário</Button>
        <Button type="default">Default</Button>
        <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} />
      </div>
    </ConfigProvider>
  );
}

export default App;
