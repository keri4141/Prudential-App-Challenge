import React, { Component } from 'react';
import {
      AppRegistry,
      Platform,
      StyleSheet,
      TouchableHighlight,
      TouchableOpacity,
      View,
      Image,
      ScrollView,
      Button
    } from 'react-native';

import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import * as  appActions from '../../actions/index';
import {connect} from 'react-redux';

import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export class ResponseOne extends Component {

  constructor(props) {
            super(props);
            this.state = {
                          recognized: '',
                          pitch: '',
                          error: '',
                          end: '',
                          started: '',
                          results: [],
                          partialResults: []};
            Voice.onSpeechStart = this.onSpeechStart.bind(this);
            Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
            Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
            Voice.onSpeechError = this.onSpeechError.bind(this);
            Voice.onSpeechResults = this.onSpeechResults.bind(this);
            Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
            Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
          }
        
        //speech
        /*componentWillUnmount() {
          Voice.destroy().then(Voice.removeAllListeners);
        }*/
        
        onSpeechStart(e) {
          this.setState({
            started: '√',
          });
        }
        
        onSpeechRecognized(e) {
          this.setState({
            recognized: '√',
          });
        }
        
        onSpeechEnd(e) {
          this.setState({
            end: '√',
          });
        }
        
        onSpeechError(e) {
          this.setState({
            error: JSON.stringify(e.error),
          });
        }
        
        onSpeechResults(e) {
          this.setState({
            results: e.value,
          });
          
        }
        
        onSpeechPartialResults(e) {
          this.setState({
            partialResults: e.value,
          });
        }
        
        onSpeechVolumeChanged(e) {
          this.setState({
            pitch: e.value,
          });
        }
        
        async _startRecognizing(e) {
          this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: ''
          });
          try {
            await Voice.start('en-US');
          } catch (e) {
            console.error(e);
          }
        }
        
        async _stopRecognizing(e) {
          try {
            await Voice.stop();
            this.props.dispatch(appActions.Saved(this.state.results));
          } catch (e) {
            console.error(e);
          }
        }
        
        async _cancelRecognizing(e) {
          try {
            await Voice.cancel();
          } catch (e) {
            console.error(e);
          }
        }
        
        async _destroyRecognizer(e) {
          try {
            await Voice.destroy();
          } catch (e) {
            console.error(e);
          }
          this.setState({
            recognized: '',
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: ''
          });
        }
       Question_1 = () => {
        Tts.speak("  Has a member of the medical profession ever treated you for or diagonised you high blood pressurech est pain a heart attack coronary artery disease a heart disease?");
       }     
    render() {
        return(
            <Container>
                <Content>
                <Card>
                    <TouchableOpacity onPress = {() => {this.Question_1()}}>
                    <CardItem>
                        <Text>
                     Has a member of the medical profession ever treated you for or diagonised you
                     high blood pressure, chest pain, a heart attack, coronary artery disease, a heart disease?
                     </Text>
                    </CardItem>
                    </TouchableOpacity>
                </Card>

                    <Card>
                    <CardItem>
                    {this.state.results.map((result, index) => {
                        return (
                          <Text key={`result-${index}`}>
                            {result}
                          </Text>
                        )
                      })}
                    </CardItem>
         <Text
           style={styles.stat}>
          {`Started: ${this.state.started}`}
         </Text>
         <Text
           style={styles.stat}>
           {`Recognized: ${this.state.recognized}`}
         </Text>
         <Text
           style={styles.stat}>
           {`Error: ${this.state.error}`}
         </Text>

        
         <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
           <Image
             style={styles.button}
             source={require('./button.png')}
           />
         </TouchableHighlight>
         <TouchableHighlight onPress={this._stopRecognizing.bind(this)}>
           <Text
             style={styles.action}>
             Stop Recognizing
           </Text>
        </TouchableHighlight>

        

                    </Card>
                </Content>
            </Container>
        );
    }
}



ResponseOne.propTypes={
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
export default connect()(ResponseOne);
