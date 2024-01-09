export const ColorPalette = {
  brandColors: {
    light: "#E3F1FB",
    medium: "#479EE9",
    pure: "#2980D7",
    dark: "#144094",
  },

  secondaryColors: {
    light: "#EAF4F9",
    medium: "#2E5D7D",
    pure: "#2B4D65",
    dark: "#18384D",
  },
};

const { brandColors } = ColorPalette;

export const primaryColorConfiguration = {
  colorPrimary: brandColors.pure,
  colorPrimaryActive: brandColors.pure,

  colorPrimaryBg: brandColors.pure,
  colorPrimaryBgHover: brandColors.pure,
  colorPrimaryBorder: brandColors.pure,
  colorPrimaryBorderHover: brandColors.pure,

  colorPrimaryHover: brandColors.light,

  colorPrimaryText: brandColors.pure,
  colorPrimaryTextHover: brandColors.pure,
  colorPrimaryTextActive: brandColors.pure,
};

export const eaTokens = {
  colorPrimary: "#2980d7",
  colorInfo: "#2980d7",
  colorSuccess: "#26a001",
  colorWarning: "#ffa900",
  colorError: "#c41f2c",
  colorTextBase: "#262626",
  borderRadius: 8,
};
