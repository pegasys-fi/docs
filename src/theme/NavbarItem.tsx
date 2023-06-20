import { useLocation } from '@docusaurus/router'
import OriginalNavBarItem from '@theme-original/NavbarItem'
import React from 'react'

enum ProtocolVersion {
  V1 = 'V1',
  V3 = 'V3',
}

const UNKNOWN_PROTOCOL_VERSION = 'UNKNOWN_PROTOCOL_VERSION'

const getSelectedDocVersion = (docVersion: string) => {
  switch (docVersion) {
    case ProtocolVersion.V1:
    case '2.0.0':
      return ProtocolVersion.V1
    // Default to the current doc version
    default:
      return ProtocolVersion.V3
  }
}

const getClassName = (className: string, version: string) => {
  return className + ' ' + version
}

export default function NavbarItem(props: { className: string; label: string }) {
  const { pathname } = useLocation()

  const docVersionFromPath = pathname.split('/')
  const selectedDocVersion = getSelectedDocVersion(docVersionFromPath[2])

  return (
    <>
      <OriginalNavBarItem {...props} className={getClassName(props.className, selectedDocVersion)} />
    </>
  )
}
