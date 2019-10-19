import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function DrawPage() {
  return (
    <div className="container">
      <h1>This is the draw page</h1>
      <p>
        <Link to="/taniarascia">taniarascia</Link> on GitHub.
      </p>
    </div>
  )
}