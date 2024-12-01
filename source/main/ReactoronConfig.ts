import Reactotron from "reactotron-react-native"

Reactotron.useReactNative()

Reactotron.configure({ name: "demoApp" }).useReactNative().connect()

const reactotron = Reactotron.configure({ host: "192.168.1.11" }).connect()
export default reactotron
