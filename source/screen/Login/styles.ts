import { StyleSheet } from "react-native"
import Style from "../../common/Style"

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 85,
    paddingHorizontal: 32,
  },
  loginImage: {
    width: 256,
    height: 256,
    alignSelf: "center"
  },
  loginHeroText: {
    marginBottom: 48,
    marginTop: 24,
  },
  textHero: {
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 44,
    fontWeight: "bold"
  },
  imageHero: {
    width: 320,
    height: 36,
  },
  containerButton: {
    alignItems: "center",
  },
  buttonLogin: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 275,
    justifyContent: "center",
  },
  iconButtonLogin: {
    marginRight: 8,
    width: 24,
    height: 24,
  },
  textButtonLogin: {
    fontSize: 18,
    lineHeight: 21.83,
  },
  line: {
    width: 128,
    height: 0,
    borderWidth: 2,
    borderColor: "rgba(255,255,255, 0.3)",
    marginVertical: 24,
  },
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    width: "100%",
  },
  inputView: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: "#56698F33",
    borderRadius: 8,
  },
  iconInput: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  labelInput: {
    fontSize: 10,
    lineHeight: 12,
    color: "#fff",
    marginBottom: 8,
    ...Style.fontMontserratBold
  },
  mb24: {
    marginBottom: 24
  },
  textInput: {
    fontSize: 12,
    lineHeight: 16,
    width: "100%",
    flex: 1,
    ...Style.fontMontserratRegular
  },
  buttonLoginEmailContainer: {
    marginTop: 44,
    flexDirection: "row"
  },
  buttonBack: {
    width: 56,
    height: 56,
    backgroundColor: "#56698F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  iconBack: {
    width: 24,
    height: 24
  },
  buttonSubmit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4ABF40",
    borderRadius: 8,
    flex: 1
  },
  buttonSubmitDisable: {
    backgroundColor: "#56698F1A"
  },
  textButtonSubmit: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    marginRight: 8,
    ...Style.fontMontserratBold
  },
  textButtonSubmitDisable: {
    color: "#56698F80"
  },
  containerPagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "flex-end"
  },
  dotWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  dot: {
    backgroundColor: "#56698F",
    width: 12,
    height: 12,
    borderRadius: "50%",
    marginRight: 16,
  },
  mr0: {
    marginRight: 0
  },
  dotActive: {
    backgroundColor: "white"
  },
  buttonNext: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4ABF40",
    width: 56,
    height: 56,
    borderRadius: 8
  },
  buttonBackSlide: {
    width: 56,
    height: 56,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  textSlide: {
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
    ...Style.fontMontserratRegular
  }
})
