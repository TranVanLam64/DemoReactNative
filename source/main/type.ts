import { ImageSourcePropType } from "react-native"

export interface ResourceConfig {
    Icon: {
        Common: {
            logo_app: ImageSourcePropType
            image_coconut: ImageSourcePropType
            image_home: ImageSourcePropType
            image_user: ImageSourcePropType
            image_nav_home: ImageSourcePropType
            image_nav_home_active: ImageSourcePropType
            image_nav_history: ImageSourcePropType
            image_nav_history_active: ImageSourcePropType
            image_nav_payment: ImageSourcePropType
            image_nav_payment_active: ImageSourcePropType
            image_nav_profile: ImageSourcePropType
            image_nav_profile_active: ImageSourcePropType
        }
        Login: {
            image_login: ImageSourcePropType
            image_login_2: ImageSourcePropType
            image_login_3: ImageSourcePropType
            image_hero: ImageSourcePropType
            image_google: ImageSourcePropType
            image_email: ImageSourcePropType
            image_key: ImageSourcePropType
            image_eye: ImageSourcePropType
            image_arrow_left: ImageSourcePropType
            image_arrow_right: ImageSourcePropType
            image_arrow_right_disable: ImageSourcePropType
        }
        Term: {
            image_term: ImageSourcePropType
            image_check: ImageSourcePropType
        }
    }
}

