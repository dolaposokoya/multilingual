import React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  navText: {
    backgroundColor: 'lightgray',
    borderRadius: 1,
    marginTop: 5,
    padding: 10,
    width: '55%',
    height: 40,
    fontSize: 25,
  },
  Text: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navContainer: {
    marginTop: 35,
  },
  header: {
    height: 60,
    backgroundColor: 'lightgray',
    marginLeft: -10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 30,
    alignSelf: 'center',
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    bottom: 9,
    position: 'absolute',
    left: 20,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  touchContainer: {
    width: 75,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  language: {
    alignSelf: 'center',
    width: 40,
    top: -60,
  },
});

export default Style;
