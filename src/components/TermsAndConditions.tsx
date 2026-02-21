import React from 'react';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-warm-white text-charcoal">
            <Navbar />

            <main className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-charcoal">Terms and Conditions for Memoria Production LLC</h1>

                <div className="space-y-8 text-lg leading-relaxed text-charcoal/80">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using our Site or Service, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">2. Services Provided</h2>
                        <p>
                            Memoria Production LLC provides a platform that connects Customers for photography engagements. The Service includes but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Booking photography sessions,</li>
                            <li>Processing payments,</li>
                            <li>Delivering digital photographs,</li>
                            <li>Providing customer support.</li>
                        </ul>
                        <p className="mt-4">
                            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">3. User Accounts</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-charcoal">3.1 Registration</h3>
                                <p>To access certain features, you may need to create an account. You agree to provide accurate, complete, and up-to-date information when registering.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">3.2 Account Security</h3>
                                <p>You are responsible for maintaining the confidentiality of your account credentials. Any unauthorized access or use must be reported to us immediately.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">3.3 Account Termination</h3>
                                <p>Memoria Production LLC reserves the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or unlawful behavior.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">4. Payments and Fees</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-charcoal">4.1 Pricing</h3>
                                <p>All prices are listed on our Site and are subject to change without notice. Taxes may apply based on your location and applicable U.S. tax laws.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">4.2 Payment Processing</h3>
                                <p>Payments for photography services are processed through third-party payment providers (e.g., Stripe, PayPal). By making a payment, you agree to the provider’s terms and policies. Memoria Production LLC is not responsible for payment failures due to technical issues, insufficient funds, or third-party service disruptions.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">4.3 Refund Policy</h3>
                                <p>Refunds may be issued under specific conditions outlined in our refund policy:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Cancellations made at least 48 hours before the scheduled session are eligible for a full refund.</li>
                                    <li>Cancellations within 48 hours may be subject to a partial refund or non-refundable deposit.</li>
                                    <li>Refunds will be processed within 10 business days to the original payment method.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">5. Responsibilities</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-charcoal">5.1 Professional Conduct</h3>
                                <p>We strive to provide high-quality services and conduct ourselves professionally at all times.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">5.2 Intellectual Property</h3>
                                <p>Photographers retain the copyright to their images but grant Memoria Production LLC rights to display and promote their work on our platform.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">6. Customer Responsibilities</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-charcoal">6.1 Booking</h3>
                                <p>Customers must provide accurate booking details and comply with any agreed-upon terms.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">6.2 Usage Rights</h3>
                                <p>Customers may use photographs for personal purposes unless otherwise agreed. Any commercial usage must be explicitly authorized.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-charcoal">6.3 Cancellations</h3>
                                <p>Customers must adhere to the cancellation policies outlined on our Site. Late cancellations may be subject to penalties or non-refundable deposits.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">7. Dispute Resolution</h2>
                        <p>
                            Before escalating disputes, Customers and Memoria Production LLC must attempt to resolve issues directly. If unresolved, disputes must be handled through appropriate legal channels.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">8. Intellectual Property</h2>
                        <p>
                            All content on the Site, including text, graphics, logos, software, and images, is owned by Memoria Production LLC or its licensors and is protected under U.S. intellectual property laws. Users may not reproduce, distribute, or modify any content without explicit written permission from Memoria Production LLC.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">9. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by U.S. law, Memoria Production LLC is not liable for any indirect, incidental, special, or consequential damages arising from:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Your use of the Service,</li>
                            <li>Errors, interruptions, or security breaches,</li>
                            <li>Loss of data,</li>
                            <li>Third-party service provider failures.</li>
                        </ul>
                        <p className="mt-4">
                            Memoria Production LLC’s total liability shall not exceed the amount paid by you for our services in the past six (6) months. We expressly exclude liability for lost profits, indirect damages, or third-party misconduct.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">10. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold Memoria Production LLC, its affiliates, employees, and partners harmless from any claims, losses, damages, liabilities, and legal fees arising from:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Your breach of these Terms,</li>
                            <li>Your use of the Service,</li>
                            <li>Any disputes between you and third parties.</li>
                        </ul>
                    </section>

                    <section className="bg-warm-gold/10 p-8 rounded-2xl border border-warm-gold/20">
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">11. Contact Us</h2>
                        <div className="space-y-2">
                            <p><strong>Memoria Production LLC</strong></p>
                            <p>EIN: 38-4382098</p>
                            <p>Email: <a href="mailto:info@memoriaproduction.com" className="text-warm-gold hover:underline">info@memoriaproduction.com</a></p>
                            <p>Phone: <a href="tel:+13239902599" className="text-warm-gold hover:underline">+1 (323) 990-2599</a></p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
