import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PRIVACY POLICY | SOUTHERN DESIGN WAREHOUSE',
  description: 'Your privacy is important to us. Learn how Southern Design Warehouse collects, uses, and protects your information.',
};

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'INTRODUCTION',
      content: 'At Southern Design Warehouse, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you use our website or visit our showroom.',
    },
    {
      title: 'INFORMATION WE COLLECT',
      content: 'We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, fill out a form, request a quote, or contact us about our kitchen cabinets and services. We may collect your name, email address, phone number, and architectural/project details to better serve your needs.',
    },
    {
      title: 'HOW WE USE YOUR INFORMATION',
      content: 'Southern Design Warehouse may collect and use your personal information for the following purposes: To improve customer service, to personalize user experience, to send periodic emails (e.g., quotes, project updates, or special offers), and to process transactions efficiently.',
    },
    {
      title: 'DATA PROTECTION & SECURITY',
      content: 'We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.',
    },
    {
      title: 'COOKIES & TRACKING',
      content: 'Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.',
    },
    {
      title: 'THIRD-PARTY LINKS',
      content: 'You may find advertising or other content on our site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site.',
    },
    {
      title: 'CONTACT US',
      content: 'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with Southern Design Warehouse, please contact us at: southerndesignwarehouse@gmail.com or call us at +1 813-845-1111.',
    },
  ];

  return (
    <main className="pt-20 bg-stone-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-stone-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-7xl font-bold text-white mb-4 uppercase tracking-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            PRIVACY POLICY
          </h1>
          <p className="text-stone-400 text-xl font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-xs">
            Last Updated: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 sm:p-16 rounded-sm shadow-sm border border-stone-100">
            {sections.map((section, index) => (
              <div key={index} className={index !== 0 ? 'mt-16' : ''}>
                <h2 className="text-2xl font-bold text-green-800 mb-6 uppercase"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  {section.title}
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg font-light">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Accept/Back CTA */}
          <div className="mt-16 text-center">
             <a href="/" className="inline-block bg-green-800 hover:bg-red-600 text-white font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all shadow-md">
                Back to Home
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
