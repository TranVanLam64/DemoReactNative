import { StyleSheet } from "react-native"
import Style from "../../common/Style"

export default StyleSheet.create({
  wrapperTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
  },
  icon20: {
    width: 20,
    height: 20,
  },
  textTitle: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 4,
    ...Style.fontMontserratBold,
  },
  textTitleGray: {
    color: "#56698F",
  },
  textTitleWhite: {
    color: "#fff",
  },
  progressWrapper: {
    backgroundColor: "#2F374B",
    borderRadius: 6,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
  },
  progressWrapperText: {
    marginLeft: 16,
    flex: 1,
  },
  progressTitle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 6,
    ...Style.fontMontserratBold,
  },
  progressDesc: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
    ...Style.fontMontserratRegular,
  },
  icon24: {
    width: 24,
    height: 24,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoLeft: {
    marginRight: 16,
  },
  infoLeftTitle: {
    fontSize: 10,
    lineHeight: 12,
    color: "#fff",
    marginBottom: 10,
    ...Style.fontMontserratBold,
  },
  infoLeftAvatar: {
    width: 108,
    height: 108,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  infoLeftImage: {
    width: "100%",
    height: "100%",
    left: -1,
  },
  infoLeftEditView: {
    position: "absolute",
    width: 36,
    height: 36,
    backgroundColor: "#56698F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    top: -2,
    right: -2,
  },
  flex1: {
    flex: 1,
  },
  inputSection: {
    padding: 16,
    backgroundColor: "#2F374B",
    borderRadius: 6,
    marginTop: 6,
  },
  inputSectionHeader: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputSectionTitle: {
    fontSize: 18,
    lineHeight: 20,
    color: "#fff",
    marginLeft: 8,
    ...Style.fontMontserratBold,
  },
  wrapperButton: {
    marginTop: 24,
  },
  lineX: {
    height: 0,
    width: "100%",
    borderWidth: 2,
    borderColor: "#FFFFFF1A",
    borderRadius: 4,
    marginVertical: 16,
  },
})
