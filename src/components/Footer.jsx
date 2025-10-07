import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-content">
        <p className='text-center bg-light'>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
