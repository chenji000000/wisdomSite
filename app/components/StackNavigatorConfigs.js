import {Animated, Easing} from 'react-native';


const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    headerMode: 'none',
    transitionConfig: () => (
      {
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(3)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const {layout, position, scene} = sceneProps;
          const {index} = scene;
          const Width = layout.initWidth;
          //沿X轴平移
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Width, 0, -(Width - 10)],
          });
          //透明度
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
          return {opacity, transform: [{translateX}]};
        },
      }
    ),
  };

  export default StackNavigatorConfigs; 