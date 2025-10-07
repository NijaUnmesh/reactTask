import React from 'react'

export const Advantages = () => {
  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Advantages of React</h1>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
        <li>High Performance – The Virtual DOM makes updates fast and efficient.</li>
        <li>Reusable Components – Saves time and ensures consistent design.</li>
        <li>Easy to Learn and Use – Simple syntax (JSX) and strong community support.</li>
        <li>Strong Community Support – Backed by Meta and a large developer base.</li>
        <li>SEO-Friendly – React can render on the server, improving SEO performance.</li>
        <li>Cross-Platform Development – Use React Native to build mobile apps with the same logic.</li>
        <li>Easy Maintenance – Component-based structure makes code cleaner and easier to manage.</li>
      </ul>
    </div>
  );
};
