import React from 'react'
import PropTypes from 'prop-types'

import { ILayoutProps } from './Dropzone'

const Layout = (props: ILayoutProps) => {
  const { dropzoneProps, children } = props

  return <div {...dropzoneProps}>{children}</div>
}

Layout.propTypes = {
  dropzoneProps: PropTypes.shape({
    ref: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
    onDragEnter: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDragLeave: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.element,
  extra: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    reject: PropTypes.bool.isRequired,
    dragged: PropTypes.arrayOf(PropTypes.any).isRequired,
    accept: PropTypes.string.isRequired,
    multiple: PropTypes.bool.isRequired,
    minSizeBytes: PropTypes.number.isRequired,
    maxSizeBytes: PropTypes.number.isRequired,
    maxFiles: PropTypes.number.isRequired,
    onFiles: PropTypes.func.isRequired,
    onCancelFile: PropTypes.func.isRequired,
    onRemoveFile: PropTypes.func.isRequired,
    onRestartFile: PropTypes.func.isRequired,
  }).isRequired,
}

export default Layout
