import { StyleSheet } from "react-native"
import Style from "../../../common/Style"

export default StyleSheet.create({
  termContainer: {
    flex: 1,
    paddingTop: 245,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  imageTerm: {
    width: 156,
    height: 64,
    marginBottom: 44,
  },
  itemTerm: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    marginBottom: 24,
  },
  itemTextTerm: {
    fontSize: 16,
    lineHeight: 24,
    ...Style.fontMontserratBold,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginTop: 16,
    marginBottom: 25,
  },
  checkBox: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 8,
  },
  checkBoxChecked: {
    backgroundColor: "#4ABF40",
  },
  checkBoxUnChecked: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFFFFF80",
  },
  checkBoxText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
    top: -3,
    ...Style.fontMontserratRegular,
  },
})
