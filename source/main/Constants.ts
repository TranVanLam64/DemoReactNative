import config from "../../config";

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
        isLogin: "isLogin"
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
    ]
}