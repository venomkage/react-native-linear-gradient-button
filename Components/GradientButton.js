import React from 'react';
import {TouchableOpacity, Dimensions, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;

export const GradientButton = ({
  text,
  fontSize,
  fontFamily,
  style,
  onPress,
  color1,
  color2,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: width / 1.5,
          height: 51,
          backgroundColor: 'yellow',
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: -1}}
        colors={[color1.toLowerCase(), color2.toLowerCase()]}
        style={{
          flex: 1,
          width: '100%',
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          allowFontScaling={false}
          style={{
            color: 'white',
            fontSize: fontSize,
            fontFamily,
          }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
