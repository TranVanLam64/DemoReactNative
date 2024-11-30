import { ResourceConfig } from "../source/main/type"

const config: ResourceConfig = {
    Icon: {
        Common: {
            logo_app: require("./image/logo_app.png"),
            image_coconut: require("./image/coconut.png"),
            image_home: require("./image/icon_home.png"),
            image_user: require("./image/user-circle.png"),
            image_nav_home: require("./image/Nav-bid.png"),
            image_nav_home_active: require("./image/Nav-bid-active.png"),
            image_nav_history: require("./image/Nav-history.png"),
            image_nav_history_active: require("./image/Nav-history-active.png"),
            image_nav_payment: require("./image//Nav-shop.png"),
            image_nav_payment_active: require("./image/Nav-shop-active.png"),
            image_nav_profile: require("./image/Nav-sccount.png"),
            image_nav_profile_active: require("./image/Nav-sccount-active.png")
        },
        Login: {
            image_login: require("./image/image-intro.png"),
            image_login_2: require("./image/image-login-2.png"),
            image_login_3: require("./image/image-login-3.png"),
            image_hero: require("./image/hero-image.png"),
            image_google: require("./image/google.png"),
            image_email: require("./image/email.png"),
            image_key: require("./image/key.png"),
            image_eye: require("./image/eye-slash.png"),
            image_arrow_left: require("./image/arrow-uturn-left.png"),
            image_arrow_right: require("./image/arrow-right.png"),
            image_arrow_right_disable: require("./image/arrow-right-disable.png"),
        },
        Term: {
            image_term: require("./image/image-term.png"),
            image_check: require("./image/check.png"),
        }
    }
}

export default config