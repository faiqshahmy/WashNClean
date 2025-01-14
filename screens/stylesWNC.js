import { Dimensions, StyleSheet } from 'react-native';

export const stylesWNC = StyleSheet.create ({
  //the styles used for all screens  
container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
},
TopTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'blue',
    textAlign: 'center',
},

//the styles used for Homepage screen  
textTitle1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    top: '30%',
},
texttable: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
},
tableLayout: {
    margin: 2,
    borderWidth: 1,
    justifyContent: 'center',
    height: 25,
},
gridLayout: {
    top: '55%',
},
logoWNC: {
    top: '150%',
    left: '35%',
    width: 100,
    height: 100,
},
SWeather: {
    position: 'absolute',
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 100,
    height: 100,
    alignItems: 'center',
    top: '15%',
},
weather: {
    width: 70,
    height: 70,
    alignItems: 'center',
    top: '15%',
},

//styles that used for FAQ screen
Textfaq: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    padding: 10,
    textAlign: 'justify',
},
Infofaq: {
    backgroundColor: 'lightblue',
    marginTop: 20,
},

//the styles used for Weather screen 
search: {
    marginTop: -200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey'
},
 
//the styles used for navigation at certain screen  
Homepage: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '75%',
    top: '10%',
},
CHome: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 48,
    height: 48,
    left: '5%',
    top: '90%',
},
Location: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '85%',
    top: '10%',
},
CLocation: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 48,
    height: 48,
    left: '25%',
    top: '90%',
},
Tracker: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '80%',
    top: '10%',
},
CTracker: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 48,
    height: 48,
    left: '45%',
    top: '90%',
},
Profile: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '71.5%',
    top: '10%',
},
CProfile: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 52,
    height: 52,
    left: '65%',
    top: '90%'
},
FAQ: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: '20%',
    top: '20%',
},
CFaq: {
    position: 'absolute',
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 30,
    height: 30,
    right: '10%',
    top: '2%',
},
navtext: {
    color: '#000000',
    fontSize: 10,
    fontStyle: 'normal',
    left: 43,
    top: 48
},
buttonSignOut: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderColor: '#000000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 100,
    height: 30,
    top: '45%',
},
textSignOut:{
    fontSize: 20
}

})
