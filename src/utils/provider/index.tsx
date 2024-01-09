import type { ThemeConfig } from "antd";
import { primaryColorConfiguration } from "../constants";

const DesignTokens: ThemeConfig = {
  token: {
    ...primaryColorConfiguration,
  },
  components: {
    Button: {
      colorPrimary: "#ce09ff",
      algorithm: true, // Enable algorithm
    },
    Input: {
      colorPrimary: "#eb2f96",
      algorithm: true,
    },
  },
};

export default DesignTokens;
