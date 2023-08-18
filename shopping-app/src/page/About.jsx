import React from 'react'
import { Outlet } from 'react-router-dom'

export function About() {
  return (
    <>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </>
  )
}

export function Member() {
  <>
    <h4>멤버</h4>
  </>
}

export function Location() {
  <>
    <h4>location</h4>
  </>
}