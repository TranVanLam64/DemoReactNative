import { StyleSheet } from "react-native"

export default StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    marginVertical: 6,
    marginHorizontal: 6,
    width: "100%",
    maxHeight: 50,
    overflow: "hidden",
  },
  titleText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 6,
  },
  titleIcon: {
    width: 24,
    height: 24,
  },
  productItem: {
    borderRadius: 24,
    borderWidth: 4,
    // borderColor: "#56698F",
    backgroundColor: "#3C4868",
    overflow: "hidden",
    alignItems: "center",
  },
  productDesc: {
    paddingHorizontal: 4,
    paddingBottom: 4,
    width: "100%",
    alignItems: "center",
  },
  statusText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 8,
  },
  wrapperPrice: {
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#FFFFFF33",
    borderRadius: 6,
    width: "100%",
  },
  priceShopText: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  priceText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
  },
  priceCoconutWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceCoconutText: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "bold",
    color: "#FFFFFF80",
    marginRight: 2,
  },
  priceCoconutIcon: {
    width: 12,
    height: 12,
  },
  pointCoconutWrapper: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 999,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 8,
  },
  pointCoconutText: {
    fontSize: 10,
    lineHeight: 12,
    color: "#1F2332",
    fontWeight: "bold",
  },
  pointWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#C7577C",
  },
  pointText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  pointIcon: {
    width: 16,
    height: 16,
  },
  wrapperGray: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF33",
    borderRadius: 6,
    flexDirection: "row",
    marginTop: 8,
  },
  wrapperGrayIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  isJoinWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  isJoinDot: {
    width: 6,
    height: 6,
    borderRadius: 99,
    backgroundColor: "#EE2F2F",
    marginLeft: 4,
  },
  isJoinDotActive: {
    backgroundColor: "#33B454",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  mr8: {
    marginRight: 8,
  },
  flex1: {
    flex: 1,
  },
  w100: {
    width: "100%",
  },
  between: {
    justifyContent: "space-between",
  },
  mw70: {
    minWidth: 65,
  },
  wrapperPricePay: {
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF33",
    borderRadius: 6,
    marginTop: 8,
    width: "100%",
  },
  wrapperPricePayCoconut: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperUserStatus: {
    position: "absolute",
    backgroundColor: "#00000080",
    width: "100%",
    padding: 4,
    paddingBottom: 8
  },
  wrapperUserInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F2332",
    borderRadius: 99,
    padding: 2,
  },
  userAvatar: { width: 24, height: 24, marginRight: 4 },
  userLocation: {
    fontSize: 10,
    lineHeight: 12,
    color: "#ABB7CE",
  },
  userStatusPay: {
    fontSize: 10, lineHeight: 12,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 4
  }
})
