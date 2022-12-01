import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  BackgroundImage,
  CustomText,
} from '../../Components';
import {
  NavigationUrl,
  Colors,
  FontFamily,
} from '../../Utils';
import { StringsOfLanguages } from '../../Localization';
import { SplashBg ,logoIdfc} from '../../Assets/Images';
import {
    SplashContainer,
  } from './styled';
  import { TestIds } from "../../Utils/Constants";

const Splash = () => {
    const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate(NavigationUrl.dashboardId)
    }, 1000);
  }, []);
    return (
            <BackgroundImage imageSource={SplashBg}>
                <SplashContainer>
                <Image
                 style={{width: 227, height: 80,marginBottom:22}}
                 source={logoIdfc}
                 testID={TestIds.spl_image}
                />
                
                <CustomText
                 fontFamily={FontFamily.Inter_Light}
                 color={Colors.WHITE}
                 lineHeight={60}
                 letterSpacing={-2}
                 fontSize={48}
                >{StringsOfLanguages.SPLASH.SPLASH_TITLE_1}
                <CustomText
                 fontFamily={FontFamily.INTER_BOLD}
                 color={Colors.WHITE}
                 lineHeight={60}
                 letterSpacing={-2}
                 fontSize={48}
                >
                  {StringsOfLanguages.SPLASH.SPLASH_TITLE_2}
                </CustomText>
                <CustomText
                 fontFamily={FontFamily.Inter_Light}
                 color={Colors.WHITE}
                 lineHeight={60}
                 letterSpacing={-2}
                 fontSize={48}
                >
                  {StringsOfLanguages.SPLASH.SPLASH_TITLE_3}
                </CustomText>
                <CustomText
                 fontFamily={FontFamily.INTER_BOLD}
                 color={Colors.WHITE}
                 lineHeight={60}
                 letterSpacing={-2}
                 fontSize={48}
                >
                  {StringsOfLanguages.SPLASH.SPLASH_TITLE_4}
                </CustomText>
                </CustomText>
                </SplashContainer>
            </BackgroundImage>
           
    )
}
export default Splash;