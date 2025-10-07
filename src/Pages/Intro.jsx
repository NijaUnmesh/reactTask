import React from 'react'
import ReactLogo from '../assets/react.svg';


export const Intro = () => {
  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <img src={ReactLogo} alt="React Logo"  style={{ width: '100px' }} />
      <h1 className="text-center">Intro to React ⚛️</h1>
      
      <div style={{ textAlign: 'left', maxWidth: '700px', margin: '20px auto', lineHeight: '1.6' }}>
        <p>
          React is a JavaScript library developed by Facebook (now Meta) for building dynamic and interactive user interfaces. It allows developers to create reusable UI components, manage state efficiently, and update the UI reactively when data changes. React follows a component-based architecture, making applications modular, maintainable, and scalable.
        </p>

        <p><strong>Key features include:</strong></p>
        <ul>
          <li>Virtual DOM: Improves performance by updating only the parts of the UI that change.</li>
          <li>JSX (JavaScript XML): Lets you write HTML-like syntax within JavaScript.</li>
          <li>One-way Data Binding: Ensures predictable data flow.</li>
          <li>Reusable Components: Encourages modular code for faster development.</li>
        </ul>

        <p>
          React is widely used for web applications, dashboards, e-commerce sites, and more due to its speed, flexibility, and developer-friendly ecosystem.
        </p>
      </div>
    </div>
  )
}

