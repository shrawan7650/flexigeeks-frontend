import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div   className="max-w-6xl mx-auto p-3">
      <div  className="terms-of-service rounded-3xl bg-gray-100 p-8">
        <h1  className="text-3xl font-bold mb-6">Terms of Service</h1>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Acceptance of Terms</h2>
          <p  className="mb-4">
            By accessing or using our website and services, you agree to comply
            with these Terms and any additional terms and conditions that may
            apply to specific features, services, or promotions.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Use of Website</h2>
          <p  className="mb-4">
            You must be at least [age] years old to use our website and
            services. By using our website, you represent that you are of legal
            age to enter into these Terms and use our services.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">User Accounts</h2>
          <p  className="mb-4">
            Some features of our website may require you to create a user
            account. You are responsible for maintaining the confidentiality of
            your account credentials and for any activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Content</h2>
          <p  className="mb-4">
            You may use our website and services to access and interact with
            content, including but not limited to text, images, videos, and
            other materials. You agree not to use our website for any unlawful
            or prohibited purpose or to violate any applicable laws or
            regulations.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Intellectual Property</h2>
          <p  className="mb-4">
            All content on our website, including text, graphics, logos, icons,
            images, audio clips, and software, is the property of [Your Company
            Name] or its licensors and is protected by intellectual property
            laws. You may not use, reproduce, modify, distribute, or transmit
            any content from our website without our prior written consent.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Third-Party Links</h2>
          <p  className="mb-4">
            Our website may contain links to third-party websites or services
            that are not owned or controlled by us. We are not responsible for
            the content, privacy policies, or practices of third-party websites
            or services. Your use of third-party websites or services is at your
            own risk.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Disclaimer of Warranties</h2>
          <p  className="mb-4">
            Our website and services are provided on an as is and as available
            basis without warranties of any kind, whether express or implied. We
            do not warrant that our website will be error-free, uninterrupted,
            or free of viruses or other harmful components.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Limitation of Liability</h2>
          <p  className="mb-4">
            In no event shall FlexiGeeks or its affiliates be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising out of or related to your use of our website or
            services.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Indemnification</h2>
          <p  className="mb-4">
            You agree to indemnify and hold harmless FlexiGeeks and its
            affiliates from any claims, damages, liabilities, costs, or expenses
            arising out of your use of our website or services or your violation
            of these Terms.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Changes to Terms</h2>
          <p  className="mb-4">
            We reserve the right to modify or update these Terms at any time.
            The most current version of the Terms will be posted on our website.
            Your continued use of our website after any changes indicates your
            acceptance of the updated Terms.
          </p>
        </section>
        <section  className="mb-8">
          <h2  className="text-2xl font-bold mb-2">Governing Law</h2>
          <p  className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to its conflict of
            law provisions.
          </p>
        </section>
        <section>
          <h2  className="text-2xl font-bold mb-2">Contact Us</h2>
          <p  className="mb-4">
            If you have any questions or concerns about these Terms, please
            contact us at <Link   className="text-blue-600" to="mailto:flexi.geeks001@gmail.com">flexi.geeks001@gmail.com</Link>.
          </p>
          <p  className="mb-4">Thank you for using FlexiGeeks!</p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
