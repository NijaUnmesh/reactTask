import React from 'react'

export const History = () => {
  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>History</h1>
      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
        <p><strong>2011:</strong> React was created by Jordan Walke, a software engineer at Facebook, to improve performance and simplify UI development.</p>
        <p><strong>2012:</strong> It was first used in Facebook’s News Feed.</p>
        <p><strong>2013:</strong> Facebook open-sourced React at JSConf US, making it available for developers worldwide.</p>
        <p><strong>2015:</strong> React gained massive popularity; Facebook introduced React Native for building mobile apps.</p>
        <p><strong>2017 onward:</strong> React evolved with major updates like Hooks (2019), Concurrent Mode, and Server Components.</p>
        <p><strong>Today:</strong> React is one of the most popular JavaScript libraries for building fast, scalable, and dynamic user interfaces.</p>
      </div>
    </div>
  );
};
