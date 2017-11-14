/* @flow */

import React from 'react'
import { ScrollView, View } from 'react-native'
import KeyboardAwareMixin from './KeyboardAwareMixin'
var createReactClass = require('create-react-class');


const KeyboardAwareScrollView = createReactClass({
  mixins: [KeyboardAwareMixin],

  componentWillMount: function () {
    this.setViewIsInsideTabBar(this.props.viewIsInsideTabBar)
    this.setResetScrollToCoords(this.props.resetScrollToCoords)
  },

  render: function () {
    return (
      <ScrollView
        ref='_rnkasv_keyboardView'
        keyboardDismissMode='interactive'
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={0}
        {...this.props}
        onScroll={e => {
          this.handleOnScroll(e)
          this.props.onScroll && this.props.onScroll(e)
        }}
        >
        {this.props.children}
        <View style={{paddingBottom: this.state.keyboardSpace}} />
      </ScrollView>
    )
  },
})

export default KeyboardAwareScrollView
