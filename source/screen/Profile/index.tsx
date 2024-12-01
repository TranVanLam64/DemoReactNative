import React, { ReactElement } from "react"
import { ButtonFull, InputCustom, ProgressRing, ToolBar } from "../../component"
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import config from "../../../config"
import styles from "./styles"
import { Constants, Global, Setting } from "../../main"
import { useNavigation } from "@react-navigation/native"

const Profile = () => {
  const navigation = useNavigation()
  const renderProgressSection = () => {
    return (
      <View style={styles.progressWrapper}>
        <ProgressRing size={64} strokeWidth={10} progress={75} />
        <View style={styles.progressWrapperText}>
          <Text style={styles.progressTitle}>75 % du profil est complété</Text>
          <Text style={styles.progressDesc}>
            Débloque une récompense en complétant ton profil à 100%
          </Text>
        </View>
      </View>
    )
  }

  const inputSection = (
    iconLeft: ImageSourcePropType,
    title: String,
    iconRight: ImageSourcePropType,
    children: ReactElement
  ) => {
    return (
      <View style={styles.inputSection}>
        <View style={styles.inputSectionHeader}>
          <View style={styles.flexRow}>
            <Image style={styles.icon24} source={iconLeft} />
            <Text style={styles.inputSectionTitle}>{title}</Text>
          </View>
          <Image source={iconRight} />
        </View>
        {children}
      </View>
    )
  }

  const sectionInfo = () => {
    return (
      <View>
        <View style={styles.flexRow}>
          <View style={styles.infoLeft}>
            <Text style={styles.infoLeftTitle}>Avatar ou Photo</Text>
            <View style={styles.infoLeftAvatar}>
              <Image
                style={styles.infoLeftImage}
                source={config.Icon.Product.image_user_avatar}
              />
              <TouchableOpacity style={styles.infoLeftEditView}>
                <Image
                  style={styles.icon20}
                  source={config.Icon.Common.image_pencil_white}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flex1}>
            <InputCustom
              label="Nom"
              placeholder="Nom ou Username"
              iconLeft={config.Icon.Common.image_user_black}
            />
            <InputCustom
              label="Inscription"
              placeholder="Date d’inscription"
              iconLeft={config.Icon.Common.image_calendar_black}
            />
          </View>
        </View>
        <InputCustom
          label="Adresse mail"
          placeholder="Adresse@mail.com"
          iconLeft={config.Icon.Login.image_email}
          iconRight={config.Icon.Common.image_pencil_gray}
        />
        <InputCustom
          label="Rue"
          placeholder="Rue"
          iconLeft={config.Icon.Login.image_key}
          iconRight={config.Icon.Common.image_pencil_gray}
          isSecurity={true}
        />
      </View>
    )
  }

  const sectionAddress = () => {
    return (
      <View>
        <InputCustom
          label="Rue"
          placeholder="Rue"
          iconLeft={config.Icon.Common.image_location}
          iconRight={config.Icon.Common.image_pencil_gray}
        />
        <InputCustom
          label="Numéro"
          placeholder="Numéro"
          iconLeft={config.Icon.Common.image_location}
          iconRight={config.Icon.Common.image_pencil_gray}
        />
        <View style={styles.flexRow}>
          <InputCustom
            label="Ville"
            placeholder="Ville"
            iconLeft={config.Icon.Common.image_location}
            iconRight={config.Icon.Common.image_pencil_gray}
            isInputRow={true}
            customStyle={{ marginRight: 16 }}
          />
          <InputCustom
            label="Code postal"
            placeholder="Code postal"
            iconLeft={config.Icon.Common.image_location}
            iconRight={config.Icon.Common.image_pencil_gray}
            isInputRow={true}
          />
        </View>
        <InputCustom
          label="Pays"
          placeholder="France"
          iconLeft={config.Icon.Common.image_flag}
          iconRight={config.Icon.Common.image_arrow_down}
        />
      </View>
    )
  }

  const sectionPayment = () => {
    return (
      <View>
        <InputCustom
          label="Nom du titulaire"
          placeholder="Nom du titulaire"
          iconRight={config.Icon.Common.image_pencil_gray}
          labelStyle={{ color: "#EE2F2F" }}
        />
        <InputCustom
          label="Numéro de carte"
          placeholder="Numéro de carte"
          iconRight={config.Icon.Common.image_pencil_gray}
          labelStyle={{ color: "#EE2F2F" }}
        />
        <View style={styles.flexRow}>
          <InputCustom
            label="Date d’expiration"
            placeholder="Exp."
            iconRight={config.Icon.Common.image_pencil_gray}
            isInputRow={true}
            customStyle={{ marginRight: 16 }}
            labelStyle={{ color: "#EE2F2F" }}
          />
          <InputCustom
            label="Nom du titulaire"
            placeholder="Nom du titulaire"
            iconRight={config.Icon.Common.image_pencil_gray}
            isInputRow={true}
            isSecurity={true}
            labelStyle={{ color: "#EE2F2F" }}
            maxLength={3}
          />
        </View>
      </View>
    )
  }

  const onLogout = () => {
    Global.isLogin = false
    Setting.set(Constants.Event.isLogin, false)
    navigation.navigate(Constants.Screen.Login)
  }

  const sectionButton = () => {
    return (
      <View style={styles.wrapperButton}>
        <ButtonFull
          text="Mettre à jour"
          icon={config.Icon.Common.image_reload}
          isCenter
          isReverse
          onPress={() => {}}
        />
        <View style={styles.lineX}></View>
        <ButtonFull
          text="déconnecter"
          icon={config.Icon.Common.image_logout}
          isCenter
          isReverse
          customStyle={{
            backgroundColor: "#56698F",
          }}
          onPress={onLogout}
        />
      </View>
    )
  }

  return (
    <>
      <ToolBar isProfile={true} />
      <View style={styles.wrapperTitle}>
        <Image
          style={styles.icon20}
          source={config.Icon.Common.image_left_arrow_long}
        />
        <Text style={[styles.textTitle, styles.textTitleGray]}>Mon Compte</Text>
        <Text style={[styles.textTitle, styles.textTitleGray]}>/</Text>
        <Text style={[styles.textTitle, styles.textTitleWhite]}>
          Mes informations
        </Text>
      </View>
      <ScrollView>
        {renderProgressSection()}
        {inputSection(
          config.Icon.Common.image_char,
          "Informations personnelles",
          config.Icon.Common.image_check_badge,
          sectionInfo()
        )}
        {inputSection(
          config.Icon.Common.image_map,
          "Adresse de livraison",
          config.Icon.Common.image_check_badge,
          sectionAddress()
        )}
        {inputSection(
          config.Icon.Common.image_card,
          "Paiement",
          config.Icon.Common.image_warning,
          sectionPayment()
        )}
        {sectionButton()}
      </ScrollView>
    </>
  )
}

export default Profile
