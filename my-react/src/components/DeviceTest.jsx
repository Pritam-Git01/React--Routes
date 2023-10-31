import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';

const DeviceTest = () => {
  return (
    <div>
      <h1>Device Type Detection</h1>
      <p>Our app is available for:</p>
      {isAndroid && (
        <a href="https://play.google.com/store/apps/details?id=com.legal251.in">
          Download our Android app
        </a>
      )}
      {isIOS && (
        <a href="https://apps.apple.com/us/app/YOUR_APP_NAME/idYOUR_APP_ID">
          Download our iOS app
        </a>
      )}
      {!isAndroid && !isIOS && (
        <p>Sorry, we couldn't determine your device type. Please download our app from the respective app store.</p>
      )}
    </div>
  );
};

export default DeviceTest;