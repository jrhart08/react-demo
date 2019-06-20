import React, { useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'

export default function Modal({ close }) {
  const ref = useRef(null)
  useOnClickOutside(ref, close)

  return <div ref={ref}>{'Modal content'}</div>
}
