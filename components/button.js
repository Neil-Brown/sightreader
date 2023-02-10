import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppButton = ({ onPress, title, testID, accessibilityLabel }) => (
  <TouchableOpacity onPress={onPress} testID={testID} style={styles.appButtonContainer} accessibilityLabel={accessibilityLabel }>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  appButtonText: {
    fontSize: 18,
    color: "#000000",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default AppButton
