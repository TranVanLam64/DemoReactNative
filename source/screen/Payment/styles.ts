import { StyleSheet } from "react-native"
import Style from "../../common/Style"

export default StyleSheet.create({
  wrapperButtonHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  buttonHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C7577C",
    paddingVertical: 16,
    minWidth: 136,
    justifyContent: "center",
    borderRadius: 6,
    marginRight: 8,
  },
  buttonHeaderLeftText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    marginRight: 8,
    ...Style.fontMontserratBold
  },
  buttonHeaderIcon: {
    width: 24,
    height: 24,
  },
  buttonHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    flex: 1,
    borderRadius: 6,
    justifyContent: "center",
  },
  buttonHeaderRightText: {
    color: "#1F2332",
    fontSize: 16,
    lineHeight: 20,
    marginRight: 8,
    ...Style.fontMontserratBold
  },
  containerPayment: {
    borderRadius: 24,
    overflow: "hidden",
  },
  containerPaymentTop: {
    backgroundColor: "#3C4868",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  paymentTopImage: {
    width: 128,
    height: 128
  },
  containerPaymentBottom: {
    backgroundColor: "#2F374B",
    alignItems: "center",
    padding: 16
},
paymentBottomTitle: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 12,
    ...Style.fontMontserratBold
  },
  paymentBottomDesc: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
    marginHorizontal: 8,
    marginBottom: 24,
    ...Style.fontMontserratRegular
  },
  wrapperPoint: {
    backgroundColor: "#FFFFFF33",
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginBottom: 16
  },
  wrapperTextIcon: {
    flexDirection: "row",
    alignItems: "center",
},
pointCoconut: {
    color: "#FFFFFF",
    fontSize: 28,
    lineHeight: 32,
    marginRight: 8,
    ...Style.fontMontserratBold
  },
  icon32: {
    width: 32,
    height: 32
  },
  pointPlusCoconut: {
    color: "#FFFFFF80",
    fontSize: 12,
    lineHeight: 16,
    marginRight: 4,
    ...Style.fontMontserratBold
  },
  icon16: {
    width: 16,
    height: 16
  },
  wrapperQuantity: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  buttonQuantity: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 6,
    flex: 1
},
buttonQuantityText: {
    color: "#1F2332",
    fontSize: 28, 
    lineHeight: 32,
    ...Style.fontMontserratBold
  },
  wrapperQuantityValue: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    flex: 1
},
wrapperQuantityValueText: {
    color: "#fff",
    fontSize: 28, 
    lineHeight: 32,
    marginRight: 8,
    ...Style.fontMontserratBold
  },
  wrapperButtonSubmit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#4ABF40",
    borderRadius: 6,
    paddingVertical: 16
  },
  buttonSubmitText: {
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
