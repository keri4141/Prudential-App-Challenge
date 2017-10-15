// import React, { Component } from 'react';
// import {BlinkID, MRTDKeys, USDLKeys, EUDLKeys, MYKADKeys} from 'blinkid-react-native';
// import {
//     Platform,
//     AppRegistry
//    } from 'react-native';

// const licenseKey = Platform.select({
//     // iOS license key for applicationID: org.reactjs.native.example.BlinkIDReactNative
//     ios: 'YGWP2SLM-IS65QYMK-4XAB2VSM-PDIFWFQY-QXZ262QK-L2L62G6D-Z7LAXJ6O-HBDCKLRW',
//     // android license key for applicationID: com.blinkidreactnative
//     android: 'VF2QEAKE-IZYWGJZJ-6T43WTEY-VTKDF37N-HBPMOOC6-Y44F5RZY-L3DTQXWH-HBPLB7DZ'
// })


// var renderIf = function(condition, content) {
//     if (condition) {
//         return content;
//     } 
//     return null;
//   }

// export default class ScanAPI {
//     /*constructor(props) {
//         super(props);
//         this.state = {showImage: false, 
//                       resultImage: '',
//                       results: '',
//                       licenseKeyErrorMessage: ''};
//       }
// */
//       //scan
//     async scan() {
//         try {
//         const scanningResult = await BlinkID.scan(
//         licenseKey,
//         {
//             useFrontCamera: false,
//             shouldReturnCroppedImage: true,
//             shouldReturnSuccessfulImage: false,
//             recognizers: [
//             // scans documents with face image and returns document images
//             // BlinkID.RECOGNIZER_DOCUMENT_FACE,
//             // scans documents with MRZ (Machine Readable Zone)
//             BlinkID.RECOGNIZER_MRTD,
//             // scans USDL (US Driver License)
//             BlinkID.RECOGNIZER_USDL,
//             // scans EUDL (EU Driver License)
//             BlinkID.RECOGNIZER_EUDL,
//             // scans MyKad (Malaysian ID)
//             BlinkID.RECOGNIZER_MYKAD
//             ]
//         })
//         if (scanningResult) {
//             let resultList = scanningResult.resultList;
//             let resultsFormattedText = "";
//             let fieldDelim = ";\n";
//             for (let i = 0; i < resultList.length; i++) {
//             // Get individual resilt
//             var recognizerResult = resultList[i];
//             resultsFormattedText += "Result type: " + recognizerResult.resultType + fieldDelim;
//             if (recognizerResult.resultType == "USDL result") {
//                 // handle USDL parsing resul
//                 var fields = recognizerResult.fields
//                 // USDLKeys are keys from keys/usdl_keys.js
//                 resultsFormattedText += /** Personal information */
//                                         "USDL version: " + fields[USDLKeys.StandardVersionNumber] + fieldDelim +
//                                         "Family name: " + fields[USDLKeys.CustomerFamilyName] + fieldDelim +
//                                         "First name: " + fields[USDLKeys.CustomerFirstName] + fieldDelim +
//                                         "Date of birth: " + fields[USDLKeys.DateOfBirth] + fieldDelim +
//                                         "Sex: " + fields[USDLKeys.Sex] + fieldDelim +
//                                         "Eye color: " + fields[USDLKeys.EyeColor] + fieldDelim +
//                                         "Height: " + fields[USDLKeys.Height] + fieldDelim +
//                                         "Street: " + fields[USDLKeys.AddressStreet] + fieldDelim +
//                                         "City: " + fields[USDLKeys.AddressCity] + fieldDelim +
//                                         "Jurisdiction: " + fields[USDLKeys.AddressJurisdictionCode] + fieldDelim +
//                                         "Postal code: " + fields[USDLKeys.AddressPostalCode] + fieldDelim +
//                                         /** License information */
//                                         "Issue date: " + fields[USDLKeys.DocumentIssueDate] + fieldDelim +
//                                         "Expiration date: " + fields[USDLKeys.DocumentExpirationDate] + fieldDelim +
//                                         "Issuer ID: " + fields[USDLKeys.IssuerIdentificationNumber] + fieldDelim +
//                                         "Jurisdiction version: " + fields[USDLKeys.JurisdictionVersionNumber] + fieldDelim +
//                                         "Vehicle class: " + fields[USDLKeys.JurisdictionVehicleClass] + fieldDelim +
//                                         "Restrictions: " + fields[USDLKeys.JurisdictionRestrictionCodes] + fieldDelim +
//                                         "Endorsments: " + fields[USDLKeys.JurisdictionEndorsementCodes] + fieldDelim +
//                                         "Customer ID: " + fields[USDLKeys.CustomerIdNumber] + fieldDelim;

//             } else if (recognizerResult.resultType == "MRTD result") {
                        
//                 var fields = recognizerResult.fields
//                 // MRTDKeys are keys from keys/mrtd_keys.js
//                 resultsFormattedText += /** Personal information */
//                                         "Family name: " + fields[MRTDKeys.PrimaryId] + fieldDelim +
//                                         "First name: " + fields[MRTDKeys.SecondaryId] + fieldDelim +
//                                         "Date of birth: " + fields[MRTDKeys.DateOfBirth] + fieldDelim +
//                                         "Sex: " + fields[MRTDKeys.Sex] + fieldDelim +
//                                         "Nationality: " + fields[MRTDKeys.Nationality] + fieldDelim +
//                                         "Date of Expiry: " + fields[MRTDKeys.DateOfExpiry] + fieldDelim +
//                                         "Document Code: " + fields[MRTDKeys.DocumentCode] + fieldDelim +
//                                         "Document Number: " + fields[MRTDKeys.DocumentNumber] + fieldDelim +
//                                         "Issuer: " + fields[MRTDKeys.Issuer] + fieldDelim +
//                                         "Opt1: " + fields[MRTDKeys.Opt1] + fieldDelim +
//                                         "Opt2: " + fields[MRTDKeys.Opt2] + fieldDelim;

//             } else if (recognizerResult.resultType == "EUDL result") {
                            
//                 var fields = recognizerResult.fields
//                 // EUDLKeys are keys from keys/eudl_keys.js
//                 resultsFormattedText += /** Personal information */
//                                         "First name: " + fields[EUDLKeys.FirstName] + fieldDelim +
//                                         "Last name: " + fields[EUDLKeys.LastName] + fieldDelim +
//                                         "Date of Expiry: " + fields[EUDLKeys.ExpiryDate] + fieldDelim +
//                                         "Issue Date: " + fields[EUDLKeys.IssueDate] + fieldDelim +
//                                         "Driver Number: " + fields[EUDLKeys.DriverNumber] + fieldDelim +
//                                         "Address: " + fields[EUDLKeys.Address] + fieldDelim +
//                                         "Birth Data: " + fields[EUDLKeys.BirthData] + fieldDelim;

//             } else if (recognizerResult.resultType == "MyKad result") {
        
//                 var fields = recognizerResult.fields
//                 // MYKADKeys are keys from keys/mykad_keys.js
//                 resultsFormattedText += /** Personal information */
//                                         "Full name: " + fields[MYKADKeys.FullName] + fieldDelim +
//                                         "NRIC Number: " + fields[MYKADKeys.NricNumber] + fieldDelim +
//                                         "Address: " + fields[MYKADKeys.Address] + fieldDelim +
//                                         "City: " + fields[MYKADKeys.AddressCity] + fieldDelim +
//                                         "State: " + fields[MYKADKeys.AddressState] + fieldDelim +
//                                         "Street: " + fields[MYKADKeys.AddressStreet] + fieldDelim +
//                                         "Zip code: " + fields[MYKADKeys.AddressZipCode] + fieldDelim +
//                                         "Date of birth: " + fields[MYKADKeys.DateOfBirth] + fieldDelim +
//                                         "Religion: " + fields[MYKADKeys.Religion] + fieldDelim +
//                                         "Sex: " + fields[MYKADKeys.Sex] + fieldDelim;

//             } else if (recognizerResult.resultType == "DocumentFace result") {
//                 // document face recognizer returns only images
//             }
//             resultsFormattedText += '\n';
//             }
//             // image is returned as base64 encoded JPEG, we expect resultImageCorpped because we have activated obtaining of cropped images (shouldReturnCroppedImage: true)
//             // to obtain image from successful scan, activate option (shouldReturnSuccessfulImage: true) and get is with scanningResult.resultImageSuccessful
//             this.setState({ showImage: scanningResult.resultImageCropped, resultImage: 'data:image/jpg;base64,' + scanningResult.resultImageCropped, results: resultsFormattedText});
//         }
//         } catch(error) {
//             this.setState({ showImage: false, resultImage: '', results: error.message});
//         }
//     }
  
// }