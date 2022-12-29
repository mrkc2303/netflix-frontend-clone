import React from 'react'
import Header from './Header'
import EmailForm from './EmailForm';

function Hero() {
  return (
    <div className="hero effect8">
        <Header />
        <div className="heroCardBase">
            <div className="heroCard">
                <h1 className="heroTitle">
                    Unlimited movies, TV shows and more.
                </h1>
                <h2>
                    Watch anywhere. Cancel anytime.
                </h2>
                <EmailForm />
            </div>
        </div>
    </div>
  )
}

export default Hero