import React from 'react'

export function Error({ isShort = false }) {
  return (
    <div className="precise-quote__success">
      <div className="precise-quote__step precise-quote__step_only-form">
        <div className="row">
          <div className={!isShort ? 'col-lg-5 offset-lg-1' : 'col-lg-10 offset-lg-1'}>
            <div className="precise-quote__contact-us_left">
              <h2 className="heading-h2 precise-quote__heading">Error</h2>
              <p className="sub-title">Something went wrong</p>
            </div>
          </div>
          {!isShort && (
            <div className="col-lg-6">
              <div className="precise-quote__contact-us_right">
                <div className="precise-quote__success-content">
                  <p className="sub-title precise-quote__heading">
                    Please try again later refresh page or contact us via email:
                  </p>
                  <p className="sub-title">
                    <a href="mailto:hello@bsg.tech" target="_blank">
                      hello@bsg.tech
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
