import { StyleSheet } from "react-native";
import Style from "../../common/Style";

export default StyleSheet.create({
    wrapperButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#4ABF40",
        borderRadius: 6,
        paddingVertical: 16
      },
      buttonText: {
        color: "#fff",
        fontSize: 16, 
        lineHeight: 20,
        marginRight: 45,
        ...Style.fontMontserratBold
    },
    icon24: {
        width: 24,
        height: 24
    }
})