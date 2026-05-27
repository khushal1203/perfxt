import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="term-page">
      <Header />

      {/* Hero Banner */}
      <section className="term-hero">
        <Image
          src="/images/home/term.jpg"
          alt="Privacy Policy background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />

        {/* Center Box */}
        <div className="term-hero-box">
          <div className="term-hero-label-wrap">
            <Image src="/images/home/heroicon.svg" alt="" width={12} height={12} />
            <span className="term-hero-label">Legal Information</span>
          </div>
          <h1 className="term-hero-heading">Perfxt Privacy Policy</h1>
          <p className="term-hero-date">Last Updated On 24-Jun-2024</p>
        </div>
      </section>

      {/* Content area */}
      <main className="term-content">
        <div className="term-sections">

          {/* Intro */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">Effective Date</span> 01-Jan-2024</h2>
            <div className="term-section-body">
              <p className="term-body-text">
                This Privacy Policy describes the policies of Weclose LLC, Room 2301, Bayfield Building, 99 Hennessy Road Wanchai, Hong Kong, Hong Kong, Hong Kong, email: legal@Perfxt.com, on the collection, use and disclosure of your information that we collect when you use our website ( https://outsourcingsalesagency.com/ ). (the &ldquo;Service&rdquo;). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.
              </p>
              <p className="term-body-text">
                We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.
              </p>
            </div>
          </div>

          {/* 1 */}
          {/* 1 */}
          <div className="term-section-box">
            <h2 className="term-section-title">
              <span className="term-section-num">1.</span> How We Share Your Information:
            </h2>

            <div className="term-section-body">
              <p className="term-body-text">
                We will not transfer your personal information to any third party
                without seeking your consent, except in limited circumstances as
                described below:
              </p>

              <p className="term-body-text">
                &nbsp;&nbsp;&nbsp;&nbsp;i. Ad service <br />
                &nbsp;&nbsp;&nbsp;&nbsp;ii. Analytics <br />
                &nbsp;&nbsp;&nbsp;&nbsp;iii. Data collection &amp; process
              </p>

              <p className="term-body-text">
                We require such third party’s to use the personal information we
                transfer to them only for the purpose for which it was transferred
                and not to retain it for longer than is required for fulfilling the
                said purpose.
              </p>

              <p className="term-body-text">
                We may also disclose your personal information for the following:
              </p>

              <p className="term-body-text">
                (1) to comply with applicable law, regulation, court order or other
                legal process; <br /><br />

                (2) to enforce your agreements with us, including this Privacy
                Policy; <br /><br />

                (3) to respond to claims that your use of the Service violates any
                third-party rights.
              </p>

              <p className="term-body-text">
                If the Service or our company is merged or acquired with another
                company, your information will be one of the assets that is
                transferred to the new owner.
              </p>

              <h3 className="term-sub-title">
                Information We Access from Google
              </h3>

              <p className="term-body-text">
                Perfxt accesses certain user data from your Google account,
                including:
              </p>

              <p className="term-body-text">
                • Google Calendar events <br />
                • Basic profile information (name, email) <br />
                • Meeting metadata (title, time, invitees) <br />
                • Email metadata (number of emails sent per day, without accessing
                or storing the content of any email)
              </p>

              <p className="term-body-text">
                This data is accessed only after you explicitly grant permissions
                through the Google OAuth consent screen. No other data is accessed
                beyond what is necessary to provide core functionality.
              </p>

              <h3 className="term-sub-title">
                How We Use Google User Data
              </h3>

              <p className="term-body-text">
                Google user data is used solely to:
              </p>

              <p className="term-body-text">
                • Analyze scheduling patterns <br />
                • Generate meeting summaries and productivity scores <br />
                • Suggest personalized work blocks and rest periods <br />
                • Create weekly reports and performance recommendations <br />
                • Track aggregate email-sending activity to provide productivity
                insights (e.g., workload balance, communication patterns,
                correlations with task completion or meeting efficiency)
              </p>

              <p className="term-body-text">
                Email content is never read, stored, or analyzed. We never sell or
                share your data with third parties.
              </p>

              <h3 className="term-sub-title">
                Data Retention and Deletion
              </h3>

              <p className="term-body-text">
                We retain your Google user data only as long as required to deliver
                our services. You can request deletion of your data at any time by
                contacting legal@Perfxt.com. All data will be permanently deleted
                within 30 days of your request.
              </p>

              <h3 className="term-sub-title">
                Use of AI and Machine Learning
              </h3>

              <p className="term-body-text">
                Perfxt uses AI and machine learning models to process your
                scheduling and meeting data. These models generate insights to
                improve your productivity, focus, and planning efficiency. All AI
                operations are conducted under Google’s Limited Use Policy and
                strictly within your authorized scopes.
              </p>

              <h3 className="term-sub-title">
                Google API Limited Use Compliance
              </h3>

              <p className="term-body-text">
                Perfxt’s use and transfer of information received from Google APIs
                will adhere to the Google API Services User Data Policy, including
                the Limited Use requirements.
              </p>

              <p className="term-body-text">
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.google.com/terms/api-services-user-data-policy
                </a>
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">2.</span> Your Rights:</h2>
            <div className="term-section-body">
              <p className="term-body-text">
                Depending on the law that applies, you may have a right to access and
                rectify or erase your personal data or receive a copy of your personal
                data, restrict or object to the active processing of your data, ask us
                to share (port) your personal information to another entity, withdraw
                any consent you provided to us to process your data, a right to lodge a
                complaint with a statutory authority and such other rights as may be
                relevant under applicable laws.
              </p>

              <p className="term-body-text">
                To exercise these rights, you can write to us at
                <strong> legal@perfxt.com</strong>. We will respond to your request in
                accordance with applicable law.
              </p>

              <p className="term-body-text">
                Do note that if you do not allow us to collect or process the required
                personal information or withdraw the consent to process the same for the
                required purposes, you may not be able to access or use the services for
                which your information was sought.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">3.</span> Cookies Etc.</h2>
            <div className="term-section-body">
              <p className="term-body-text">To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our Cookie Policy.</p>
            </div>
          </div>

          {/* 4 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">4.</span> Analytics and Advertising Tools</h2>
            <div className="term-section-body">
              <p className="term-body-text">
                We use third-party tools such as Google Tag Manager and Meta Pixel
                (formerly Facebook Pixel) to help us understand user behavior, track
                conversions, and optimize our marketing efforts.
              </p>

              <p className="term-body-text">
                <strong>Google Tag Manager</strong> is used to manage and deploy
                tracking tags on our website efficiently. GTM itself does not collect
                personal data but may trigger tags (such as analytics or marketing
                pixels) that do.
              </p>

              <p className="term-body-text">
                <strong>Meta Pixel</strong> allows us to measure the effectiveness of
                our advertising by understanding the actions people take on our site.
                This may include collecting information such as IP addresses, browser
                type, and pages visited.
              </p>

              <p className="term-body-text">
                These tools may place cookies or use similar tracking technologies to
                collect data on your interactions with our website. This data may be
                shared with the respective third parties in accordance with their
                privacy policies.
              </p>

              <p className="term-body-text">
                You can learn more and manage your preferences by visiting:
              </p>

              <p className="term-body-text">
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook’s Data Policy
                </a>
                <br /><br />

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google’s Privacy &amp; Terms
                </a>
              </p>

              <p className="term-body-text">
                You can opt out of certain tracking via your browser settings.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">5.</span> Security:</h2>
            <div className="term-section-body">
              <p className="term-body-text">Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal data, the right to restrict or object to our processing of your personal data, and the right to data portability.</p>
              <p className="term-body-text">The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.
              </p>
            </div>
          </div>


          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">6.</span> Third Party Links & Use Of Your Information:</h2>
            <div className="term-section-body">
              <p className="term-body-text">Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
            </div>
          </div>

          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">7.</span> Grievance / Data Protection Officer:</h2>
            <div className="term-section-body">
              <p className="term-body-text">IIf you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at Weclose Limited, Room 2301, Bayfield Building, 99 Hennessy Road Wanchai, Hong Kong, email: legal@perfxt.com. We will address your concerns in accordance with applicable law.</p>
            </div>
          </div>


          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">8.</span> Google API and Workspace Data Compliance</h2>
            <div className="term-section-body">
              <p className="term-body-text">
                Perfxt’s use and transfer of information received from Google APIs
                will adhere to the Google API Services User Data Policy, including
                the Limited Use requirements.
              </p>

              <p className="term-body-text">
                Additionally, Perfxt complies with the Google Workspace API User Data
                Policy, ensuring that all access, use, and transfer of Workspace data
                (e.g., Calendar events) is handled securely, transparently, and with
                user consent.
              </p>

              <p className="term-body-text">
                We also comply with the Google Photos API User Data Policy, where
                applicable. Our app only uses Google user data to provide and improve
                functionality, and does not share, sell, or transfer this data to
                third parties.
              </p>

              <p className="term-body-text">
                We access only metadata necessary to provide core productivity
                features (e.g., counts of emails sent, not message content).
              </p>

              <p className="term-body-text">
                We do not transfer Google user data to third parties except as
                required to provide the service.
              </p>

              <p className="term-body-text">
                We do not use Google user data for advertising purposes.
              </p>

              <p className="term-body-text">
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                <br /><br />

                <a
                  href="https://developers.google.com/workspace/terms/user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Workspace API User Data Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
