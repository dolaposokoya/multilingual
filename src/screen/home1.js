import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';
import Header from '../shared/header';
import PropsType from 'prop-types';

const Home1 = (props) => {
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
        title={translate.home_head}
      />
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
            {translate.home_one}
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Home1.defaultProps = {
  navigation: {},
};
Home1.propsTypes = {
  navigation: PropsType.object,
};
export default Home1;
