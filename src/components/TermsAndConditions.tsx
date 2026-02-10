import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsAndConditions: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="terms-container">
                <h1>Terms and Conditions for Memoria Production LLC</h1>
                <p>Welcome to Memoria Production LLC! These terms and conditions outline the rules and regulations for the use of our services.</p>
                <h2>1. Introduction</h2>
                <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Memoria Production LLC if you do not agree to take all of the terms and conditions stated on this page.</p>
                <h2>2. License</h2>
                <p>Unless otherwise stated, Memoria Production LLC and/or its licensors own the intellectual property rights for all material on Memoria Production LLC. All intellectual property rights are reserved. You may access this from Memoria Production LLC for your own personal use, subject to restrictions set in these terms and conditions.</p>
                <h2>3. User Comments</h2>
                <p>Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. Memoria Production LLC does not filter, edit, publish or review Comments prior to their presence on the website.</p>
                <h2>4. Hyperlinking to our Content</h2>
                <p>The following organizations may link to our Website without prior written approval:...</p>
                <h2>5. iFrames</h2>
                <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                <h2>6. Content Liability</h2>
                <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.</p>
                <h2>7. Your Privacy</h2>
                <p>Please read our Privacy Policy.</p>
                <h2>8. Reservation of Rights</h2>
                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.</p>
                <h2>9. Removal of links from our website</h2>
                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                <h2>10. Disclaimer</h2>
                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.</p>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;