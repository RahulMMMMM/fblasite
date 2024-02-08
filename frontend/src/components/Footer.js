

export default function Footer(){

    return(
        <div className="text-gray-400 flex flex-col items-center border-t border-gray-300 border-opacity-20 p-[20px] space-y-8">
            <div className="flex flex-row text-left space-x-10">
                <div>
                    <strong>Get to Know Us</strong>
                    <ul>
                        <li><a >About us</a></li>
                        <li><a>Plato Newsletter</a></li>
                        <li><a>Accessibility</a></li>
                        <li><a>Sustainibility</a></li>
                    </ul>
                </div>
                <div>
                    <strong>Support & Services</strong>
                    <ul>
                        <li><a>Visit our Support Center</a></li>
                        <li><a>Talk with an Expert</a></li>
                        <li><a>Job Support Plans</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-8" > 
                <div>
                    <a><h6>Terms & Conditions</h6></a>
                    <a><h6>Privacy Policy</h6></a>
                    <a><h6>Don't Sell My Info</h6></a>
                </div>
                <div>
                    <h6>© Plato.com, Inc, and other affiliates</h6>
                </div>
            </div>
        </div>
        
    )
}