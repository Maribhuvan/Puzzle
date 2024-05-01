/* eslint-disable react/no-unstable-nested-components */
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UserAvatar from '../../assets/images/userAvatar.jpeg';
import AwardLogo from '../../assets/images/awardLogo.png';
import {AppStackParamList} from '../../utils/dto';
import {useAppContext} from '../../utils/states';
import {USER_SCORE} from '../../utils/constants';
import {useStyles} from '../../utils/styles';
import {Spacer} from '../../components';

const LeaderShipBoard = () => {
  const {goBack} = useNavigation<StackNavigationProp<AppStackParamList>>();

  const {score} = useAppContext();
  const [users, setUsers] = useState<{userName: string; score: number}[]>([]);

  useEffect(() => {
    const userVal = [...USER_SCORE, {userName: 'You', score: score}];
    const sortedUsers = userVal.sort((a, b) => b.score - a.score);
    setUsers(sortedUsers);
  }, [score]);

  return (
    <View style={[useStyles.rootContainer, useStyles.background]}>
      <View style={useStyles.headerContainer}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={useStyles.backButtonContainer}>
          <Text style={useStyles.backButtonTextStyle}>{'➤'}</Text>
        </TouchableOpacity>
        <Text style={useStyles.headerTextStyle}>LeaderShip Board</Text>
      </View>
      <FlatList
        data={users}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={useStyles.listContainerStyle}
        ItemSeparatorComponent={() => <Spacer y={20} />}
        ListFooterComponent={() => <Spacer y={30} />}
        ListHeaderComponent={() => <Spacer y={30} />}
        renderItem={({item, index}) => {
          return (
            <View key={index + 'list'} style={useStyles.boardContainer}>
              {index < 3 ? (
                <ImageBackground
                  source={AwardLogo}
                  style={useStyles.awardImageStyle}>
                  <Text style={useStyles.awardTextStyle}>{`${
                    index + 1
                  } st`}</Text>
                </ImageBackground>
              ) : (
                <React.Fragment />
              )}
              <Image source={UserAvatar} style={useStyles.avatarStyle} />
              <Spacer x={15} />
              <View>
                <Text style={[useStyles.nameTextStyle]}>Name</Text>
                <Text style={[useStyles.nameTextStyle]}>{item.userName}</Text>
              </View>

              <View style={useStyles.countContainer}>
                <Text
                  style={[useStyles.nameTextStyle, useStyles.textAlignRight]}>
                  Score
                </Text>
                <Text
                  style={[useStyles.nameTextStyle, useStyles.textAlignRight]}>
                  {item.score}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LeaderShipBoard;
