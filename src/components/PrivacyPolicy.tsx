import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Privacy Policy for Memoria Production LLC</h1>
                <p>This Privacy Policy outlines the types of personal information that is received and collected by Memoria Production LLC and how it is used.</p>
                <h2>Information We Collect</h2>
                <p>We may collect personal information such as your name, email address, and any other information you provide when you use our services.</p>
                <h2>Use of Information</h2>
                <p>The information we collect is used to improve our services and enhance your experience. We may use your personal information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you.</p>
                <h2>Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar tracking technologies to monitor activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                <h2>Data Security</h2>
                <p>We take reasonable measures to protect personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet, or method of electronic storage is 100% secure.</p>
                <h2>Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@memoriaproductionllc.com.</p>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;