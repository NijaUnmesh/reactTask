import React from 'react'

export const Features = () => {
  const features = [
    "Component-Based Architecture – UI is divided into reusable, independent components.",
    "Virtual DOM – Improves performance by updating only the changed parts of the UI.",
    "JSX (JavaScript XML) – Lets you write HTML-like code inside JavaScript for better readability.",
    "One-Way Data Binding – Ensures predictable data flow and easier debugging.",
    "Reusable Components – Promotes code reuse and faster development.",
    "Declarative UI – Makes the code more predictable and easier to debug.",
    "React Hooks – Allow you to use state and lifecycle features in functional components.",
    "Cross-Platform Support – With React Native, you can build mobile apps using the same React concepts."
  ];

  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Features</h1>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
        {features.map((feature, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
