### Default

With default primaryColor and size.

```jsx
import {Fragment} from 'react';

<Fragment>
  <Icon name="Bag" />
  <Icon name="BagFilled" />
  <Icon name="BagFilled" iconStyle={{marginLeft: 10}} />
</Fragment>;
```

### Accessibility

For standalone decorative icons, provide a context rich title for screen reader accessibility.

```jsx

<Icon name="Bag" title="Saving" />
```

### Color

Changes the fill color of the icon, with `primaryColor` prop (default is 'gray')

```jsx
import {IconColor} from '@idfc/ccl-commons/enums';

<div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '200px'}}>
  <Icon name="Bag" />
  <Icon name="Bag" primaryColor={IconColor.RED} />
  <Icon name="Bag" primaryColor={IconColor.MAROON} />
  <Icon name="Bag" primaryColor={IconColor.BLACK} />
  <Icon name="Bag" primaryColor={IconColor.GREEN} />
  <Icon name="Bag" primaryColor={IconColor.BLUE} />
</div>;
```

### Color

Changes the fill color of the icon, with `accentColor` prop

```jsx
import {Fragment} from 'react';
import {IconColor} from '@idfc/ccl-commons/enums';

<Fragment>
  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '200px'}}>
    <Icon name="Camera" accentColor={IconColor.RED} />
    <Icon name="Camera" accentColor={IconColor.MAROON} />
    <Icon name="Camera" accentColor={IconColor.BLACK} />
    <Icon name="Camera" accentColor={IconColor.GREEN} />
    <Icon name="Camera" accentColor={IconColor.YELLOW} />
    <Icon name="Camera" accentColor={IconColor.BLUE} />
  </div>
  <br />
  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '200px'}}>
    <Icon name="LineChart" accentColor={IconColor.RED} />
    <Icon name="LineChart" accentColor={IconColor.MAROON} />
    <Icon name="LineChart" accentColor={IconColor.BLACK} />
    <Icon name="LineChart" accentColor={IconColor.GREEN} />
    <Icon name="LineChart" accentColor={IconColor.YELLOW} />
    <Icon name="LineChart" accentColor={IconColor.BLUE} />
  </div>
</Fragment>;
```

### Size

Icons come in five standard sizes: small, medium, normal (default), large, and jumbo (use the exported `IconSize` enum for that).

```jsx
import {IconColor, IconSize} from '@idfc/ccl-commons/enums';

<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    width: '300px',
  }}>
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.TINY} />
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.SUPERSMALL} />
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.SMALL} />
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.MEDIUM} />
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.NORMAL} />
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.LARGE} />
  <Icon name="BagFilled" primaryColor={IconColor.MAROON} size={IconSize.JUMBO} />
</div>;
```

```jsx
import {Text} from '../Typography';

import {IconSize} from '@idfc/ccl-commons/enums';
import {white} from '@idfc/ccl-commons/palette';

<table style={{width: '300px'}}>
  <tr>
    <th>
      <Text as="h3">Sizes</Text>
    </th>
    <th>
      <Text as="h3">Values</Text>
    </th>
  </tr>
  <tbody>
    {Object.keys(IconSize).map((size) => (
      <tr key={size}>
        <td>
          <Text as="span">{size}</Text>
        </td>
        <td>
          <Text as="span">{IconSize[size]}</Text>
        </td>
      </tr>
    ))}
  </tbody>
</table>;
```

### Color

Changes the fill color of the icon, with `primaryColor` prop (default is 'gray')

```jsx
import {IconColor} from '@idfc/ccl-commons/enums';

<div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '200px'}}>
  <Icon name="Redo" disabled />
  <Icon name="LineChart" disabled />
  <Icon name="Mobile" disabled />
  <Icon name="Bag" disabled />
  <Icon name="BagFilled" disabled />
  <Icon name="Camera" primaryColor={IconColor.BLUE} disabled />
</div>;
```
