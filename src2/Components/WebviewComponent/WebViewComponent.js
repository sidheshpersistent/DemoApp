import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { TestIds } from '../../Utils';

class WebViewComponent extends Component {

  render() {
    return (
      <WebView
        testID={TestIds.custom_web_page}
        source={{
          uri: this.props.route.params.url ? this.props.route.params.url : null
        }} />
    )
  }
}
export default WebViewComponent