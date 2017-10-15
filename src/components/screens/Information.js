import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Platform,
    Image,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import * as  appActions from '../../actions/index';
import {connect} from 'react-redux';
import {BlinkID, MRTDKeys, USDLKeys, EUDLKeys, MYKADKeys} from 'blinkid-react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,List,ListItem, Button, Input } from 'native-base';

//import ScanAPI from '../../scanAPI';

const licenseKey = Platform.select({
    // iOS license key for applicationID: org.reactjs.native.example.BlinkIDReactNative
    ios: 'YGWP2SLM-IS65QYMK-4XAB2VSM-PDIFWFQY-QXZ262QK-L2L62G6D-Z7LAXJ6O-HBDCKLRW',
    // android license key for applicationID: com.blinkidreactnative
    android: 'VF2QEAKE-IZYWGJZJ-6T43WTEY-VTKDF37N-HBPMOOC6-Y44F5RZY-L3DTQXWH-HBPLB7DZ'
})

var renderIf = function(condition, content) {
    if (condition) {
        return content;
    } 
    return null;
  }



export class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {showImage: false, 
                    resultImage: '',
                    results: '',
                    lastname:'',
                    licenseKeyErrorMessage: ''};
    }

    
    toResponseOne = () => {
        this.props.navigator.push({
            screen: 'PrudentialHack.ResponseOne',
          });
        
    };

    toPreview = () => {
        this.props.navigator.push({
            screen: 'PrudentialHack.Preview',
          });
        
    };

    async scan() {
        try {
        const scanningResult = await BlinkID.scan(
        licenseKey,
        {
            useFrontCamera: false,
            shouldReturnCroppedImage: true,
            shouldReturnSuccessfulImage: false,
            recognizers: [
            // scans documents with face image and returns document images
            // BlinkID.RECOGNIZER_DOCUMENT_FACE,
            // scans documents with MRZ (Machine Readable Zone)
            BlinkID.RECOGNIZER_MRTD,
            // scans USDL (US Driver License)
            BlinkID.RECOGNIZER_USDL,
            // scans EUDL (EU Driver License)
            BlinkID.RECOGNIZER_EUDL,
            // scans MyKad (Malaysian ID)
            BlinkID.RECOGNIZER_MYKAD
            ]
        })
        if (scanningResult) {
            let resultList = scanningResult.resultList;
            let resultsFormattedText = "";
            let fieldDelim = ";\n";
            for (let i = 0; i < resultList.length; i++) {
            // Get individual resilt
            var recognizerResult = resultList[i];
            resultsFormattedText += "Result type: " + recognizerResult.resultType + fieldDelim;
            if (recognizerResult.resultType == "USDL result") {
                // handle USDL parsing resul
                var fields = recognizerResult.fields

                this.setState({lastname:fields[USDLKeys.CustomerFamilyName]});
                this.props.dispatch(appActions.Scanned(
                    fields[USDLKeys.CustomerFamilyName],
                    fields[USDLKeys.CustomerFirstName],
                    fields[USDLKeys.Height],
                    fields[USDLKeys.DateOfBirth],
                    fields[USDLKeys.AddressJurisdictionCode],
                    fields[USDLKeys.AddressStreet],
                    fields[USDLKeys.EyeColor]
                ));
                
                // USDLKeys are keys from keys/usdl_keys.js
                resultsFormattedText += /** Personal information */
                                        "USDL version: " + fields[USDLKeys.StandardVersionNumber] + fieldDelim +
                                        "Family name: " + fields[USDLKeys.CustomerFamilyName] + fieldDelim +
                                        "First name: " + fields[USDLKeys.CustomerFirstName] + fieldDelim +
                                        "Date of birth: " + fields[USDLKeys.DateOfBirth] + fieldDelim +
                                        "Sex: " + fields[USDLKeys.Sex] + fieldDelim +
                                        "Eye color: " + fields[USDLKeys.EyeColor] + fieldDelim +
                                        "Height: " + fields[USDLKeys.Height] + fieldDelim +
                                        "Street: " + fields[USDLKeys.AddressStreet] + fieldDelim +
                                        "City: " + fields[USDLKeys.AddressCity] + fieldDelim +
                                        "Jurisdiction: " + fields[USDLKeys.AddressJurisdictionCode] + fieldDelim +
                                        "Postal code: " + fields[USDLKeys.AddressPostalCode] + fieldDelim +
                                        /** License information */
                                        "Issue date: " + fields[USDLKeys.DocumentIssueDate] + fieldDelim +
                                        "Expiration date: " + fields[USDLKeys.DocumentExpirationDate] + fieldDelim +
                                        "Issuer ID: " + fields[USDLKeys.IssuerIdentificationNumber] + fieldDelim +
                                        "Jurisdiction version: " + fields[USDLKeys.JurisdictionVersionNumber] + fieldDelim +
                                        "Vehicle class: " + fields[USDLKeys.JurisdictionVehicleClass] + fieldDelim +
                                        "Restrictions: " + fields[USDLKeys.JurisdictionRestrictionCodes] + fieldDelim +
                                        "Endorsments: " + fields[USDLKeys.JurisdictionEndorsementCodes] + fieldDelim +
                                        "Customer ID: " + fields[USDLKeys.CustomerIdNumber] + fieldDelim;

            } else if (recognizerResult.resultType == "MRTD result") {
                        
                var fields = recognizerResult.fields
                // MRTDKeys are keys from keys/mrtd_keys.js
                resultsFormattedText += /** Personal information */
                                        "Family name: " + fields[MRTDKeys.PrimaryId] + fieldDelim +
                                        "First name: " + fields[MRTDKeys.SecondaryId] + fieldDelim +
                                        "Date of birth: " + fields[MRTDKeys.DateOfBirth] + fieldDelim +
                                        "Sex: " + fields[MRTDKeys.Sex] + fieldDelim +
                                        "Nationality: " + fields[MRTDKeys.Nationality] + fieldDelim +
                                        "Date of Expiry: " + fields[MRTDKeys.DateOfExpiry] + fieldDelim +
                                        "Document Code: " + fields[MRTDKeys.DocumentCode] + fieldDelim +
                                        "Document Number: " + fields[MRTDKeys.DocumentNumber] + fieldDelim +
                                        "Issuer: " + fields[MRTDKeys.Issuer] + fieldDelim +
                                        "Opt1: " + fields[MRTDKeys.Opt1] + fieldDelim +
                                        "Opt2: " + fields[MRTDKeys.Opt2] + fieldDelim;

            } else if (recognizerResult.resultType == "EUDL result") {
                            
                var fields = recognizerResult.fields
                // EUDLKeys are keys from keys/eudl_keys.js
                resultsFormattedText += /** Personal information */
                                        "First name: " + fields[EUDLKeys.FirstName] + fieldDelim +
                                        "Last name: " + fields[EUDLKeys.LastName] + fieldDelim +
                                        "Date of Expiry: " + fields[EUDLKeys.ExpiryDate] + fieldDelim +
                                        "Issue Date: " + fields[EUDLKeys.IssueDate] + fieldDelim +
                                        "Driver Number: " + fields[EUDLKeys.DriverNumber] + fieldDelim +
                                        "Address: " + fields[EUDLKeys.Address] + fieldDelim +
                                        "Birth Data: " + fields[EUDLKeys.BirthData] + fieldDelim;

            } else if (recognizerResult.resultType == "MyKad result") {
        
                var fields = recognizerResult.fields
                // MYKADKeys are keys from keys/mykad_keys.js
                resultsFormattedText += /** Personal information */
                                        "Full name: " + fields[MYKADKeys.FullName] + fieldDelim +
                                        "NRIC Number: " + fields[MYKADKeys.NricNumber] + fieldDelim +
                                        "Address: " + fields[MYKADKeys.Address] + fieldDelim +
                                        "City: " + fields[MYKADKeys.AddressCity] + fieldDelim +
                                        "State: " + fields[MYKADKeys.AddressState] + fieldDelim +
                                        "Street: " + fields[MYKADKeys.AddressStreet] + fieldDelim +
                                        "Zip code: " + fields[MYKADKeys.AddressZipCode] + fieldDelim +
                                        "Date of birth: " + fields[MYKADKeys.DateOfBirth] + fieldDelim +
                                        "Religion: " + fields[MYKADKeys.Religion] + fieldDelim +
                                        "Sex: " + fields[MYKADKeys.Sex] + fieldDelim;

            } else if (recognizerResult.resultType == "DocumentFace result") {
                // document face recognizer returns only images
            }
            resultsFormattedText += '\n';
            }
            // image is returned as base64 encoded JPEG, we expect resultImageCorpped because we have activated obtaining of cropped images (shouldReturnCroppedImage: true)
            // to obtain image from successful scan, activate option (shouldReturnSuccessfulImage: true) and get is with scanningResult.resultImageSuccessful
            this.setState({ showImage: scanningResult.resultImageCropped, resultImage: 'data:image/jpg;base64,' + scanningResult.resultImageCropped, results: resultsFormattedText});
        }
        } catch(error) {
            this.setState({ showImage: false, resultImage: '', results: error.message});
        }
    }

    render() {
    
            let displayImage = this.state.resultImage;
                let displayFields = this.state.results;
                let licenseKeyErrorMessage = this.state.licenseKeyErrorMessage;
                return (
                <Container>
                  <Content>
                  <Card>
                    <Text style={styles.label}>Scan card</Text>
                    <View style={styles.buttonContainer}>
                      <Button light onPress={this.scan.bind(this)}>
                         <Text> Scan Here </Text>
                      </Button>
                    </View>
                    <Input>

                    </Input>
                    <Text>
                        {this.state.lastname}
                    </Text>

           <Text style={styles.results}>{displayFields}</Text>

                    
                    </Card>
                <Card >
                    <TouchableOpacity onPress = {() => {this.toResponseOne()}}>
                      <CardItem>
                        <Text style={{width:'100%',height:'100%'}}>
                           Question 1
                        </Text>
                   </CardItem>
                    </TouchableOpacity>
                </Card>


                <Card >
                    <TouchableOpacity onPress = {() => {this.toPreview()}}>
                      <CardItem>
                        <Text style={{width:'100%',height:'100%'}}>
                            Preview
                        </Text>
                   </CardItem>
                    </TouchableOpacity>
                </Card>
                    
                 </Content>
                 
                 </Container>
                );
       
      }
     
}


Information.propTypes={
    navigator: PropTypes.object
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50
  },
  buttonContainer: {
    margin: 20
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  results: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  imageResult: {
    flex: 1,
    flexShrink: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});

export default connect()(Information);