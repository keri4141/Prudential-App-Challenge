
import App from './src/app';
const app = new App();


// import React, { Component } from 'react';
// import {BlinkID, MRTDKeys, USDLKeys, EUDLKeys, MYKADKeys} from 'blinkid-react-native';
// import {
//   AppRegistry,
//   Platform,
//   StyleSheet,
//   TouchableHighlight,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Button
// } from 'react-native';

// import Voice from 'react-native-voice';
// import Tts from 'react-native-tts';


// const licenseKey = Platform.select({
//       // iOS license key for applicationID: org.reactjs.native.example.BlinkIDReactNative
//       ios: 'YGWP2SLM-IS65QYMK-4XAB2VSM-PDIFWFQY-QXZ262QK-L2L62G6D-Z7LAXJ6O-HBDCKLRW',
//       // android license key for applicationID: com.blinkidreactnative
//       android: 'VF2QEAKE-IZYWGJZJ-6T43WTEY-VTKDF37N-HBPMOOC6-Y44F5RZY-L3DTQXWH-HBPLB7DZ'
// })

// var renderIf = function(condition, content) {
//   if (condition) {
//       return content;
//   } 
//   return null;
// }


// export default class PrudentialHack extends Component {

  
//   constructor(props) {
//     super(props);
//     this.state = {showImage: false, 
//                   resultImage: '',
//                   results: '',
//                   licenseKeyErrorMessage: '',
//                   recognized: '',
//                   pitch: '',
//                   error: '',
//                   end: '',
//                   started: '',
//                   results: [],
//                   partialResults: []};
//     Voice.onSpeechStart = this.onSpeechStart.bind(this);
//     Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
//     Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
//     Voice.onSpeechError = this.onSpeechError.bind(this);
//     Voice.onSpeechResults = this.onSpeechResults.bind(this);
//     Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
//     Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
//   }




// //speech
// componentWillUnmount() {
//   Voice.destroy().then(Voice.removeAllListeners);
// }

// onSpeechStart(e) {
//   this.setState({
//     started: '√',
//   });
// }

// onSpeechRecognized(e) {
//   this.setState({
//     recognized: '√',
//   });
// }

// onSpeechEnd(e) {
//   this.setState({
//     end: '√',
//   });
// }

// onSpeechError(e) {
//   this.setState({
//     error: JSON.stringify(e.error),
//   });
// }

// onSpeechResults(e) {
//   this.setState({
//     results: e.value,
//   });
// }

// onSpeechPartialResults(e) {
//   this.setState({
//     partialResults: e.value,
//   });
// }

// onSpeechVolumeChanged(e) {
//   this.setState({
//     pitch: e.value,
//   });
// }

// async _startRecognizing(e) {
//   this.setState({
//     recognized: '',
//     pitch: '',
//     error: '',
//     started: '',
//     results: [],
//     partialResults: [],
//     end: ''
//   });
//   try {
//     await Voice.start('en-US');
//   } catch (e) {
//     console.error(e);
//   }
// }

// async _stopRecognizing(e) {
//   try {
//     await Voice.stop();
//   } catch (e) {
//     console.error(e);
//   }
// }

// async _cancelRecognizing(e) {
//   try {
//     await Voice.cancel();
//   } catch (e) {
//     console.error(e);
//   }
// }

// async _destroyRecognizer(e) {
//   try {
//     await Voice.destroy();
//   } catch (e) {
//     console.error(e);
//   }
//   this.setState({
//     recognized: '',
//     pitch: '',
//     error: '',
//     started: '',
//     results: [],
//     partialResults: [],
//     end: ''
//   });
// }

//   //scan
//   async scan() {
//     try {
//       const scanningResult = await BlinkID.scan(
//       licenseKey,
//       {
//         useFrontCamera: false,
//         shouldReturnCroppedImage: true,
//         shouldReturnSuccessfulImage: false,
//         recognizers: [
//           // scans documents with face image and returns document images
//           // BlinkID.RECOGNIZER_DOCUMENT_FACE,
//           // scans documents with MRZ (Machine Readable Zone)
//           BlinkID.RECOGNIZER_MRTD,
//           // scans USDL (US Driver License)
//           BlinkID.RECOGNIZER_USDL,
//           // scans EUDL (EU Driver License)
//           BlinkID.RECOGNIZER_EUDL,
//           // scans MyKad (Malaysian ID)
//           BlinkID.RECOGNIZER_MYKAD
//         ]
//       })
//       if (scanningResult) {
//         let resultList = scanningResult.resultList;
//         let resultsFormattedText = "";
//         let fieldDelim = ";\n";
//         for (let i = 0; i < resultList.length; i++) {
//           // Get individual resilt
//           var recognizerResult = resultList[i];
//           resultsFormattedText += "Result type: " + recognizerResult.resultType + fieldDelim;
//           if (recognizerResult.resultType == "USDL result") {
//               // handle USDL parsing resul
//               var fields = recognizerResult.fields
//               // USDLKeys are keys from keys/usdl_keys.js
//               resultsFormattedText += /** Personal information */
//                                      "USDL version: " + fields[USDLKeys.StandardVersionNumber] + fieldDelim +
//                                      "Family name: " + fields[USDLKeys.CustomerFamilyName] + fieldDelim +
//                                      "First name: " + fields[USDLKeys.CustomerFirstName] + fieldDelim +
//                                      "Date of birth: " + fields[USDLKeys.DateOfBirth] + fieldDelim +
//                                      "Sex: " + fields[USDLKeys.Sex] + fieldDelim +
//                                      "Eye color: " + fields[USDLKeys.EyeColor] + fieldDelim +
//                                      "Height: " + fields[USDLKeys.Height] + fieldDelim +
//                                      "Street: " + fields[USDLKeys.AddressStreet] + fieldDelim +
//                                      "City: " + fields[USDLKeys.AddressCity] + fieldDelim +
//                                      "Jurisdiction: " + fields[USDLKeys.AddressJurisdictionCode] + fieldDelim +
//                                      "Postal code: " + fields[USDLKeys.AddressPostalCode] + fieldDelim +
//                                       /** License information */
//                                       "Issue date: " + fields[USDLKeys.DocumentIssueDate] + fieldDelim +
//                                       "Expiration date: " + fields[USDLKeys.DocumentExpirationDate] + fieldDelim +
//                                       "Issuer ID: " + fields[USDLKeys.IssuerIdentificationNumber] + fieldDelim +
//                                       "Jurisdiction version: " + fields[USDLKeys.JurisdictionVersionNumber] + fieldDelim +
//                                       "Vehicle class: " + fields[USDLKeys.JurisdictionVehicleClass] + fieldDelim +
//                                       "Restrictions: " + fields[USDLKeys.JurisdictionRestrictionCodes] + fieldDelim +
//                                       "Endorsments: " + fields[USDLKeys.JurisdictionEndorsementCodes] + fieldDelim +
//                                       "Customer ID: " + fields[USDLKeys.CustomerIdNumber] + fieldDelim;

//           } else if (recognizerResult.resultType == "MRTD result") {
                      
//               var fields = recognizerResult.fields
//               // MRTDKeys are keys from keys/mrtd_keys.js
//               resultsFormattedText += /** Personal information */
//                                       "Family name: " + fields[MRTDKeys.PrimaryId] + fieldDelim +
//                                       "First name: " + fields[MRTDKeys.SecondaryId] + fieldDelim +
//                                       "Date of birth: " + fields[MRTDKeys.DateOfBirth] + fieldDelim +
//                                       "Sex: " + fields[MRTDKeys.Sex] + fieldDelim +
//                                       "Nationality: " + fields[MRTDKeys.Nationality] + fieldDelim +
//                                       "Date of Expiry: " + fields[MRTDKeys.DateOfExpiry] + fieldDelim +
//                                       "Document Code: " + fields[MRTDKeys.DocumentCode] + fieldDelim +
//                                       "Document Number: " + fields[MRTDKeys.DocumentNumber] + fieldDelim +
//                                       "Issuer: " + fields[MRTDKeys.Issuer] + fieldDelim +
//                                       "Opt1: " + fields[MRTDKeys.Opt1] + fieldDelim +
//                                       "Opt2: " + fields[MRTDKeys.Opt2] + fieldDelim;

//           } else if (recognizerResult.resultType == "EUDL result") {
                          
//               var fields = recognizerResult.fields
//               // EUDLKeys are keys from keys/eudl_keys.js
//               resultsFormattedText += /** Personal information */
//                                       "First name: " + fields[EUDLKeys.FirstName] + fieldDelim +
//                                       "Last name: " + fields[EUDLKeys.LastName] + fieldDelim +
//                                       "Date of Expiry: " + fields[EUDLKeys.ExpiryDate] + fieldDelim +
//                                       "Issue Date: " + fields[EUDLKeys.IssueDate] + fieldDelim +
//                                       "Driver Number: " + fields[EUDLKeys.DriverNumber] + fieldDelim +
//                                       "Address: " + fields[EUDLKeys.Address] + fieldDelim +
//                                       "Birth Data: " + fields[EUDLKeys.BirthData] + fieldDelim;

//           } else if (recognizerResult.resultType == "MyKad result") {
    
//               var fields = recognizerResult.fields
//               // MYKADKeys are keys from keys/mykad_keys.js
//               resultsFormattedText += /** Personal information */
//                                       "Full name: " + fields[MYKADKeys.FullName] + fieldDelim +
//                                       "NRIC Number: " + fields[MYKADKeys.NricNumber] + fieldDelim +
//                                       "Address: " + fields[MYKADKeys.Address] + fieldDelim +
//                                       "City: " + fields[MYKADKeys.AddressCity] + fieldDelim +
//                                       "State: " + fields[MYKADKeys.AddressState] + fieldDelim +
//                                       "Street: " + fields[MYKADKeys.AddressStreet] + fieldDelim +
//                                       "Zip code: " + fields[MYKADKeys.AddressZipCode] + fieldDelim +
//                                       "Date of birth: " + fields[MYKADKeys.DateOfBirth] + fieldDelim +
//                                       "Religion: " + fields[MYKADKeys.Religion] + fieldDelim +
//                                       "Sex: " + fields[MYKADKeys.Sex] + fieldDelim;

//           } else if (recognizerResult.resultType == "DocumentFace result") {
//             // document face recognizer returns only images
//           }
//           resultsFormattedText += '\n';
//         }
//         // image is returned as base64 encoded JPEG, we expect resultImageCorpped because we have activated obtaining of cropped images (shouldReturnCroppedImage: true)
//         // to obtain image from successful scan, activate option (shouldReturnSuccessfulImage: true) and get is with scanningResult.resultImageSuccessful
//         this.setState({ showImage: scanningResult.resultImageCropped, resultImage: 'data:image/jpg;base64,' + scanningResult.resultImageCropped, results: resultsFormattedText});
//       }
//     } catch(error) {
//         this.setState({ showImage: false, resultImage: '', results: error.message});
//     }
    
//   }



//   render() {
//     let displayImage = this.state.resultImage;
//     let displayFields = this.state.results;
//     let licenseKeyErrorMessage = this.state.licenseKeyErrorMessage;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.label}>MicroBlink Ltd</Text>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this.scan.bind(this)}
//             title="Scan"
//             color="#87c540"
//           />

//           <Button onPress={() => {this.onStartButtonPress}} title="Speak">
//           <Text>Speak</Text>
//         </Button>

//         </View>

//         <Button  title="SAY HELLO" onPress ={() => {Tts.speak("Hello, world!");}}>
//           <Text> HELLO </Text>

//         </Button>
//         <ScrollView
//           automaticallyAdjustContentInsets={false}
//           scrollEventThrottle={200}y> 
//           {renderIf(this.state.showImage,
//               <View style={styles.imageContainer}>
//               <Image
//                 resizeMode='contain'
//                 source={{uri: displayImage, scale: 3}} style={styles.imageResult}/>
//               </View>
//           )}
//           <Text style={styles.results}>{displayFields}</Text>
//         </ScrollView>

//         <Text style={styles.welcome}>
//           Welcome to React Native Voice!
//         </Text>
//         <Text style={styles.instructions}>
//           Press the button and start speaking.
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Started: ${this.state.started}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Recognized: ${this.state.recognized}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Pitch: ${this.state.pitch}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Error: ${this.state.error}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           Results
//         </Text>
//         {this.state.results.map((result, index) => {
//           return (
//             <Text
//               key={`result-${index}`}
//               style={styles.stat}>
//               {result}
//             </Text>
//           )
//         })}
//         <Text
//           style={styles.stat}>
//           Partial Results
//         </Text>
//         {this.state.partialResults.map((result, index) => {
//           return (
//             <Text
//               key={`partial-result-${index}`}
//               style={styles.stat}>
//               {result}
//             </Text>
//           )
//         })}
//         <Text
//           style={styles.stat}>
//           {`End: ${this.state.end}`}
//         </Text>
//         <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
//           <Image
//             style={styles.button}
//             source={require('./button.png')}
//           />
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this._stopRecognizing.bind(this)}>
//           <Text
//             style={styles.action}>
//             Stop Recognizing
//           </Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this._cancelRecognizing.bind(this)}>
//           <Text
//             style={styles.action}>
//             Cancel
//           </Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this._destroyRecognizer.bind(this)}>
//           <Text
//             style={styles.action}>
//             Destroy
//           </Text>
//         </TouchableHighlight>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   label: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginTop: 50
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   results: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   imageResult: {
//     flex: 1,
//     flexShrink: 1,
//     height: 200,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10
//   },

//   button: {
//     width: 50,
//     height: 50,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   action: {
//     textAlign: 'center',
//     color: '#0000FF',
//     marginVertical: 5,
//     fontWeight: 'bold',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   stat: {
//     textAlign: 'center',
//     color: '#B0171F',
//     marginBottom: 1,
//   },
// });

// AppRegistry.registerComponent('PrudentialHack', () => PrudentialHack);