import React from 'react';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-warm-white text-charcoal">
            <Navbar />

            <main className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-charcoal">Privacy Policy for Memoria Production LLC</h1>

                <div className="space-y-8 text-lg leading-relaxed text-charcoal/80">
                    <p>
                        The Personal Data we collect varies based on who you are and what you choose to share with us. When you contact us or interact with our Service, we collect categories of Personal Data as follows:
                    </p>

                    <div className="bg-taupe/5 rounded-xl p-6 border border-warm-gold/20">
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">1. Information We Collect</h2>
                        <div className="space-y-4">
                            <div>
                                <strong className="text-warm-gold">Account Data</strong>
                                <p>Includes name, email, phone number, mailing address, and profile information.</p>
                            </div>
                            <div>
                                <strong className="text-warm-gold">Payment Data</strong>
                                <p>Includes billing details, payment card information, and tax ID numbers.</p>
                            </div>
                            <div>
                                <strong className="text-warm-gold">Photograph Data</strong>
                                <p>Includes details of booked shoots (time, place) and stored photographs.</p>
                            </div>
                            <div>
                                <strong className="text-warm-gold">Communication Data</strong>
                                <p>Includes information from customer support interactions, surveys, and feedback.</p>
                            </div>
                            <div>
                                <strong className="text-warm-gold">Social Media Data</strong>
                                <p>Includes information shared via social media platforms.</p>
                            </div>
                            <div>
                                <strong className="text-warm-gold">Third-Party Data</strong>
                                <p>Includes information received from third parties.</p>
                            </div>
                            <div>
                                <strong className="text-warm-gold">Online Activity Data</strong>
                                <p>Includes log data, cookies, device details, and browsing behavior.</p>
                            </div>
                        </div>
                    </div>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">2. How We Use Personal Data</h2>
                        <p>
                            We use Personal Data to provide the Service, including allowing Customers to book photoshoots, ensuring Photographers are paid, and facilitating the transmission of photographs. This processing is necessary to perform our contract with you.
                        </p>
                        <p className="mt-4">We also use Personal Data as necessary for the following legitimate business interests:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>To contact and communicate with you, including responding to your inquiries, comments, feedback, or questions.</li>
                            <li>To manage our relationship with you, including sending administrative information about changes to our terms, conditions, and policies.</li>
                            <li>To analyze how you interact with our Service and improve its content and functionality.</li>
                            <li>To administer and protect our business and the Site, prevent fraud, and ensure the security of our IT systems and networks.</li>
                            <li>To comply with legal obligations and protect our rights, privacy, safety, or property, and that of our affiliates, users, or third parties.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">3. How We Share and Disclose Personal Data</h2>
                        <p>In certain circumstances, we may share your Personal Data with third parties as follows:</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-taupe/5 p-4 rounded-lg">
                                <h3 className="font-bold text-warm-gold mb-2">Vendors</h3>
                                <p>Payment processors, hosting providers, analytics services, and customer support tools.</p>
                            </div>
                            <div className="bg-taupe/5 p-4 rounded-lg">
                                <h3 className="font-bold text-warm-gold mb-2">Business Transfers</h3>
                                <p>In case of a merger, acquisition, or business restructuring, your Personal Data may be transferred.</p>
                            </div>
                            <div className="bg-taupe/5 p-4 rounded-lg md:col-span-2">
                                <h3 className="font-bold text-warm-gold mb-2">Legal Compliance</h3>
                                <p>To comply with legal obligations or respond to lawful requests from public authorities.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">4. Data Retention</h2>
                        <p>
                            We retain Personal Data for as long as necessary for the purposes described in this Privacy Policy, while we have a legitimate business need, or as required by law. Specifically:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Account Data: Retained for the duration of your account plus 5 years.</li>
                            <li>Payment Data: Retained for 7 years for tax and audit purposes.</li>
                            <li>Photograph Data: Retained for 1 year unless otherwise agreed.</li>
                            <li>Communication Data: Retained for 3 years.</li>
                            <li>Background Check Data: Retained for 5 years.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">5. Your Privacy Rights</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">U.S. Residents’ Rights</h3>
                                <p>If you are a resident of the U.S., including California, you have the following rights under applicable laws such as the California Consumer Privacy Act (CCPA):</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>The right to request details about collected Personal Data.</li>
                                    <li>The right to request deletion of Personal Data.</li>
                                    <li>The right to be free from discrimination for exercising privacy rights.</li>
                                    <li>The right to opt out of data sales (if applicable).</li>
                                    <li>The right to opt-in or opt-out of arbitration agreements in compliance with California-specific consumer protection laws.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">European Residents’ Rights (GDPR Compliance)</h3>
                                <p>If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>The right to access and rectify your Personal Data.</li>
                                    <li>The right to request data deletion or restriction.</li>
                                    <li>The right to object to data processing.</li>
                                    <li>The right to data portability.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">6. Children’s Privacy</h2>
                        <p>
                            Our Service is not directed to children under 13 years of age, and we do not knowingly collect data from children under 13 in compliance with the Children’s Online Privacy Protection Act (COPPA). If you believe a minor has provided Personal Data, contact us to request removal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">7. International Data Transfers</h2>
                        <p>
                            Your Personal Data may be stored and processed in the U.S. We implement appropriate safeguards for international data transfers as required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">8. Cookies & Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies (e.g., Google Analytics, Facebook Pixel) to analyze website traffic and enhance user experience. By using our Site, you consent to our cookie practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">9. Data Security</h2>
                        <p>
                            We follow industry standards to protect Personal Data from unauthorized access, loss, or misuse. However, no online transmission is fully secure. Users should take precautions when sharing information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">10. Refunds and Payment Processing Liability</h2>
                        <p>
                            If you purchase services through our Site, payment processing is handled by third-party vendors. We are not responsible for unauthorized transactions or processing errors. Refunds, if applicable, are subject to our refund policy outlined on our Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically. Continued use of our Service implies acceptance of updates.
                        </p>
                    </section>

                    <section className="bg-warm-gold/10 p-8 rounded-2xl border border-warm-gold/20">
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">12. Contact Us</h2>
                        <p className="mb-4">
                            For questions about this Privacy Policy or to exercise your rights, contact us at:
                        </p>
                        <div className="space-y-2">
                            <p><strong>Memoria Production LLC</strong></p>
                            <p>Email: <a href="mailto:info@memoriaproduction.com" className="text-warm-gold hover:underline">info@memoriaproduction.com</a></p>
                            <p>Phone: <a href="tel:+13239902599" className="text-warm-gold hover:underline">+1 (323) 990-2599</a></p>
                        </div>
                        <p className="mt-6 text-sm italic opacity-80">
                            Memoria Production is dedicated to making it seamless for anyone to book a video or photo shoot at any given time.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
