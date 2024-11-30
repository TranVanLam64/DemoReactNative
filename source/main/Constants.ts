import { ImageSourcePropType } from "react-native";
import config from "../../config";

type User = {
    image: ImageSourcePropType,
    name: String,
    location: String,
    status: String
}

export type Product = {
    id: String,
    name: String,
    price: Number,
    isJoin: Boolean,
    dateJoin: String,
    quantityJoin: Number,
    pricePay: Number,
    coconutPointPlus: number,
    coconutPrice: Number,
    coconutPoint: Number,
    image: ImageSourcePropType
    dateRelease: DateRelease,
    userPay: User
}

export enum DateRelease {
    Today = 0, 
    Tomorrow = 1  
}

export default {
    Screen: {
        Login: "Login",
        Term: "Term",
        Dashboard: "Dashboard",
        Home: "Home",
        Story: "Story",
        Payment: "Payment",
        Profile: "Profile"
    },

    TabBar: [
        {
            screen: "Home",
            icon: config.Icon.Common.image_nav_home,
            iconActive: config.Icon.Common.image_nav_home_active
        },
        {
            screen: "Story",
            icon: config.Icon.Common.image_nav_history,
            iconActive: config.Icon.Common.image_nav_history_active
        },
        {
            screen: "Payment",
            icon: config.Icon.Common.image_nav_payment,
            iconActive: config.Icon.Common.image_nav_payment_active
        },
        {
            screen: "Profile",
            icon: config.Icon.Common.image_nav_profile,
            iconActive: config.Icon.Common.image_nav_profile_active
        },
    ],

    Color: {
        AppColor: "#1F2332"
    },

    Event: {
        isLogin: "isLogin",
        goToProfile: "goToProfile"
    },

    AccountMock: {
        email: "admin@gmail.com",
        password: "123456"
    },

    SlideMock: [
        {
            isShowTextImage: true,
            textHero: "Bienvenue sur",
            textSlide: "L’app d’enchère la plus folle !",
            image: config.Icon.Login.image_login
        },
        {
            isShowTextImage: false,
            textHero: "Fais des économies avec nos super offres",
            textSlide: "Retrouve tes produits préférés et des exclusivités que ne trouveras nulle part ailleurs.",
            image: config.Icon.Login.image_login_2
        },
        {
            isShowTextImage: false,
            textHero: "Participe à des enchères de folie",
            textSlide: "Tiens-toi prêt à miser n’importe où, n’importe quand avec des enchères à durée ultra-limitée.",
            image: config.Icon.Login.image_login_3
        }
    ],

    TermMock: [
        "Conditions Générales d’Utilisation",
        "Conditions Générales de Ventes",
        "Politique de Confidentialité"
    ],

    ProductMock: [
        {
            id: "1",
            name: "Manette Playstion 4",
            price: 600,
            isJoin: true,
            dateJoin: "19/03/24",
            quantityJoin: 156,
            pricePay: 2540,
            coconutPointPlus: 15,
            coconutPrice: 6000,
            coconutPoint: 50,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Today,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "2",
            name: "Nintendo Switch",
            price: 130,
            isJoin: false,
            dateJoin: "19/03/24",
            quantityJoin: 123,
            pricePay: 9300,
            coconutPointPlus: 0,
            coconutPrice: 13000,
            coconutPoint: 100,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Today,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "3",
            name: "Sac à main Gucci",
            price: 250,
            isJoin: true,
            dateJoin: "19/03/24",
            quantityJoin: 356,
            pricePay: 11300,
            coconutPointPlus: 10,
            coconutPrice: 25000,
            coconutPoint: 200,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Today,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "4",
            name: "Playstation 4",
            price: 490,
            isJoin: true,
            dateJoin: "19/03/24",
            quantityJoin: 893,
            pricePay: 23670,
            coconutPointPlus: 20,
            coconutPrice: 49000,
            coconutPoint: 500,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Today,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "5",
            name: "Manette Playstion 4",
            price: 600,
            isJoin: true,
            dateJoin: "19/03/24",
            quantityJoin: 156,
            pricePay: 2540,
            coconutPointPlus: 15,
            coconutPrice: 6000,
            coconutPoint: 50,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Tomorrow,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "6",
            name: "Nintendo Switch",
            price: 130,
            isJoin: false,
            dateJoin: "19/03/24",
            quantityJoin: 123,
            pricePay: 9300,
            coconutPointPlus: 0,
            coconutPrice: 13000,
            coconutPoint: 100,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Tomorrow,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "7",
            name: "Sac à main Gucci",
            price: 250,
            isJoin: true,
            dateJoin: "19/03/24",
            quantityJoin: 356,
            pricePay: 11300,
            coconutPointPlus: 10,
            coconutPrice: 25000,
            coconutPoint: 200,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Tomorrow,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        },
        {
            id: "8",
            name: "Playstation 4",
            price: 490,
            isJoin: true,
            dateJoin: "19/03/24",
            quantityJoin: 893,
            pricePay: 25670,
            coconutPointPlus: 20,
            coconutPrice: 49000,
            coconutPoint: 500,
            image: config.Icon.Product.image_product,
            dateRelease: DateRelease.Tomorrow,
            userPay: {
                image: config.Icon.Product.image_user_avatar,
                name: "Jacques la malice",
                location: "Paris",
                status: "Gagnant de l’enchère"
            }
        }
    ] as Product[]
}