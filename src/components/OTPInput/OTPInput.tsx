import React, {useRef} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

type OTPInputProps = {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: Array<string>): void;
};

const OTPInput: React.FunctionComponent<OTPInputProps> = ({
  length,
  value,
  onChange,
}) => {
  const inputRefs = useRef<Array<TextInput>>([]);

  const onChangeValue = (text: string, index: number) => {
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }

      return item;
    });

    onChange(newValue);
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);

    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;

    if (nativeEvent.key === 'Backspace') {
      handleChange('', index);
    }
  };

  return (
    <View style={styles.container}>
      {[...new Array(length)].map((item, index) => (
        <TextInput
          ref={ref => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          value={value[index]?.toUpperCase()}
          editable={false}
          style={styles.input}
          testID={`OTPInput-${index}`}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleBackspace(event, index)}
          showSoftInputOnFocus={false}
          focusable={false}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  input: {
    color: 'black',
    fontFamily: 'Rakkas-Regular',
    fontSize: 25,
    textAlign: 'center',
    width: 55,
    height: 55,
    backgroundColor: '#f7b633',
    borderRadius: 10,
    margin: 10,
  },
});

export default OTPInput;
