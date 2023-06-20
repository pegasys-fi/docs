import OriginalDocSidebarItem from '@theme-original/DocSidebarItem'
import React from 'react'

const DOCUSAURUS_LINK_ITEM_TYPE = 'link'

export default function DocSidebarItem(props: { item }) {
  return (
    <>
      {/* Required for onClick to register */}
      <div
        onClick={(event) => {
          //  Prevents the analytics event from being fired for encapsulating menu items, limiting to only the most granular element
          event.stopPropagation()
        }}
      >
        <OriginalDocSidebarItem {...props} />
      </div>
    </>
  )
}
