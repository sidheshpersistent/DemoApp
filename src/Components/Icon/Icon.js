/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components/native';
import {IconSize} from '@idfc/ccl-commons/enums';
import * as ICONS from '@idfc/ccl-commons/assets/icons';

import {DEFAULT_ICON_SIZE, DEFAULT_ICON_VARIANT} from '@idfc/ccl-commons/constants';
import Text from '../Typography/Text';
import {IconCategory, ICON_VARIANTS, ICON_COLOR_TO_PALETTE_COLOR, DISABLED_ICON_COLOR} from './Icon.constants';

import {PlaceHolderWrapper} from './Icon.style';

const displayPlaceHolderIcon = (msg, iconSize = DEFAULT_ICON_SIZE) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(msg);
  }
  return (
    <PlaceHolderWrapper iconSize={iconSize}>
      <Text testID="placeHolderIconText" color="grey200" fontSize={16}>
        ?
      </Text>
    </PlaceHolderWrapper>
  );
};

const Icon = ({name, size, primaryColor, accentColor, disabled, disabledColor, iconStyle, useAccessibilityLabel, theme, ...restProps}) => {
  if (!name) {
    return displayPlaceHolderIcon('Whoops! missing name prop.', size);
  }
  const variant = restProps.variant || primaryColor || DEFAULT_ICON_VARIANT;

  // eslint-disable-next-line react/prop-types
  const themeAccentColor = theme?.Icon?.iconVariantToVariant?.[accentColor];
  let iconAccentColor = accentColor ? ICON_COLOR_TO_PALETTE_COLOR[themeAccentColor || accentColor] : undefined;
  const nameHasPrimarySuffix = name.indexOf(IconCategory.PRIMARY) !== -1;

  let ComponentName = ICONS[name];

  if ((variant && variant === ICON_VARIANTS.primary) || iconAccentColor) {
    if (!nameHasPrimarySuffix) {
      ComponentName = ICONS[`${name + IconCategory.PRIMARY}`] || ComponentName;
    }
  } else if (nameHasPrimarySuffix) {
    return displayPlaceHolderIcon(`Icon '${name}' is not allowed. If you are looking for a primary icon, use "accentColor" prop`, size);
  }

  if (!ComponentName) {
    return displayPlaceHolderIcon(`Icon '${name}' does not exist. You are probably using an incorrect name`, size);
  }

  if (!(variant in ICON_VARIANTS)) {
    return displayPlaceHolderIcon(
      `Icon variant '${variant}' does not exist for icon '${name}'.
        Choose different variant prop (available options:
        ${Object.keys(ICON_VARIANTS)
          .map((variantName) => `'${variantName}'`)
          .join(', ')})`,
      size,
    );
  }
  const themePrimaryColor = theme?.Icon?.iconVariantToVariant?.[primaryColor];
  const themeVariantColor = theme?.Icon?.iconVariantToVariant?.[variant];
  // eslint-disable-next-line react/prop-types
  let iconColor = ICON_COLOR_TO_PALETTE_COLOR[themePrimaryColor || primaryColor] || ICON_COLOR_TO_PALETTE_COLOR[themeVariantColor || variant] || ICON_COLOR_TO_PALETTE_COLOR.gray;

  const iconSize = size || DEFAULT_ICON_SIZE;
  const disabledIconColor = ICON_COLOR_TO_PALETTE_COLOR[disabledColor];

  if (disabled) {
    iconColor = disabledIconColor;
    iconAccentColor = disabledIconColor;
  }
  return (
    <ComponentName
      testID={restProps.testID || `Icon${name}`}
      data-icon-variant={variant}
      width={iconSize}
      height={iconSize}
      style={{fill: iconColor, ...iconStyle}}
      accessibilityLabel={useAccessibilityLabel ? restProps.accessibilityLabel : restProps.title || name}
      primaryColor={iconColor}
      accentColor={iconAccentColor || iconColor}
      role="img"
    />
  );
};

Icon.propTypes = {
  /** Renders the icon as per name value */
  name: PropTypes.string.isRequired,

  /** Changes the size of icon provided by value: small, normal, large, jumbo */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(Object.values(IconSize))]),

  /** Changes the primary color of icon provided by value: gray, maroon, green, red, yellow, white, black, gold, goldLight, blue */
  primaryColor: PropTypes.oneOf([...Object.values(ICON_VARIANTS), 'maroonLight']),

  /** Changes the accent color of icon provided by value: gray, maroon, green, red, yellow, white, black, gold, goldLight, blue */
  accentColor: PropTypes.oneOf(Object.values(ICON_VARIANTS)),

  /** Sets the color of the icon
   * @ignore
   * @deprecated
   */
  variant: PropTypes.oneOf(Object.values(ICON_VARIANTS)),

  /**
   * Descriptive text to communicate icon meaning to screen readers. Use it for standalone decorative icons.
   */
  title: PropTypes.string,

  /**
   * When true, apply lightGray color
   */
  disabled: PropTypes.bool,

  /** Changes the disabled color of icon provided by value: gray, maroon, green, red, yellow, white, black, gold, goldLight, blue */
  disabledColor: PropTypes.string,

  /**
   * Custom styling for icons to adjust the spacing
   */
  iconStyle: PropTypes.shape(),

  useAccessibilityLabel: PropTypes.bool,
  theme: PropTypes.shape({}).isRequired,
};

Icon.defaultProps = {
  size: DEFAULT_ICON_SIZE,
  variant: DEFAULT_ICON_VARIANT,
  title: undefined,
  primaryColor: undefined,
  accentColor: undefined,
  disabled: false,
  disabledColor: DISABLED_ICON_COLOR,
  iconStyle: undefined,
  useAccessibilityLabel: false,
};

/** @component */
export default withTheme(Icon);
