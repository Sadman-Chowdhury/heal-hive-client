import React from 'react';

const Support = () => {
    return (
        <div className=" mt-36 bg-gray-100 rounded-2xl">
                <div className=" p-16">
                    <h2 className="text-4xl font-bold text-red-500 text-center mb-4">User Support and Assistance</h2>
                    <p className="text-lg text-gray-800 text-center mb-12">We're here to help you every step of the way. If you have any questions, concerns, or need assistance, don't hesitate to reach out to our dedicated support team. Here's how you can get in touch:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li>
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Contact Us</h3>
                            <p className="text-gray-800">For general inquiries or assistance, you can contact our support team via email at <a className="text-blue-500" href="">support@healhice.com</a> or by filling out the contact form on our website.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-red-500 mb-2">FAQs</h3>
                            <p className="text-gray-800">Check out our Frequently Asked Questions (FAQs) for answers to common queries and troubleshooting tips. You might find the solution to your issue right there!</p>
                        </li>
                    </ul>
                </div>
            {/* FAQ */}
                <div className="p-16 rounded-xl">
                <h1 className="text-3xl text-red-500 font-bold text-center mb-5">FAQs</h1>
                    <div className="border p-5 rounded-2xl bg-white">
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            How do I create an account?
                        </div>
                        <div className="collapse-content"> 
                            <p>To create an account, simply click on the 'Login' button at the top right corner of the page. You will find the register button at the bottom. Fill in your details and follow the prompts to complete the registration process.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Can I change my username?
                        </div>
                        <div className="collapse-content"> 
                            <p>Unfortunately, usernames cannot be changed once they've been set. However, you can update your display name, which is visible to other users.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            How do I contact customer support?
                        </div>
                        <div className="collapse-content"> 
                            <p>You can contact our customer support team by emailing support@healhive.com or by calling our toll-free number at 1-800-123-4567. Our team is available 24/7 to assist you.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            How can I book a consultation?
                        </div>
                        <div className="collapse-content"> 
                            <p>Login first. Then Go to "Service" page and click on the details of your required consultaion. You will find a book now button in the details page. Click it and fill out the form.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            How can i track by bookings?
                        </div>
                        <div className="collapse-content"> 
                            <p>If you have booked some consultations, you can go to the "Booked Service" page and you will see your bookings here with the status report.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            Is my personal information secure on your website?
                        </div>
                        <div className="collapse-content"> 
                            <p>Yes, we take the security and privacy of your personal information very seriously. Our website employs industry-standard encryption protocols to protect your data during transmission. We also have strict data protection measures in place to safeguard your information against unauthorized access or misuse. You can trust that your personal information is safe with us.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            Do you have a mobile app available?
                        </div>
                        <div className="collapse-content"> 
                            <p>No. The mobile app is still under development.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Support;