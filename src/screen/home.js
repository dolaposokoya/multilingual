import React, {useState, useEffect, useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, ScrollView, TouchableOpacity, Button} from 'react-native';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';
import Header from '../shared/header';
import PropsType from 'prop-types';

const Home = (props) => {
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
    translate = english.text;
  } else {
    translate = german.text;
  }

  return (
    <View>
      <Header
        parentProps={props}
        navigation={props.navigation}
        newstateLanguageType={newStateLanguageType}
        title={translate.home}
      />
      {/* {console.log('Lrts see change', newStateLanguageType)} */}
      <ScrollView>
        <View
          style={{
            alignContent: 'center',
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
            {translate.home_page}
          </Text>
          {/* <Header /> */}
          <View style={{paddingTop: 50}}>
            <Text>
              {translate.cookies}
              {'\n'}
            </Text>
            <Text>
              {translate.cookie_declaration_last_updated}
              {/* {myLanguage.cookie_declaration_last_updated} */}
              {'\n'}
            </Text>
            <Text>
              {translate.show_details} {'\n'}
            </Text>
            <Text>{translate.hide_details}</Text>
            <Button
              title={translate.go_to_profile}
              onPress={() => props.navigation.navigate('Home1')}
            />
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home1');
              }}>
              <Text>{translate.go_to_home} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Home.defaultProps = {
  navigation: {},
  newstateLanguageType: '',
};
Home.propsTypes = {
  navigation: PropsType.object,
  newstateLanguageType: PropsType.string,
  // defaultLanguage: PropsType.string,
};
export default Home;
