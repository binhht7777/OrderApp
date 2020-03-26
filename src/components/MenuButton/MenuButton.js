import React from 'react';
import { TouchableHighlight, Image, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function MenuButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.btnClickContain}
    >
      <View style={styles.btnContainer}>
        <Image source={props.source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
