import React from 'react';
import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={{alignContent: 'center', backgroundColor: 'lightblue'}}>
      <Modal transparent={true} animationType="slide">
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default Loader;
