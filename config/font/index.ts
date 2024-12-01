import { Platform, TextStyle } from "react-native";

const fonts = {
    fontMontserratBold: {
        fontFamily: "MontserratRoman-Bold",
        fontWeight: Platform.OS == 'ios' ? '700' : undefined,
    } as TextStyle,
    fontMontserratRegular: {
        fontFamily: "MontserratRoman-Regular",
        fontWeight: Platform.OS == 'ios' ? '400' : undefined,
    } as TextStyle
}

export default fonts