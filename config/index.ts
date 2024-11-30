import { ResourceConfig } from "../source/main/type"

const config: ResourceConfig = {
    Icon: {
        Common: {
            logo_app: require("./image/logo_app.png"),
            image_coconut: require("./image/coconut.png"),
            image_coconut_gray: require("./image/coconut-gray.png"),
            image_coconut_white: require("./image/coconut-white.png"),
            image_coconut_black: require("./image/coconut-black.png"),
            image_home: require("./image/icon_home.png"),
            image_history: require("./image/image-history.png"),
            image_user: require("./image/user-circle.png"),
            image_nav_home: require("./image/Nav-bid.png"),
            image_nav_home_active: require("./image/Nav-bid-active.png"),
            image_nav_history: require("./image/Nav-history.png"),
            image_nav_history_active: require("./image/Nav-history-active.png"),
            image_nav_payment: require("./image//Nav-shop.png"),
            image_nav_payment_active: require("./image/Nav-shop-active.png"),
            image_nav_profile: require("./image/Nav-sccount.png"),
            image_nav_profile_active: require("./image/Nav-sccount-active.png"),
            image_currency_euro: require("./image/currency-euro.png"),
            image_bank_note: require("./image/banknotes.png"),
            image_setting: require("./image/cog-6-tooth.png"),
            image_left_arrow_long: require("./image/arrow-long-left.png")
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
        },
        Product: {
            image_product: require("./image/image-product.png"),
            image_calendar: require("./image/calendar-days.png"),
            image_calendar_fill: require("./image/calendar-days-fill.png"),
            image_hamer_fill: require("./image/hamer-fill.png"),
            image_user_avatar: require("./image/user-avatar.png")
        }
    }
}

export default config