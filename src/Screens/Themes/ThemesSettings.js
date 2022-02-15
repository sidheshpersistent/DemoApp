import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@idfc/ccl-mobile';
import useThemes from '@optimus/themes/useThemes';
import Labels from 'translations/settingsScreen/labels';
import patternsHOC from 'helpers/patterns/patternsHOC';
import { ThemeContainer, StyledSafeAreaView, LabelText } from './ThemesSettings.style';
import ThemesOptions from './ThemesOptions';

const ThemesSettings = () => {
  const navigation = useNavigation();
  const { selectedThemeName, setSelectedThemeName } = useThemes();
  const [selectedThemeOption, setSelectedThemeOption] = useState(selectedThemeName);

  const onThemeChange = selectedItem => {
    setSelectedThemeOption(selectedItem);
  };

  const onApplyTheme = () => {
    setSelectedThemeName(selectedThemeOption);
    navigation.goBack();
  };

  return (
    <StyledSafeAreaView>
      <ThemeContainer>
        <LabelText fontSize={16} lineHeight={24} color="grey500" align="center">
          {Labels.SWITCH_THEME_LABEL}
        </LabelText>
        <ThemesOptions selectedThemeOption={selectedThemeOption} onThemeChange={onThemeChange} />
      </ThemeContainer>
      <Button testID="themeChange" title={Labels.SAVE} onPress={onApplyTheme} />
    </StyledSafeAreaView>
  );
};

export default patternsHOC({ Component: ThemesSettings });
