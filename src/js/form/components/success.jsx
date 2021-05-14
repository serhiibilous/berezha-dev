import React from 'react'

export function Success({ isShort = false, bgColor = '#e6f1ff' }) {
  return (
    <div className="precise-quote__success" style={{ background: bgColor }}>
      <div className="precise-quote__step precise-quote__step_only-form" style={{ height: isShort && 'auto' }}>
        <div className="row">
          <div className={!isShort ? 'col-lg-5 offset-lg-1' : 'col-lg-10 offset-lg-1'}>
            <div className="precise-quote__contact-us_left">
              <h2 className="heading-h2 precise-quote__heading">Thank you!</h2>
              <p className="sub-title precise-quote__success-sub-title">
                Your message is received.
                <br />
                Our expert will contact you shortly.
              </p>
            </div>
          </div>
          {!isShort && (
            <div className="col-lg-6">
              <div className="precise-quote__contact-us_right">
                <div className="precise-quote__success-content">
                  <p className="sub-title precise-quote__success-sub-title">Wait productively – download our report</p>
                  <div className="precise-quote__success-info">
                    <p className="heading-h3">Тop 10 Vulnerabilities</p>
                    <p className="body-text-1">We discover during Penetration Testing</p>
                    <div className="precise-quote__success-info-button">
                      <a
                        href="/public/Top-10-security-vulnerabilities-BSG-2020-Report.pdf"
                        className="precise-quote__success-link body-text-2"
                        download={true}
                        target="_blank">
                        Download Report <i className="icon-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
