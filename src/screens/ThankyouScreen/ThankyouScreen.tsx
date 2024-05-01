import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppStackParamList, ManageParamProps} from '../../utils/dto';
import {useAppContext} from '../../utils/states';
import {useStyles} from '../../utils/styles';
import {Spacer} from '../../components';

const ThankyouScreen = () => {
  const {replace, goBack} =
    useNavigation<StackNavigationProp<AppStackParamList>>();
  const {
    params: {points, total},
  } = useRoute<ManageParamProps<'ThankyouScreen'>>();

  const {setScore} = useAppContext();

  const navigateToLeaderShip = useCallback(() => {
    replace('LeaderShipScreen');
  }, [replace]);

  useEffect(() => {
    setScore(prev => prev + points);
  }, [points, setScore]);

  return (
    <View style={[useStyles.rootContainer, useStyles.background]}>
      <View style={useStyles.headerContainer}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={useStyles.backButtonContainer}>
          <Text style={useStyles.backButtonTextStyle}>{'➤'}</Text>
        </TouchableOpacity>
        <Text style={useStyles.headerTextStyle}>Thank you</Text>
      </View>
      <View style={useStyles.centerContainer}>
        <Text style={[useStyles.thankyouTextStyle, useStyles.activeTextColor]}>
          {`Hurray!!! \n you completed this challenge and you earned ${points}/${total} points`}
        </Text>
      </View>
      <View style={[useStyles.direactionColumn, {flex: 1}]}>
        <View style={useStyles.buttonRowContainer}>
          <TouchableOpacity style={useStyles.nextButtonStyle} onPress={goBack}>
            <Text
              style={[
                useStyles.questionHeaderTextStyle,
                useStyles.activeTextColor,
              ]}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
        <Spacer y={30} />
        <View style={useStyles.buttonRowContainer}>
          <TouchableOpacity
            style={useStyles.nextButtonStyle}
            onPress={navigateToLeaderShip}>
            <Text
              style={[
                useStyles.questionHeaderTextStyle,
                useStyles.activeTextColor,
              ]}>
              Go to LeaderShipBoard
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ThankyouScreen;
