```js
import {View} from 'react-native';

<div>
  <Button buttonType="primary" title="Primary Button with longer text and more text" onPress={() => console.warn('Button pressed!')} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="secondary" title="Secondary Button" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="secondary" title="Secondary with noBorder" noBorder onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="primary" title="Primary disabled" disabled onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="secondary" title="Secondary disabled" disabled onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button iconName="Send" title="Primary Icon" buttonType="primary" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button iconName="Send" title="Secondary Icon" buttonType="secondary" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button iconName="Send" title="Disabled Icon" buttonType="secondary" disabled onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="primary" width="320" title="Button with custom width" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="secondary" width="100" title="Button" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="primary" width="80%" title="Button with custom width 80%" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button buttonType="primary" width="25%" title="25%" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button iconName="Send" isRounded={false} size="large" title="Large Disabled Button With Icon" buttonType="secondary" disabled onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button iconName="Send" isRounded={false} size="large" title="Large Secondary Button With Icon" buttonType="secondary" onPress={() => {}} />
  <View style={{paddingVertical: 10}} />
  <Button iconName="Send" isRounded={false} size="large" title="Large Primary Button With Icon" onPress={() => {}} />
</div>;
```
