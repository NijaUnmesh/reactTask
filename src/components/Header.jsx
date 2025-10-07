import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/assets/react.svg'}>React</Link>
            </nav>
        </div>

    )
}

