import React from 'react';
import Home from '../screen/home';
import Home1 from '../screen/home1';
import {useSelector} from 'react-redux';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';
import {createStackNavigator} from 'react-navigation-stack';

// let newStateLanguageType = '';
// useSelector((state) => {
//   const {stateLanguageType} = state.LanguageReducer;
//   newStateLanguageType = stateLanguageType;
//   return {
//     stateLanguageType,
//   };
// });

// let translate;
// if (newStateLanguageType === 'english') {
//   console.log('change to english home 1', newStateLanguageType);
//   translate = english.text;
// } else {
//   console.log('change to german home 1', newStateLanguageType);
//   translate = german.text;
// }
const screen = {
  // AboutCars: {
  //   screen: About,
  //   navigationOptions: ({navigation}) => {
  //     return {
  //       headerTitle: () => <CarHeader navigation={navigation} title="NEWS" />,
  //     };
  //   },
  // },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home1: {
    screen: Home1,
    navigationOptions: {
      headerShown: false,
      title: 'HOME ONE',
    },
  },
};

const HomeStack = createStackNavigator(screen);
export default HomeStack;
