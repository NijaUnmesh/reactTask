import React from 'react'

export const Founder = () => {
  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1 className="text-center" style={{ marginBottom: '20px' }}>
        Founder ⚛️
      </h1>

      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          border: '2px solid #61dafb',
          borderRadius: '15px',
          backgroundColor: '#f0f8ff'
        }}
      >
        

        <p>The founder of React is <strong>Jordan Walke</strong>, a software engineer at Facebook (now Meta).</p>
        <p>He created React in 2011, and it was open-sourced by Facebook in 2013.</p>
        <p>React was originally built to make Facebook’s UI faster and more efficient by introducing the concept of the <strong>Virtual DOM</strong>.</p>
      </div>
    </div>
  );
};
