import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({ children }) {

    return (
        <>
            <Header />
            <div className="main-container">
            {children}
            <Footer />
            </div>

        </>
    )
}

export default Base