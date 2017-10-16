# Prudential-App-Challenge

#### Libraries used for this project

**Styling**
http://nativebase.io/

**Navigation**
https://wix.github.io/react-native-navigation/#/

**Redux**
https://github.com/reactjs/redux

**React Redux**
https://github.com/reactjs/react-redux

**Text to speech**
https://github.com/ak1394/react-native-tts

**speech to text**
https://github.com/wenkesj/react-native-voice


##### What this does
This was done during a hackathon at Rutgers for Prudential's challenge. It was made to make filling out tedious entries such as first name, last name, city, state, address, height, etc.
for forms or insurance applications
much easier by grabbing the information from scanning a person's ID, such as a driver license. You can also answer medical questions through speech and have the question be read to you from your phone.


##### Disclaimer
I have not tested this on android throroughly (I didn't have an android device on me), but since it is react-native it should run on the android device.

I ran the prototype on an iphone 6 device

**Include a team signing in xcode**

![Here is an image for reference](https://cl.ly/2k2T1v082z0F)

The file to open in xcode can be found through this path **PrudentialHack/ios/PrudentialHack.xcworkspace** make sure you complete this so you can run the device on iOS.

##### Installation to run

```
$ npm install
```

```
$ react-native link
```

##### Folder Structure:

```

/src
  --/actions
     actiontypes.js
     index.js
  --/components
     --/screens
        Information.js
        preview.js
        responseOne.js
        screens.js
        button.png
  --/reducers
     index.js
     infoReducer.js
 app.js
 
```
