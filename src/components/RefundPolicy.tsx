import React from 'react';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-warm-white text-charcoal">
            <Navbar />
            <main className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-charcoal">Refund Policy for Memoria Production LLC</h1>
                <div className="space-y-8 text-lg leading-relaxed text-charcoal/80">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">1. General Policy</h2>
                        <p>At Memoria Production, we strive to provide exceptional service. This policy outlines the conditions under which refunds may be issued for our photography and videography services.</p>
                    </section>
                    <section className="bg-taupe/5 rounded-xl p-6 border border-warm-gold/20">
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">2. Retainer and Payments</h2>
                        <p>A <strong>50% non-refundable retainer</strong> is required to secure your session date and time. This ensures that we are exclusively available for your event and covers pre-production planning.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">3. Cancellation and Refunds</h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>Cancellations made more than 48 hours</strong> before the scheduled session: Eligible for a refund of any amount paid beyond the 50% non-refundable retainer.</li>
                            <li><strong>Cancellations made within 48 hours</strong> of the scheduled session: All payments made are non-refundable.</li>
                            <li><strong>Rescheduling:</strong> Sessions can be rescheduled with at least 72 hours&apos; notice at no extra cost, subject to availability. Rescheduling within 72 hours may incur a fee.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">4. Cancellation by Memoria Production</h2>
                        <p>In the unlikely event that we must cancel due to unforeseen circumstances (e.g., equipment failure, illness, extreme weather), you will receive a 100% refund of all fees paid, including the retainer, or the option to reschedule.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">5. Processing</h2>
                        <p>Approved refunds will be processed within <strong>10 business days</strong> to the original payment method. Please note that bank processing times may vary.</p>
                    </section>
                    <section className="bg-warm-gold/10 p-8 rounded-2xl border border-warm-gold/20">
                        <h2 className="text-2xl font-display font-bold text-charcoal mb-4">6. Contact Us</h2>
                        <p>For any questions regarding this policy, please contact us at:</p>
                        <div className="mt-4 space-y-2">
                            <p><strong>Email:</strong> info@memoriaproduction.com</p>
                            <p><strong>Phone:</strong> +1 (323) 990-2599</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
