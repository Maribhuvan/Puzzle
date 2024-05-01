import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    display: 'flex',
  },
  titleContainer: {
    marginTop: 25,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Rakkas-Regular',
  },
  scrollViewContainer: {
    flex: 1,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '90%',
    padding: 25,
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7b633',
  },
  buttonTextStyle: {
    color: 'black',
    fontFamily: 'Rakkas-Regular',
    fontSize: 25,
  },
  background: {
    backgroundColor: '#f7b63399',
  },
  headerContainer: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    width: 50,
    left: 15,
    borderWidth: 3,
    borderRadius: 15,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7b633',
  },
  backButtonTextStyle: {
    color: 'black',
    fontFamily: 'Rakkas-Regular',
    fontSize: 28,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  headerTextStyle: {
    color: 'black',
    fontFamily: 'Rakkas-Regular',
    fontSize: 28,
    fontWeight: '400',
  },
  questionHeaderContainer: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionHeaderTextStyle: {
    fontFamily: 'Rakkas-Regular',
    fontSize: 25,
    textAlign: 'center',
  },
  inputContainer: {
    paddingVertical: 10,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  textButtonStyle: {
    width: 55,
    height: 55,
    margin: 8,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledColor: {
    backgroundColor: '#f7b63320',
  },
  activeColor: {
    backgroundColor: '#f7b633',
  },
  activeTextColor: {
    color: 'black',
  },
  disabledTextColor: {
    color: 'grey',
  },
  activeBorderColor: {
    borderColor: 'black',
  },
  disabledBorderColor: {
    borderColor: 'grey',
  },
  nextButtonStyle: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 2,
  },
  buttonRowContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  direactionColumn: {
    width: '100%',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#f7b63320',
  },
  countContainer: {
    position: 'absolute',
    right: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30%',
  },
  nameTextStyle: {
    color: 'black',
    fontFamily: 'Rakkas-Regular',
    fontSize: 20,
  },
  avatarStyle: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  boardContainer: {
    minWidth: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlignRight: {textAlign: 'right'},
  awardTextStyle: {
    color: 'black',
    fontFamily: 'Rakkas-Regular',
    fontSize: 15,
    paddingBottom: 7,
  },
  awardImageStyle: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: -30,
    left: -20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankyouTextStyle: {
    fontFamily: 'Rakkas-Regular',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default styles;
