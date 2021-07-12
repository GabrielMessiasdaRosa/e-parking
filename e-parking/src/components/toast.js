import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export default function Toast() {

    return createPortal(<div></div>, document.body)



}
