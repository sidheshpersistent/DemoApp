/* eslint-disable max-len */
import React from 'react';
import {IconSize} from '@idfc/ccl-commons/enums';
import {render, withConsoleErrorSpy, withConsoleWarnSpy} from '../../../test/test-utils';

import Icon from './Icon';

describe('icon', () => {
  it('should render the icon', () => {
    const container = render(<Icon name="Bag" />);

    expect(container).toMatchSnapshot();
  });

  it('should render the icon with primaryColor and accentColor', () => {
    const container = render(<Icon name="Bag" primaryColor="black" accentColor="red" />);

    expect(container).toMatchSnapshot();
  });

  it('should throw error when name prop is missing', () => {
    withConsoleErrorSpy(2)(() => {
      expect(() => {
        render(<Icon />);
      }).toThrow('Whoops! missing name prop.');
    });
  });

  it('renders primary icon when given name has primary suffix and also has the accentColor prop', () => {
    const iconName = 'OthersPrimary';
    const accentColor = 'maroon';
    const container = render(<Icon name={iconName} accentColor={accentColor} />);
    expect(container).toMatchSnapshot();
  });

  it('renders defaultPlaceholderIcon with console error when given name has primary suffix and not having the accentColor prop', () => {
    withConsoleWarnSpy(1)(() => {
      const iconName = 'OthersPrimary';
      const {toJSON, getByTestId} = render(<Icon name={iconName} />);
      expect(getByTestId('placeHolderIconText')).toHaveTextContent('?');
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('renders regular icon when primary icon is not found with given name and it ignores the accentColor prop', () => {
    const iconName = 'Plus';
    const accentColor = 'red';
    const container = render(<Icon name={iconName} accentColor={accentColor} />);
    expect(container).toMatchSnapshot();
  });

  it('@deprecated(variant) - renders regular icon when primary icon is not found with given name when it ignores the given variant', () => {
    const iconName = 'Plus';
    const iconVariant = 'primary';
    const container = render(<Icon name={iconName} variant={iconVariant} />);
    expect(container).toMatchSnapshot();
  });

  it('renders with different sizes', () => {
    const small = render(<Icon name="Bag" size={IconSize.SMALL} />);
    const medium = render(<Icon name="Bag" size={IconSize.MEDIUM} />);
    const normal = render(<Icon name="Bag" size={IconSize.NORMAL} />);
    const large = render(<Icon name="Bag" size={IconSize.LARGE} />);
    const jumbo = render(<Icon name="Bag" size={IconSize.JUMBO} />);

    expect(small).toMatchSnapshot();
    expect(medium).toMatchSnapshot();
    expect(normal).toMatchSnapshot();
    expect(large).toMatchSnapshot();
    expect(jumbo).toMatchSnapshot();
  });

  it('render the icon with given color when noTheme is set to true', () => {
    const icon = render(<Icon name="Bag" primaryColor="gray" accentColor="yellow" />);
    expect(icon).toMatchSnapshot();
  });

  it('@deprecated prop(variant) - renders defaultPlaceholderIcon with console error when incorrect variant prop is passed', () => {
    withConsoleErrorSpy(1)(() => {
      const iconName = 'Bag';
      const variantName = 'Abcd';
      const {toJSON, getByTestId} = render(<Icon name={iconName} variant={variantName} />);
      expect(getByTestId('placeHolderIconText')).toHaveTextContent('?');
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('render the icon with iconStyle prop', () => {
    const container = render(<Icon name="Bag" testID="Icon-Bag" iconStyle={{marginLeft: 10}} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the icon with given accessibilityLabel', () => {
    const name = 'Bag';
    const container = render(<Icon name={name} accessibilityLabel={`Money ${name}`} useAccessibilityLabel />);
    const {getByA11yLabel, getByTestId} = container;
    const IconBag = getByA11yLabel(`Money ${name}`);
    const MoneyBag = getByTestId(`Icon${name}`);

    expect(IconBag).toBeDefined();
    expect(MoneyBag).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
