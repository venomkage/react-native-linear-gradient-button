# React Native Linear Gradient Button

This package is built upon react-native-linear-gradient. So if any error occurs then make sure react-native-linear-gradient is installed properly.

- Installing this package requires [react-native-linear-gradient]('https://www.npmjs.com/package/react-native-linear-gradient') to be installed already.

- For ios, don't forget to run pod install inside ios folder

- Enter the param values and enjoy.

# Example

```
//importing the GradientButton
import GradientButton from 'react-native-linear-gradient-button';

const App = () => {
  return (
      <GradientButton
        text={'Press Me'}
        onPress={() => console.log('Pressed')}
        color1="Black"
        color2={'white'}
        fontSize={15}
        fontFamily={'Roboto'}
      />
  );
};

```

![Example Image](/example.png)
