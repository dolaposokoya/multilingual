import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {LanguageFetchReducer} from '../action/languageFetchAction';
import english from '../translation/en/translation.json';
import german from '../translation/ge/translation.json';
import Style from '../assets/style/style';

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dirty: false,
    };
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render() {
    let translate;
    if (this.props.stateLanguageType === 'english') {
      translate = english.text;
    } else {
      translate = german.text;
    }
    return (
      <View>
        <ScrollView>
          <View style={Style.navContainer}>
            <View style={Style.navText}>
              <TouchableOpacity
                onPress={this.navigateToScreen('Home')}
                color="red">
                <Text style={Style.Text}>{translate.home}</Text>
              </TouchableOpacity>
            </View>
            <View style={Style.navText}>
              <TouchableOpacity onPress={this.navigateToScreen('Second')}>
                <Text style={Style.Text}>{translate.second}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {stateLanguageType} = state.LanguageReducer;
  return {
    stateLanguageType,
  };
};

export default connect(mapStateToProps)(Index);
