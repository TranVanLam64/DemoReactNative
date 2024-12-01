import { StyleSheet } from "react-native"
import Style from "../../common/Style"

export default StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 10,
    lineHeight: 12,
    color: "#fff",
    marginBottom: 6,
    ...Style.fontMontserratBold,
  },
  inputView: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#56698F33",
    width: "100%",
  },
  inputText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
    marginHorizontal: 8,
    textAlignVertical: "center",
    ...Style.fontMontserratRegular,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon20: {
    width: 20,
    height: 20,
  },
})
