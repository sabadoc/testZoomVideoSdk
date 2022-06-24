import React from 'react';

import './App.css';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { ZoomMtg } from '@zoomus/websdk'


ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');
const KJUR = require('jsrsasign')

function App() {




  // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  var signatureEndpoint = 'http://localhost:4000'
  // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
  var SDK_KEY = 'l4sYgLGyQtLmg7Dna1HU6C7m7G1xWpqn465d'
  var SDK_SECRET = 'QAj7B2ZcUltsV0D5zsb0sQQ7NpYcknxXE7Ze'
  var meetingNumber = '8037151899'
  var role = 0
  var userName = 'React'
  var userEmail = ''
  var password = ''
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/meetings#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/webinars#join-registered
  var registrantToken = ''
  var leaveUrl = 'http://localhost:3000'
  const client = ZoomMtgEmbedded.createClient();

  function getSignature(e) {
    e.preventDefault();
  
    
    //startMeeting(generateSignature(sdkKey, sdkSecret, meetingNumber, role))
    
    fetch(signatureEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    }).then(res => res.json())
    .then(response => {
      joinMeeting(response.signature)
      //startMeeting(response.signature)
    }).catch(error => {
      console.error(error)
    })
  }

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'
    try {
      ZoomMtg.init({
        leaveUrl: leaveUrl,
        success: (success) => {
          console.log(success)
  
          ZoomMtg.join({
            sdkKey: SDK_KEY,
            signature: signature, // role in SDK Signature needs to be 0
            meetingNumber: meetingNumber,
            userName: userName,
            success: (success) => {
              console.log(success)
            },
            error: (error) => {
              console.log(error)
            }
          })
  
        },
        error: (error) => {
          console.log(error)
        }
      })
    } catch(e) {
      console.log(e);
    }
  }

  // https://www.npmjs.com/package/jsrsasign
  function generateSignature() {
  
    ZoomMtg.generateSDKSignature({
      meetingNumber: meetingNumber,
      sdkKey: SDK_KEY,
      sdkSecret: SDK_SECRET,
      role: role,
      success: function (res) {
        joinMeeting(res.result)
        console.log(res.result);
      },
    });

  }
  function joinMeeting(signature){
    const meetingSDKElement = document.getElementById('meetingSDKElement')
    let apiKey = 'xNGp3ifeTqa1GZ6Ro5jI_Q';
    client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: 'en-US',
      customize: {
        meetingInfo: [
          'topic',
          'host',
          'mn',
          'pwd',
          'telPwd',
          'invite',
          'participant',
          'dc',
          'enctype',
        ],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button')
              }
            }
          ]
        }
      }
    })

    client.join({
      sdkKey: apiKey,
      signature: signature, // role in SDK Signature needs to be 0
      meetingNumber: meetingNumber,
      password: password,
      userName: userName
    })
}
  return (
    <div className="App">
      <div id="meetingSDKElement">

      </div>
    <main>
      <h1>Zoom Meeting SDK Sample React</h1>
      <button onClick={getSignature}>Join Meeting</button>
    </main>
  </div>
  );
}

export default App;