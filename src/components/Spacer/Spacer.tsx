/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';

const Spacer = ({x = 0, y = 0}: {x?: number; y?: number}) => {
  return <View style={styles(x, y).spacerStyle} />;
};

const styles = (x: number, y: number) =>
  StyleSheet.create({
    spacerStyle: {
      height: y,
      width: x,
    },
  });

export default Spacer;
