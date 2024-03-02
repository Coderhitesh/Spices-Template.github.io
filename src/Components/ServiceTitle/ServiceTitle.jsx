import React from 'react'
import './serviceTitle.css'

function ServiceTitle() {
    return (
        <section className='servicetitle-section'>
            <div className="container">
                <div className="same-col col-1">
                    <div className="img">
                        <i class="ri-bus-fill"></i>
                        <div className="hover-border">

                        </div>
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>With Rs. 7999 or more orders</p>
                    </div>
                </div>
                <div className="same-col col-2">
                    <div className="img">
                        <i class="ri-refresh-line"></i>
                        <div className="hover-border">

                        </div>
                    </div>
                    <div className="detail">
                        <h3>Free Refund</h3>
                        <p>100% Refund Within 3 days</p>
                    </div>
                </div>
                <div className="same-col col-3">
                    <div className="img">
                        <i class="ri-phone-fill"></i>
                        <div className="hover-border">

                        </div>
                    </div>
                    <div className="detail">
                        <h3>Support 24x7 Hrs</h3>
                        <p>+911234567899</p>
                    </div>
                </div>
                <div className="same-col col-4">
                    <div className="img">
                        <i class="ri-earth-fill"></i>
                        <div className="hover-border">

                        </div>
                    </div>
                    <div className="detail">
                        <h3>International Shipment</h3>
                        <p>+911234567899</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceTitle
