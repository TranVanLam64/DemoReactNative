import { Platform, TextStyle } from "react-native";

const fonts = {
    fontMontserratBold: {
        fontFamily: "MontserratRoman-Bold",
        fontWeight: Platform.OS == 'ios' ? '700' : "bold",
    } as TextStyle,
    fontMontserratRegular: {
        fontFamily: "MontserratRoman-Regular",
        fontWeight: Platform.OS == 'ios' ? '400' : undefined,
    } as TextStyle,
    fontProductSansRegular: {
        fontFamily: "Product-Sans-Regular",
    } as TextStyle,
    fontAzoSansBold: {
        fontFamily: "AzoSans-Bold",
        fontWeight: Platform.OS == 'ios' ? '900' : "bold",
    } as TextStyle,
}

export default fonts