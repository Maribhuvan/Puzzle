import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  AppStackParamList,
  ManageParamProps,
  CategoryOptions,
} from '../../utils/dto';
import {CATEGORY, QUESTIONS} from '../../utils/constants';
import {collapseWord} from '../../utils/functions';
import {useStyles} from '../../utils/styles';
import {OTPInput, Spacer} from '../../components';

const PuzzleScreen = () => {
  const {replace, goBack} =
    useNavigation<StackNavigationProp<AppStackParamList>>();
  const {
    params: {topic},
  } = useRoute<ManageParamProps<'PuzzleScreen'>>();

  const points = useRef(0);
  const total = useRef(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [value, setValue] = useState<Array<string>>([]);
  const [category, setCategory] = useState('' as CategoryOptions);
  const [disabledButtons, setDisabledButtons] = useState<boolean[]>([]);
  const [answeredIndices, setAnsweredIndices] = useState<number[]>([]);

  const questionsArray = useMemo(() => {
    return QUESTIONS[category];
  }, [category]);

  const isLastIndex = questionIndex + 1 === questionsArray?.length;

  const currentQuestion = useMemo(() => {
    if (questionsArray) {
      setDisabledButtons(
        new Array(questionsArray[questionIndex]?.answer.length).fill(false),
      );
      return questionsArray[questionIndex];
    }
    return {question: '', answer: '', level: ''};
  }, [questionsArray, questionIndex]);

  const resetGame = useCallback(() => {
    setValue([]);
    setQuestionIndex(0);
    setDisabledButtons([]);
    setAnsweredIndices([]);
  }, []);

  const onPressLetter = useCallback((e: string, index: number) => {
    setValue(old => [...old, e]);
    setDisabledButtons(old => {
      const newDisabledButtons = [...old];
      newDisabledButtons[index] = true;
      return newDisabledButtons;
    });
  }, []);

  const collapsedData = useMemo(
    () => collapseWord(currentQuestion?.answer),
    [currentQuestion],
  );

  const clearInput = useCallback(() => {
    setValue([]);
    setDisabledButtons([]);
    setAnsweredIndices([]);
  }, []);

  const getPoints = (level: string) => {
    switch (level) {
      case 'hard':
        return 15;
      case 'medium':
        return 10;
      default:
        return 5;
    }
  };

  const calculatePoints = useCallback(() => {
    total.current += getPoints(currentQuestion.level);
    const isAnswerCorrect =
      value.join('').toLowerCase() === currentQuestion.answer.toLowerCase();

    if (isAnswerCorrect) {
      const temp = [...answeredIndices, questionIndex];
      setAnsweredIndices(temp);
      points.current += getPoints(currentQuestion.level);
    } else {
      points.current = points.current + 0;
    }
  }, [answeredIndices, currentQuestion, questionIndex, value]);

  const onFinished = () => {
    calculatePoints();
    replace('ThankyouScreen', {points: points.current, total: total.current});
  };

  const onPressNext = useCallback(() => {
    calculatePoints();
    if (answeredIndices.length === questionsArray?.length - 1) {
      setValue([]);
      setDisabledButtons(new Array(currentQuestion?.answer.length).fill(false));
      return;
    }
    setValue([]);
    let nextIndex = questionIndex;
    do {
      nextIndex = (nextIndex + 1) % questionsArray?.length;
    } while (answeredIndices.includes(nextIndex)); // Skip answered questions
    setQuestionIndex(nextIndex);
  }, [
    calculatePoints,
    answeredIndices,
    questionsArray,
    questionIndex,
    currentQuestion,
  ]);

  useEffect(() => {
    resetGame();
    setCategory(topic);
  }, [resetGame, topic]);

  return (
    <View style={[useStyles.rootContainer, useStyles.background]}>
      <View style={useStyles.headerContainer}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={useStyles.backButtonContainer}>
          <Text style={useStyles.backButtonTextStyle}>{'➤'}</Text>
        </TouchableOpacity>
        <Text style={useStyles.headerTextStyle}>
          {CATEGORY.find(o => o.path === category)?.label}
        </Text>
        <Text style={[useStyles.headerTextStyle, useStyles.countContainer]}>{`${
          questionIndex + 1
        }/${questionsArray?.length}`}</Text>
      </View>
      <View style={useStyles.questionHeaderContainer}>
        <Text
          style={[
            useStyles.questionHeaderTextStyle,
            useStyles.activeTextColor,
          ]}>
          {`${questionIndex + 1}. ${currentQuestion?.question} (${
            currentQuestion?.level
          })`}
        </Text>
      </View>
      <View style={useStyles.inputContainer}>
        <OTPInput
          length={currentQuestion?.answer.length}
          onChange={data => {
            data;
          }}
          value={value}
          disabled={false}
        />
      </View>
      <View style={useStyles.buttonsContainer}>
        {collapsedData?.split('').map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => onPressLetter(e, i)}
              disabled={disabledButtons[i]}>
              <View
                style={[
                  useStyles.textButtonStyle,
                  disabledButtons[i]
                    ? useStyles.disabledColor
                    : useStyles.activeColor,
                  disabledButtons[i]
                    ? useStyles.disabledBorderColor
                    : useStyles.activeBorderColor,
                ]}>
                <Text
                  style={[
                    useStyles.questionHeaderTextStyle,
                    disabledButtons[i]
                      ? useStyles.disabledTextColor
                      : useStyles.activeTextColor,
                  ]}>
                  {e.toUpperCase()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={useStyles.direactionColumn}>
        <View style={useStyles.buttonRowContainer}>
          <TouchableOpacity
            style={useStyles.nextButtonStyle}
            onPress={clearInput}>
            <Text
              style={[
                useStyles.questionHeaderTextStyle,
                useStyles.activeTextColor,
              ]}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        <Spacer y={40} />
        <View style={useStyles.buttonRowContainer}>
          <TouchableOpacity
            disabled={isLastIndex}
            onPress={onPressNext}
            style={[
              useStyles.nextButtonStyle,
              isLastIndex
                ? useStyles.disabledBorderColor
                : useStyles.activeBorderColor,
              isLastIndex && useStyles.disabledColor,
            ]}>
            <Text
              style={[
                useStyles.questionHeaderTextStyle,
                isLastIndex
                  ? useStyles.disabledTextColor
                  : useStyles.activeTextColor,
              ]}>
              Skip
            </Text>
          </TouchableOpacity>
          <Spacer x={60} />
          <TouchableOpacity
            onPress={isLastIndex ? onFinished : onPressNext}
            style={useStyles.nextButtonStyle}>
            <Text
              style={[
                useStyles.questionHeaderTextStyle,
                useStyles.activeTextColor,
              ]}>
              {isLastIndex ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PuzzleScreen;
