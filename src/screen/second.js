import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';
import Header from '../shared/header';
import PropsType from 'prop-types';

const Second = (props) => {
  let newStateLanguageType = '';
  useSelector((state) => {
    const {stateLanguageType} = state.LanguageReducer;
    newStateLanguageType = stateLanguageType;
    return {
      stateLanguageType,
    };
  });

  let translate;
  if (newStateLanguageType === 'english') {
    console.log('change to english', newStateLanguageType);
    translate = english.text;
  } else {
    console.log('change to german', newStateLanguageType);
    translate = german.text;
  }

  return (
    <View>
      <Header
        parentProps={props}
        navigation={props.navigation}
        newstateLanguageType={newStateLanguageType}
        title={translate.second}
      />
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'lightblue',
          padding: 10,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            paddingTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {translate.second_page}
        </Text>
        <View style={{paddingTop: 50}}>
          <Text>
            {translate.cookies}
            {'\n'}
          </Text>
          <Text>
            {translate.cookie_declaration_last_updated}
            {'\n'}
          </Text>
          <Text>
            {translate.show_details} {'\n'}
          </Text>
          <Text>{translate.hide_details}</Text>
        </View>
      </View>
    </View>
  );
};

Second.defaultProps = {
  navigation: {},
  // newstateLanguageType: '',
};
Second.propsTypes = {
  navigation: PropsType.object,
  // newstateLanguageType: PropsType.string,
};
export default Second;
