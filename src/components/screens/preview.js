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
import { Container, Header, Content, Card, CardItem, Text, Body,List,ListItem, Button, Input } from 'native-base';

export  class Preview extends Component {
    render() {
        return(
            <Container>
                <Content>
                    <Card>
                    <CardItem>
                        <Body>
                        <Text>
                            Last Name:{this.props.lastname} 
                        
                            First Name: {this.props.firstname}
                            eye: {this.props.eye}
                            height: {this.props.height}
                            street: {this.props.street}
                            city: {this.props.city}
                            state: {this.props.state}
                            Date of Birth: {this.props.dob}
                            response to quesiton 1: {this.props.response}
                        

                    </Text>
                    </Body>
                    </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }


}

function mapStateToProps(state) {
    return {
      lastname: state.info.lastname,
      firstname: state.info.firstname,
      eye: state.info.eye,
      height:state.info.height,
      city:state.info.city,
      state:state.info.state,
      street:state.info.street,
      dob:state.info.dob,
      response:state.info.response
    };
  }
  
  Preview.propTypes={
    navigator: PropTypes.object
  };
  
  export default connect(mapStateToProps)(Preview);
  