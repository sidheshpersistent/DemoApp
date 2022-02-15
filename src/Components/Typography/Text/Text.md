| Old(Deprecated) | New                                                       |
| --------------- | --------------------------------------------------------- |
| LargeHeading    | `<Text as="h1">Sample Text</Text>`                        |
| Heading         | `<Text as="h2">Sample Text</Text>`                        |
| Subheading      | `<Text as="h3">Sample Text</Text>`                        |
| Big             | `<Text fontSize={64}>Sample Text</Text>`                  |
| Paragraph       | `<Text lineHeight={20}>Sample Text</Text>`                |
| Title           | `<Text fontSize={20}><Strong>Sample Text</Strong></Text>` |
| Small           | `<Text fontSize={12} lineHeight={20}>Sample Text</Text>`  |
| Supersmall      | `<Text fontSize={10}>Sample Text</Text>`                  |

Text Without props

```jsx
<Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
```

Text With `color` props

```jsx
<Text color="red">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
```

Text With `Strong` Component

```jsx
import Strong from '../Strong';
<Text>
  Lorem Ipsum is <Strong>simply dummy</Strong> text of the printing and typesetting industry.
</Text>;
```

Text with different `as` (Heading) props

```jsx
<Text as="h1" >
  Lorem Ipsum is simply dummy text.
</Text>
<Text as="h2" >
  Lorem Ipsum is simply dummy text.
</Text>
<Text as="h3" >
  Lorem Ipsum is simply dummy text.
</Text>
```

Text with different `as` (Heading) and fontSize props

```jsx
<Text as="h1" fontSize={20}>
  Lorem Ipsum is simply dummy text.
</Text>
```

Text with different `align` prop.

```jsx
<Text align="left">Sample Text - left aligned (default)</Text>
<br />
<Text align="center">Sample Text - center aligned</Text>
<br />
<Text align="right">Sample Text - right aligned</Text>
```

Text with different `fontSize` prop.

```jsx
<Text fontSize={64}>Sample Text - 64px</Text>
<Text fontSize={36}>Sample Text - 36px</Text>
<Text fontSize={26}>Sample Text - 26px</Text>
<Text fontSize={24}>Sample Text - 24px</Text>
<Text fontSize={20}>Sample Text - 20px</Text>
<Text fontSize={16}>Sample Text - 16px</Text>
<Text fontSize={14}>Sample Text - 14px</Text>
<Text fontSize={12}>Sample Text - 12px</Text>
<Text fontSize={10}>Sample Text - 10px</Text>
```

Text With `padding` prop

```jsx
<Text color="red" paddingLeft={20}>This will have paddingLeft of 20</Text>
<Text color="red" paddingRight={20}>This will have paddingRight of 20</Text>
<Text color="red" paddingHorizontal={20}>This will have paddingHorizontal of 20</Text>
```

Text With `margin` prop

```jsx
<Text color="red" marginTop={10}>This will have marginTop of 10</Text>
<Text color="red" marginBottom={10}>This will have marginBottom of 10</Text>
<Text color="red" marginVertical={10}>This will have marginVertical of 10</Text>
```

Text with custom style and `as` prop.

```jsx
import styled from 'styled-components';

const FancyText = styled(Text)`
  color: #f00;
`;
<FancyText as="h1">Sample Text</FancyText>;
```
