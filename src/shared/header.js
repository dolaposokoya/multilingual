import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {Icon} from 'native-base';
import Style from '../assets/style/style';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {changeToEnglish, changeToGerman} from '../action/languageAction';
import {LanguageFetchReducer} from '../action/languageFetchAction';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }
  toggleDrawer = () => {
    this.props.navigation.openDrawer();
  };

  changeLanguage = (languageType) => {
    this.props.LanguageFetchReducer(languageType);
  };

  render() {
    return (
      <View style={Style.header}>
        <TouchableOpacity
          style={Style.icon}
          onPress={() => {
            this.toggleDrawer();
          }}>
          <Icon name="menu" />
        </TouchableOpacity>
        <Text style={Style.headerText} myName="Name">
          {this.props.title}
        </Text>
        <View style={Style.touchContainer}>
          <View style={Style.language}>
            <TouchableOpacity
              onPress={() => {
                this.changeLanguage('german');
              }}>
              <Image
                style={Style.tinyLogo}
                resizeMode={'contain'}
                source={require('../assets/german.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={Style.language}>
            <TouchableOpacity
              onPress={() => {
                this.changeLanguage('english');
              }}>
              <Image
                style={Style.tinyLogo}
                resizeMode={'contain'}
                source={require('../assets/eng.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>{this.props.children}</View>
      </View>
      // </View>
    );
  }
}

//In the constant whatever name you used in the reducer initial state should be the same in the mapStateToProps
const mapStateToProps = (state) => {
  const {stateLanguageType} = state.LanguageReducer;
  return {
    stateLanguageType,
  };
};
// const mapDispatchToProps = {changeToEnglish, changeToGerman};

export default connect(mapStateToProps, {
  LanguageFetchReducer,
  changeToEnglish,
  changeToGerman,
})(Header);

// export default Header;
