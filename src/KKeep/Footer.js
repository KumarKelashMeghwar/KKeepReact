import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer>Copyright @ {year} </footer>
        </div>
    )
}

export default Footer
