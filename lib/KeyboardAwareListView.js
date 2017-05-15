/* @flow */

import React, { PropTypes } from 'react'
import { ListView, View, Dimensions } from 'react-native'
import KeyboardAwareMixin from './KeyboardAwareMixin'

const KeyboardAwareListView = React.createClass({
  propTypes: {
    viewIsInsideTabBar: React.PropTypes.bool,
    resetScrollToCoords: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  },
  mixins: [KeyboardAwareMixin],

  componentWillMount: function () {
    this.setViewIsInsideTabBar(this.props.viewIsInsideTabBar)
    this.setResetScrollToCoords(this.props.resetScrollToCoords)
  },

  render: function () {
    return (
      <ListView
        ref='_rnkasv_keyboardView'
        keyboardDismissMode='interactive'
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={0}
        {...this.props}
        renderFooter={()=>
          <View style={{width: Dimensions.get("window").width, paddingBottom: this.state.keyboardSpace }}>
            {this.props.renderFooter ? this.props.renderFooter() : undefined }
          </View>
        }
        onScroll={e => {
          this.handleOnScroll(e)
          this.props.onScroll && this.props.onScroll(e)
        }}
      />
    )
  },
})

export default KeyboardAwareListView
