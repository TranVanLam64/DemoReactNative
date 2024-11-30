import { StyleSheet } from "react-native";

export default StyleSheet.create({
    toolBarContainer: {
        alignItems: "center"
    },
    logo: {
        width: 189,
        height: 32
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 12
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerRightText: {
        fontSize: 14, 
        lineHeight: 20,
        fontWeight: "bold",
        color: "#C7577C",
        marginRight: 2
    },
    headerRightCoconut: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconCoconut: {
        width: 24, 
        height: 24
    },
    iconUser: {
        width: 24, 
        height: 24
    },
    lineY: {
        borderColor: "#56698F80",
        height: 16, 
        width: 0,
        borderWidth: 1,
        marginHorizontal: 8
    },
    slideWrapper: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 41
    },
    slideItem: {
        backgroundColor: "#56698F80",
        height: 4,
        flex: 1,
        marginRight: 4,
        borderRadius: 4
    },
    slideActive: {
        backgroundColor: "#4ABF40",
    },
    mr0: {
        marginRight: 0
    },
    titleWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 22,
        lineHeight: 24,
        color: "#fff",
        marginRight: 6,
        fontWeight: "bold"
    },
    titleIcon: {
        width: 24,
        height: 24
    },
    lineX: {
        borderColor: "#FFFFFF1A",
        borderWidth: 1,
        height: 0,
        width: "100%",
        marginTop: 18,
        marginBottom: 6
    }
})