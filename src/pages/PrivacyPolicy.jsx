import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import SEO from "../components/SEO";
import { FaShieldAlt, FaUserShield, FaLock, FaEye, FaFileContract, FaPhone } from "react-icons/fa";

const PrivacyPolicy = () => {
  const lastUpdated = "27th January 2025";

  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <FaEye className="text-blue-600" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use our services or contact us, we may collect the following personal information:",
          list: [
            "Full name and contact details (phone number, email address)",
            "Postal address and service location",
            "Payment information (processed securely through third-party providers)",
            "Service preferences and special requirements",
            "Communication records (emails, phone calls, messages)",
            "Booking and appointment details"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect certain information:",
          list: [
            "IP address and browser information",
            "Device type and operating system",
            "Pages visited and time spent on our website",
            "Referring website and search terms used",
            "Cookies and similar tracking technologies",
            "Location data (with your consent)"
          ]
        },
        {
          subtitle: "Service-Related Information",
          text: "During the provision of our waste removal services, we collect:",
          list: [
            "Type and quantity of waste collected",
            "Service dates and completion records",
            "Photos of waste (for documentation purposes)",
            "Waste transfer notes and disposal certificates",
            "Customer feedback and service ratings",
            "Insurance and liability information"
          ]
        }
      ]
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: <FaUserShield className="text-green-600" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your personal information primarily to provide our waste removal services:",
          list: [
            "Processing and managing your service bookings",
            "Scheduling appointments and coordinating collections",
            "Communicating service updates and confirmations",
            "Processing payments and issuing invoices",
            "Providing customer support and handling inquiries",
            "Ensuring compliance with waste disposal regulations"
          ]
        },
        {
          subtitle: "Business Operations",
          text: "Your information helps us operate and improve our business:",
          list: [
            "Maintaining accurate service records and documentation",
            "Analyzing service performance and customer satisfaction",
            "Developing and improving our services",
            "Training staff and ensuring service quality",
            "Managing insurance claims and liability issues",
            "Complying with legal and regulatory requirements"
          ]
        },
        {
          subtitle: "Marketing and Communications",
          text: "With your consent, we may use your information for:",
          list: [
            "Sending service updates and important notifications",
            "Providing information about new services or offers",
            "Conducting customer satisfaction surveys",
            "Sending newsletters and promotional materials",
            "Personalizing your experience with our services",
            "Following up on completed services"
          ]
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <FaFileContract className="text-orange-600" />,
      content: [
        {
          subtitle: "Service Partners",
          text: "We may share your information with trusted partners who help us provide our services:",
          list: [
            "Licensed waste disposal facilities and recycling centers",
            "Payment processing companies (Stripe, PayPal, etc.)",
            "Scheduling and booking system providers",
            "Insurance companies (when required for claims)",
            "Subcontractors and partner waste removal companies",
            "Vehicle tracking and logistics providers"
          ]
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law or to protect our rights:",
          list: [
            "Compliance with Environment Agency regulations",
            "Response to legal processes, court orders, or government requests",
            "Protection of our rights, property, or safety",
            "Investigation of fraud or other illegal activities",
            "Enforcement of our terms of service",
            "Public health and safety requirements"
          ]
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a business sale, merger, or acquisition, your information may be transferred to the new owners, subject to the same privacy protections outlined in this policy."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: <FaLock className="text-red-600" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement comprehensive security measures to protect your personal information:",
          list: [
            "SSL encryption for all data transmission",
            "Secure servers with regular security updates",
            "Access controls and authentication systems",
            "Regular security audits and vulnerability assessments",
            "Staff training on data protection and privacy",
            "Secure disposal of physical documents and electronic data"
          ]
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only as long as necessary:",
          list: [
            "Service records: 7 years (for legal and regulatory compliance)",
            "Payment information: As required by financial regulations",
            "Marketing communications: Until you opt out or withdraw consent",
            "Website analytics: 26 months maximum",
            "Customer support records: 3 years after last contact",
            "Legal documents: As required by applicable laws"
          ]
        },
        {
          subtitle: "International Transfers",
          text: "Your data is primarily processed within the UK. If we need to transfer data internationally, we ensure adequate protection through approved mechanisms such as Standard Contractual Clauses or adequacy decisions."
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: <FaShieldAlt className="text-purple-600" />,
      content: [
        {
          subtitle: "Under UK GDPR, you have the following rights:",
          list: [
            "Right to Access: Request copies of your personal data",
            "Right to Rectification: Correct inaccurate or incomplete data",
            "Right to Erasure: Request deletion of your personal data",
            "Right to Restrict Processing: Limit how we use your data",
            "Right to Data Portability: Receive your data in a portable format",
            "Right to Object: Object to processing based on legitimate interests",
            "Right to Withdraw Consent: Withdraw consent for marketing communications",
            "Right to Lodge a Complaint: Contact the ICO if you have concerns"
          ]
        },
        {
          subtitle: "How to Exercise Your Rights",
          text: "To exercise any of these rights, please contact us using the details provided below. We will respond to your request within one month and may ask for identification to verify your identity."
        },
        {
          subtitle: "Automated Decision Making",
          text: "We do not use automated decision-making or profiling that would significantly affect you. All service decisions are made by our trained staff with human oversight."
        }
      ]
    }
  ];

  return (
    <div>
      <SEO 
        title="Privacy Policy - Waste Rescuers Data Protection & Privacy"
        description="Read Waste Rescuers' comprehensive privacy policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR and data protection laws."
        keywords="privacy policy, data protection, GDPR compliance, personal data, waste rescuers privacy, data security"
        canonical="https://wasterescuers.uk/privacy-policy"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FaShieldAlt className="text-6xl text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how Waste Rescuers collects, 
            uses, and protects your personal information in compliance with UK data protection laws.
          </p>
          <div className="mt-6 inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="text-gray-700">Last Updated: </span>
            <span className="font-semibold text-blue-600 ml-2">{lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Waste Rescuers Ltd ("we," "our," or "us") is committed to protecting and respecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you use our waste removal services, visit our website at <strong>wasterescuers.uk</strong>, 
              or interact with us in any way.
            </p>
            <p>
              This policy applies to all personal data we process about you, whether you are a customer, 
              website visitor, or someone who contacts us for information about our services. We are 
              registered with the Information Commissioner's Office (ICO) and comply with the UK General 
              Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Company Details:</h3>
              <ul className="text-blue-700 space-y-1">
                <li><strong>Company Name:</strong> Waste Rescuers Ltd</li>
                <li><strong>Company Number:</strong> 16260822</li>
                <li><strong>Registered Address:</strong> 12 Audley Gardens, Seven Kings, Ilford, Essex, IG3 9LB</li>
                <li><strong>Environment Agency Registration:</strong> CBDU571009 (Upper Tier Carrier)</li>
                <li><strong>Contact:</strong> wasterescuers@gmail.com | +44 7749991862</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="mr-3">{section.icon}</div>
                <span className="font-medium text-gray-800">{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <div key={index} id={section.id} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-4">{section.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
            </div>
            
            {section.content.map((content, contentIndex) => (
              <div key={contentIndex} className="mb-6">
                {content.subtitle && (
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{content.subtitle}</h3>
                )}
                {content.text && (
                  <p className="text-gray-700 leading-relaxed mb-3">{content.text}</p>
                )}
                {content.list && (
                  <ul className="space-y-2 text-gray-700">
                    {content.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Cookies Policy */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaEye className="text-yellow-600 mr-4" />
            Cookies and Tracking Technologies
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What Are Cookies?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences 
                and analyzing how you use our site.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Essential Cookies</h4>
                  <p className="text-green-700 text-sm">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                  <p className="text-blue-700 text-sm">
                    Help us understand how visitors interact with our website (Google Analytics).
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Marketing Cookies</h4>
                  <p className="text-orange-700 text-sm">
                    Used to track visitors across websites for advertising purposes.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Functional Cookies</h4>
                  <p className="text-purple-700 text-sm">
                    Remember your preferences and provide enhanced features.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Managing Cookies</h3>
              <p className="text-gray-700 leading-relaxed">
                You can control and manage cookies through your browser settings. However, 
                disabling certain cookies may affect the functionality of our website. 
                Most browsers allow you to refuse cookies or alert you when cookies are being sent.
              </p>
            </div>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Third-Party Services</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              We use various third-party services to enhance our operations and provide better service to our customers. 
              These services have their own privacy policies, and we encourage you to review them:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Google Services</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Google Analytics (website analytics)</li>
                  <li>• Google Tag Manager (tracking management)</li>
                  <li>• Google Maps (location services)</li>
                </ul>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 text-sm hover:underline">View Google Privacy Policy</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Payment Processors</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Stripe (card payments)</li>
                  <li>• PayPal (online payments)</li>
                  <li>• Apple Pay / Google Pay</li>
                </ul>
                <p className="text-gray-600 text-xs mt-2">
                  Payment data is processed securely by these providers and not stored on our servers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Children's Privacy</h2>
          <p className="text-yellow-700 leading-relaxed">
            Our services are not intended for children under the age of 16. We do not knowingly collect 
            personal information from children under 16. If you are a parent or guardian and believe 
            your child has provided us with personal information, please contact us immediately, 
            and we will take steps to remove such information from our systems.
          </p>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Changes to This Privacy Policy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we make changes, we will:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Update the "Last Updated" date at the top of this policy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Notify you of significant changes via email or website notice</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Provide a summary of key changes where appropriate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Seek your consent for material changes that affect your rights</span>
              </li>
            </ul>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about 
              how we protect your information. Your continued use of our services after any changes 
              indicates your acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
          <div className="flex items-center mb-6">
            <FaPhone className="text-3xl mr-4" />
            <h2 className="text-3xl font-bold">Contact Us About Privacy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Data Protection Inquiries</h3>
              <p className="mb-4 opacity-90">
                If you have any questions about this Privacy Policy, want to exercise your rights, 
                or have concerns about how we handle your personal data, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> wasterescuers@gmail.com</p>
                <p><strong>Phone:</strong> +44 7749991862</p>
                <p><strong>Address:</strong> 12 Audley Gardens, Seven Kings, Ilford, Essex, IG3 9LB</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Rights</h3>
              <p className="mb-4 opacity-90">
                Remember, you have the right to:
              </p>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Request access to your personal data</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your data</li>
                <li>• Object to processing</li>
                <li>• Lodge a complaint with the ICO</li>
              </ul>
              <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
                <p className="text-sm">
                  <strong>ICO Contact:</strong> If you're not satisfied with our response, 
                  you can contact the Information Commissioner's Office at ico.org.uk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;