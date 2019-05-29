import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native'

const background = require("./BG2.jpg");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const HospitalIcon = require("./HospitalIcon.png");
const DocIcon = require("./DocIcon.png");
const PatientIcon = require("./PatIcon.jpg");

export default class SignupVriew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ opacity: 0.7 }}
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
           blurRadius={1.5}
        >

          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <Image 
                  source={backIcon} 
                  style={styles.backButtonIcon} 
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

            <View style={styles.inputs}>
              <View style={styles.IconView}>
                <TouchableOpacity >
                                <Image
                                  source={DocIcon}
                                 style={styles.DocButtonIcon}
                                  resizeMode="contain"
                                />
                </TouchableOpacity>

                <TouchableOpacity >
                              <Image
                               source={PatientIcon}
                               style={styles.DocButtonIcon}
                               resizeMode="contain"
                               />
                </TouchableOpacity>
                <TouchableOpacity >
                                <Image
                                source={HospitalIcon}
                                style={styles.DocButtonIcon}
                                resizeMode="contain"
                                />
                </TouchableOpacity>
               </View>
            </View>

          </View>


        </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-between",
     backgroundColor: 'rgba(0,0,0,1)'
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null,
    resizeMode :'cover',
//    backgroundColor : 'black',
//    opacity : 0.5

//    backgroundColor : 'rgba(0,0,100,40)'


  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    alignItems :'center'
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
    alignItems:'center'
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 7,
           alignItems: "center",
           justifyContent: "center",
  },
  inputIcon: {

      height : 100,
      width : 50,
          padding: 90

  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {

    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width : 50,
    height : 50,

  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  IconView: {
    flex : 1,
    flexDirection :'column',
    justifyContent :"space-between",
    width : 100,
    height : 100,
//    alignItems : 'center',
//        justifyContent :'center'
    marginLeft : '39%',
    marginTop : '1%',

    borderRadius : 50
  }
  ,
  DocButtonIcon : {
    width : 100,
    height : 100,
    marginTop : '40%'
  }
  ,
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
  ,
})
