import React, {useCallback} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList, CategoryOptions} from '../../utils/dto';
import {useStyles} from '../../utils/styles';
import {CATEGORY} from '../../utils/constants';
import {Spacer} from '../../components';

const HomeScreen = () => {
  const {navigate} = useNavigation<StackNavigationProp<AppStackParamList>>();

  const goToGameScreen = useCallback(
    (path: CategoryOptions) => {
      navigate('PuzzleScreen', {topic: path});
    },
    [navigate],
  );

  const goToLeaderShipScreen = useCallback(() => {
    navigate('LeaderShipScreen');
  }, [navigate]);

  return (
    <View style={[useStyles.rootContainer, useStyles.background]}>
      <View style={useStyles.titleContainer}>
        <Text style={useStyles.title}>Word Puzzle</Text>
      </View>
      <ScrollView style={[useStyles.scrollViewContainer]}>
        <Spacer y={70} />
        {CATEGORY.map((item, index) => {
          return (
            <View style={useStyles.centerItem} key={index}>
              <TouchableOpacity
                style={useStyles.buttonStyle}
                onPress={() => goToGameScreen(item.path as CategoryOptions)}>
                <Text style={useStyles.buttonTextStyle}>{item.label}</Text>
              </TouchableOpacity>
              <Spacer y={20} />
            </View>
          );
        })}
      </ScrollView>
      <View style={[useStyles.direactionColumn, {flex: 1}]}>
        <View style={useStyles.buttonRowContainer}>
          <TouchableOpacity
            style={useStyles.nextButtonStyle}
            onPress={goToLeaderShipScreen}>
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

export default HomeScreen;
