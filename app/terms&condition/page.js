import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndCondition() {
  return (
    <div className="term-page">
      <Header />
      {/* Hero Banner */}
      <section className="term-hero">
        <Image
          src="/images/home/term.jpg"
          alt="Terms background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />

        {/* Center Box */}
        <div className="term-hero-box">
          {/* Top label row */}
          <div className="term-hero-label-wrap">
            <Image src="/images/home/heroicon.svg" alt="" width={12} height={12} />
            <span className="term-hero-label">Legal Information</span>
          </div>
          {/* Heading */}
          <h1 className="term-hero-heading">Perfxt Website Terms of Use</h1>
        </div>
      </section>

      {/* Content area */}
      <main className="term-content">
        <div className="term-sections">
          {/* First box — intro text */}
          <div className="term-section-box term-section-box--plain">
            <p className="term-body-text">
              Thank you for shopping at Perfxt.com, owned and operated by WeClose Limited. (&ldquo;Perfxt&rdquo;). These Terms of Use (the &ldquo;Terms&rdquo;) apply to our websites (including Perfxt.com), mobile applications (each, an &ldquo;App&rdquo;), software and technology and related services (collectively, the &quot;Services&quot;). The Services are provided by Perfxt (&quot;Perfxt&quot; or &quot;we,&quot; &quot;us,&quot; &quot;our&quot; and similar references). By accessing or using the Services, or clicking a button or checking a box marked &ldquo;I Agree,&rdquo; &ldquo;Create Account&rdquo; or something similar, you signify that you have read, understood, and agree to be bound by these Terms, to the collection and use of your information as set forth in the Perfxt Privacy Policy, which is hereby incorporated by reference. These Terms apply to all visitors, users, and others who register for or otherwise access the Services (&ldquo;Users&rdquo;). If you do not agree with these Terms of Use and our Privacy Policy, you should not use the Services.
            </p>
            <p className="term-body-text">
              Certain services may be subject to additional terms and conditions specified by us from time to time, and your use of such services is subject to those additional terms and conditions, which are hereby incorporated into these Terms by reference.
            </p>
            <p className="term-body-text">
              PLEASE READ THESE TERMS CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. THESE TERMS CONTAIN A MANDATORY INDIVIDUAL ARBITRATION AND CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS.
            </p>
          </div>
          {/* Second box — Use of the Services */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">1.</span> Use of the Services</h2>
            <div className="term-section-body">
              <p className="term-body-text">You may use the Services only in accordance with and subject to these Terms and our Privacy Policy</p>
              <p className="term-body-text">Subject to the terms and conditions of these Terms, you are hereby granted a non-exclusive, limited, non-transferable, freely revocable license to use the Services for your personal, noncommercial use only and as permitted by the features of the Services. Any products ordered by you via the Service are for your own private use only and are not for resale. Perfxt reserves all rights not expressly granted herein in the Services and the Perfxt Content (as defined below). Perfxt may terminate this license at any time for any reason or no reason.</p>
              <p className="term-body-text">Once you complete and submit your registration, you have opted in to receive email communication from us. You may control your User profile and how you interact with the Services by changing the settings in your profile settings page. By providing Perfxt your email address you consent to our using the email address to send you Services-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Services and special offers. If you do not want to receive such email messages, you may opt out or change your preferences in your profile settings page. Opting out may prevent you from receiving email messages regarding updates, improvements, or offers.</p>
              <p className="term-body-text">You may not use the Services for any purpose that is unlawful or prohibited by these Terms, or to solicit the performance of any illegal activity or other activity which infringes the rights of Perfxt or others. Notwithstanding any other rights or restrictions in these Terms, you may not use the Services to:<br />
                (a) transmit via or through the Services any information, data, text, images, files, links, or software except in connection with your authorized use of the Services or otherwise in response to specific requests for information by us;<br />
                (b) introduce to our websites or mobile applications or otherwise in connection with the Services any computer or website viruses, worms, Trojan horses and/or harmful code;<br />
                (c) obtain unauthorized access to any computer system;<br />
                (d) impersonate any other person, including but not limited to, a registered user of the Services or an employee of Perfxt;<br />
                (e) invade the privacy or violate any personal or proprietary right (including intellectual property rights) of any person or entity;<br />
                (f) misrepresent the identity of a user or use a false email address;<br />
                (g) tamper with or obtain access to our websites or mobile applications or any component of any of them;<br />
                (h) conduct fraudulent activities (including but not limited to, by way of example, unauthorized credit card use, placing an order with lack of funds or utilizing a false online payment account or service); or<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(i) collect or harvest information regarding other users of the Services for any reason whatsoever, including, without limitation, for sending such users unsolicited commercial email.
              </p>
              <p className="term-body-text">You may never use another User&apos;s account without permission. When creating your account, you must provide accurate and complete information, and you must keep this information up to date. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. We encourage you to use &ldquo;strong&rdquo; passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account. You must notify Perfxt immediately of any breach of security or unauthorized use of your account. Perfxt will not be liable for any losses caused by any unauthorized use of your account.</p>
              <p className="term-body-text">We may, without prior notice, change the Services; stop providing the Services or features of the Services, to you or to Users generally; or create usage limits for the Services. We may permanently or temporarily terminate or suspend your access to the Services without notice and liability for any reason, including if in our sole determination you violate any provision of these Terms, or for no reason. Upon termination for any reason or no reason, you continue to be bound by these Terms.</p>
            </div>
          </div>

          {/* 2. Perfxt Content */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">2.</span> The Perfxt App</h2>
            <div className="term-section-body">
              <p className="term-body-text">We may make available software to access the Services via an App. To use the App you must have a mobile device that is compatible with the App. Perfxt does not warrant that the App will be compatible with your mobile device. You may use mobile data in connection with the App and may incur additional charges from your wireless provider for these services. You agree that you are solely responsible for any such charges. Perfxt hereby grants you a non-exclusive, non-transferable, revocable license to use a compiled code copy of the App for one Perfxt account on one mobile device owned or leased solely by you, for your personal use. You may not:<br />
                (i) modify, disassemble, decompile or reverse engineer the App, except to the extent that such restriction is expressly prohibited by law;<br />
                (ii) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the App to any third party or use the App to provide time sharing or similar services for any third party;<br />
                (iii) make any copies of the App;<br />
                (iv) remove, circumvent, disable, damage or otherwise interfere with security-related features of the App, features that prevent or restrict use or copying of any content accessible through the App, or features that enforce limitations on use of the App; or<br />
                (v) delete the copyright and other proprietary rights notices on the App.
              </p>
              <p className="term-body-text">You acknowledge that Perfxt may from time to time issue upgraded versions of the App, and may automatically electronically upgrade the version of the App that you are using on your mobile device. You consent to such automatic upgrading on your mobile device, and agree that the terms and conditions of these Terms will apply to all such upgrades. Any third-party code that may be incorporated in the App is covered by the applicable open source or third-party license end user license agreement, if any, authorizing use of such code. The foregoing license grant is not a sale of the App or any copy thereof, and Perfxt or its third-party partners or suppliers retain all right, title, and interest in the App (and any copy thereof). Any attempt by you to transfer any of the rights, duties or obligations hereunder, except as expressly provided for in these Terms, is void. Perfxt reserves all rights not expressly granted under these Terms. If the App is being acquired on behalf of the United States Government, then the following provision applies.</p>
              <p className="term-body-text">The App will be deemed to be &ldquo;commercial computer software&rdquo; and &ldquo;commercial computer software documentation,&rdquo; respectively, pursuant to DFAR Section 227.7202 and FAR Section 12.212, as applicable. Any use, reproduction, release, performance, display or disclosure of the Services and any accompanying documentation by the U.S. Government will be governed solely by these Terms and is prohibited except to the extent expressly permitted by these Terms. The App originates in the United States, and is subject to United States export laws and regulations. The App may not be exported or re-exported to certain countries or those persons or entities prohibited from receiving exports from the United States. In addition, the App may be subject to the import and export laws of other countries. You agree to comply with all United States and foreign laws related to use of the App and the Services.</p>
            </div>
          </div>

          {/* 3. User Content */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">3.</span> Membership Eligibility.</h2>
            <div className="term-section-body">
              <p className="term-body-text">The Services are available to Members who are 18 years and older, who have properly registered and who have not been suspended or removed by Perfxt for any reason (a &ldquo;Member&rdquo;). By registering as a Member you represent that you are of legal age. As a Member, you agree to provide true, accurate, current, and complete information about yourself as prompted by our registration form. Membership is void where prohibited by law. Perfxt reserves the right to revoke or prohibit your membership for any reason at any time, without notice, but, in particular, upon any violation of any of these Terms of Use or the Privacy Policy. We may maintain different types of accounts for different types of Users. If you open an Perfxt account on behalf of a company, organization, or other entity, then<br />
                (a) &ldquo;you&rdquo; includes you and that entity, and<br />
                (b) you represent and warrant that you are an authorized representative of the entity with the authority to bind the entity to these Terms, and that you agree to these Terms on the entity&apos;s behalf.
              </p>
            </div>
          </div>

          {/* 4. Privacy */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">4.</span> Additional Terms and Conditions; Pricing.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Additional terms and conditions may apply to specific portions of the Services or products or services we offer or your membership such as the information provided under the Customer Service section on our website, or the pricing and service level information applicable to the different premium service levels, are made part of these Terms by reference. You agree to abide by such other terms and conditions. If there is a conflict between these Terms and the terms posted or emailed for, or applicable to, a specific portion of the Services or products or services we offer or your membership, the latter terms shall control with respect to your use of that portion, those products or services or your membership.</p>
            </div>
          </div>

          {/* 5. Security */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">5.</span> Member Content.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Any and all content contributed by the Member in connection to our Services, including all photographs, articles, images, graphics, videos, sounds, music, audio recordings, text, files, profiles, communications, comments, feedback, suggestions, ideas, concepts, questions, data or other content (the &ldquo;Member Content&rdquo;) is the responsibility of the Member, not Perfxt, and is deemed nonconfidential and nonproprietary.</p>
              <p className="term-body-text">By submitting or posting any Member Content, you grant to Perfxt and its affiliates a perpetual, irrevocable, royalty-free, worldwide, sublicensable and transferable license to copy, publish, translate, modify, reformat, create derivative works from, distribute, reproduce, sell, display, transmit, publish, broadcast, host, archive, store, cache, use or otherwise exploit all or any portion of the Member Content, as well as your name, persona and likeness included in any Member Content and your social media account handle, username, real name, profile picture and/or any other information associated with the Member Content, in any commercial or noncommercial manner whatsoever, in whole or in part, in any and all distribution channels, forms, media or technology, whether now known or hereafter developed, including but not limited to in stores, printed marketing materials, emails, web pages, social media accounts and for any other marketing, advertising, public relations, sales or promotional purposes with or without attribution and without further notice to you. Neither you, nor any other person or entity, will have the right to<br />
                (i) receive any royalty or consideration of any kind for the use of the Member Content pursuant to these Terms or<br />
                (ii) inspect or approve the editorial copy or other material that may be used in connection with the Member Content. Perfxt will be free to use any ideas, concepts, know-how or techniques contained in such Member Content for any purpose whatsoever, including but not limited to developing, manufacturing and marketing products that incorporate or otherwise rely upon such information.
              </p>
              <p className="term-body-text">Perfxt shall have no obligation to monitor Member Content, use or display Member Content, compensate you for submitting Member Content or respond to any Member Content. Perfxt retains the right, in its sole discretion and without prior notice, to remove, revise or refuse to post any Member Content for any reason or no reason. Subject to the licenses granted in these Terms, you retain ownership of any copyright and other rights you may have in the Member Content.</p>
              <p className="term-body-text">By submitting or posting Member Content on the Services, on your social media accounts or through any tools or applications we provide for posting or sharing your Member Content with us, you represent and warrant that<br />
                (i) you own or control any and all rights in and to the Member Content, and the right to grant all of the rights and licenses in these Terms, and if you are not the holder of such rights, the holder of such rights has completely and effectively waived all such rights and irrevocably granted you the right to grant the licenses stated above without the need for payment to you or any other person or entity;<br />
                (ii) you have obtained permission from any individuals that appear in the Member Content to use, and grant others the right to use, their name, image, voice and/or likeness without the need for payment to you or any other person or entity;<br />
                (iii) you are 18 years of age or older; and<br />
                (iv) the Member Content does not<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(a) contain false or misleading information,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(b) infringe on the intellectual property, privacy, publicity, statutory, contractual or other rights of any third party,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(c) contain any libelous, defamatory, obscene, offensive, threatening or otherwise harassing or hateful content,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(d) contain any addresses, email addresses, phone numbers or any contact information or<br />
                &nbsp;&nbsp;&nbsp;&nbsp;(e) contain computer viruses, worms or other harmful files.
              </p>
              <p className="term-body-text">Upon request by Perfxt, you will furnish Perfxt any documentation, substantiation or releases necessary to verify your compliance with these Terms. You are solely responsible for the Member Content and you hereby agree to indemnify and hold Perfxt and its employees, agents, affiliates, assigns and licensees harmless from any and all damages, claims, expenses, costs or fees arising from or in connection with a breach of any of the foregoing representations or your violation of any law or rights of a third party.</p>
              <p className="term-body-text">Perfxt does not guarantee the truthfulness, accuracy or reliability of any Member Content or endorse any opinions expressed by you or anyone else. By submitting or posting the Member Content you fully and unconditionally release and forever discharge Perfxt and its officers, directors, employees and agents from any and all claims, demands and damages (actual or consequential, direct or indirect), whether now known or unknown, of every kind and nature relating to, arising out of or in any way connected with:<br />
                (i) disputes between you and one or more users or any other person or entity, or<br />
                (ii) the use by Perfxt or you of the Member Content, including, without limitation, any and all claims that use of the Member Content pursuant to these Terms violates any of your intellectual property rights, copyrights, rights of publicity or privacy, &ldquo;moral rights,&rdquo; or rights of attribution and integrity.
              </p>
              <p className="term-body-text">You acknowledge and agree that Perfxt has no control over, and shall have no liability for any damages resulting from, the use (including, without limitation, re-publication) or misuse by you or any third party of any Member Content. Perfxt acts as a passive conduit for Member Content and has no obligation to screen or monitor Member Content. If Perfxt becomes aware of any Member Content that allegedly may not conform to these Terms, Perfxt may investigate the allegation and determine in its sole discretion whether to take action in accordance with these Terms. Perfxt has no liability or responsibility to Users for performance or nonperformance of such activities.</p>
              <p className="term-body-text">PERFXT HAS THE ABSOLUTE RIGHT TO REMOVE AND/OR DELETE WITHOUT NOTICE ANY MEMBER CONTENT WITHIN ITS CONTROL THAT IT DEEMS OBJECTIONABLE. YOU CONSENT TO SUCH REMOVAL AND/OR DELETION AND WAIVE ANY CLAIM AGAINST PERFXT FOR SUCH REMOVAL AND/OR DELETION. PERFXT IS NOT RESPONSIBLE OR LIABLE FOR FAILURE TO STORE POSTED CONTENT OR OTHER MATERIALS YOU TRANSMIT THROUGH THE SERVICES. YOU SHOULD TAKE MEASURES TO PRESERVE COPIES OF ANY DATA, MATERIAL, CONTENT OR INFORMATION YOU POST ON THE SERVICE OR ANY OTHER SITES OR PLATFORMS</p>
              <p className="term-body-text">In addition to the restrictions set forth in Section 1, you agree not to use the Services to post Member Content or other communications that contain<br />
                (i) political, libelous or otherwise unlawful, abusive, or obscene material;<br />
                (ii) advertisements of any kind;<br />
                (iii) personal information (such as Social Security numbers, addresses, phone numbers, etc.);<br />
                (iv) confidential information of Perfxt, or affiliates;<br />
                (v) any chain letters, pyramid schemes, spam, contests, or promotional material;<br />
                (vi) messages that offer unauthorized downloads of any copyrighted or private information; and<br />
                (vii) information similar or related to the foregoing.
              </p>
              <p className="term-body-text">UNDER NO CIRCUMSTANCE SHALL ANY DISCLOSURE OF ANY MEMBER CONTENT TO PERFXT BE SUBJECT TO ANY OBLIGATION OF CONFIDENTIALITY OR EXPECTATION OF COMPENSATION OR ATTRIBUTION. YOU REPRESENT AND WARRANT THAT NO MEMBER CONTENT WILL BE OR CONTAIN LIBELOUS OR OTHERWISE UNLAWFUL, ABUSIVE, OR OBSCENE MATERIAL. YOU ARE AND SHALL REMAIN SOLELY RESPONSIBLE FOR YOUR MEMBER CONTENT. YOU REPRESENT AND WARRANT TO PERFXT THAT PERXT IS FREE TO USE THE MEMBER CONTENT, AND IMPLEMENT ANY SUGGESTIONS CONTAINED THEREIN, IF IT SO DESIRES, AS PROVIDED OR AS MODIFIED BY PERFXT, WITHOUT OBTAINING PERMISSION OR LICENSE FROM ANY THIRD PARTY AND WITHOUT ANY COMPENSATION TO YOU.</p>
              <p className="term-body-text">You are solely responsible for your interactions with other Perfxt Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. Perfxt shall have no liability for your interactions with other Users, or for any User&apos;s action or inaction.</p>
            </div>
          </div>

          {/* 6. Third-Party Links */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">6.</span> Accuracy of Content; Limitations on Quantity.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Excluding Member Content, the information we provide in connection with the Services is believed to be complete and reliable; however, the information may contain typographical errors, pricing errors, and other errors or inaccuracies. We will use reasonable efforts to correct errors as soon as practicable. We reserve the right to:<br />
                (i) revoke any stated offer;<br />
                (ii) correct any errors, inaccuracies, or omissions; and<br />
                (iii) make changes to prices, content, promotion offers, product descriptions or specifications, or other information without obligation to issue any notice of such changes (including after an order has been submitted, acknowledged, shipped, or received, except as prohibited by law).
              </p>
              <p className="term-body-text">We also reserve the right to limit quantities (including after an order has been submitted and/or acknowledged) and to revise, suspend, or terminate an event, promotion, or Boutique at any time without notice (including after an order has been submitted and/or acknowledged). The offer of any products, services and/or experiences at a particular time does not guarantee that the products, services and/or experiences will be available. If a product, service and/or experience offered and sold by us is not as described, your sole remedy is to return it subject to the terms set forth herein.</p>
            </div>
          </div>

          {/* 7. Indemnity */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">7.</span> Proprietary Rights.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Excluding Member Content, you acknowledge and agree that the Services and content, software, materials and other components (including but not limited to our logos, graphics, videos, music, button icons, and page headers) used in connection with the Services are the property of Perfxt and/or its affiliates, subsidiaries, or licensors and are protected by copyrights, trademarks, service marks, or other proprietary rights and laws. Except as explicitly provided herein, nothing in these Terms shall be deemed to create a license in or under any such Intellectual Property Rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit, or create derivative works from content or materials available on our websites or mobile applications or otherwise in connection with the Services. Reference to any products, services or other information by trade name, trademark, manufacturer, or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof or any affiliation therewith by Perfxt or its affiliate. All trademarks not owned by Perfxt that appear on or in connection with the Services are the property of their respective owners. Use of the content and materials for any purpose not expressly permitted in these Terms is prohibited. Perfxt relies upon a network of independent vendors who supply most/all (of) the goods we advertise and, with the information given in each product page, drop ship them directly to you. We are not liable for any infringement of copyrights, trademarks, trade dress or other proprietary or intellectual property rights arising out of content posted on or transmitted in connection with the Services, or items advertised on our websites or mobile applications, by our vendors.</p>
              <p className="term-body-text">You may choose to or we may invite you to submit comments or ideas about the Services, including without limitation about how to improve the Service or our products (&ldquo;Ideas&rdquo;). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Perfxt under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Perfxt does not waive any rights to use similar or related ideas previously known to Perfxt, or developed by its employees, or obtained from sources other than you.</p>
            </div>
          </div>

          {/* 8 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">8.</span> Orders and Payment.</h2>
            <div className="term-section-body">
              <p className="term-body-text">(a) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Placing an Order. By using the Services, you agree to use our Orders services as available at https://perfxt.com/terms-of-use, as we may update them from time to time on Perfxt.</p>
              <p className="term-body-text">(b) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No Sales to Children. Perfxt does not sell products through its Services for or to children, but only to adults, who can purchase with a credit card or other permitted payment method. If you are under eighteen (18) years of age, you may use the Services only with involvement and consent of a parent or legal guardian.</p>
              <p className="term-body-text">(c) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Methods. We accept various payment methods for product purchases through our Services, including Mastercard, Visa, Visa Electron, American Express (United States and Canada only) and JCB (United States and Canada only).) and nonrefundable credits that customers may purchase from Perfxt or earn from time to time by using the Services (provided that such credits may not be used and will expire if a user is inactive for 365 days). We will bill your payment method when you place an order for a product through the Services. Perfxt will not fulfill any product order without authorization validation of your purchase from your payment method.</p>
              <p className="term-body-text">(d) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Offers. You acknowledge and agree that any offers made available through the Services are subject to change at any time and from time to time.</p>
            </div>
          </div>

          {/* 9 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">9.</span> California Residents.</h2>
            <div className="term-section-body">
              <p className="term-body-text">The provider of Services is set forth herein. If you are a California resident, in accordance with Cal. Civ. Code &sect;1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210 or (916) 445-1254.</p>
            </div>
          </div>

          {/* 10 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">10.</span> Privacy Policy.</h2>
            <div className="term-section-body">
              <p className="term-body-text">(a) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We care about the privacy of our Users. You understand that by using the Services you consent to the collection, use and disclosure of your personally identifiable information and aggregate data as set forth in our Privacy Policy, and to have your personally identifiable information collected, used, transferred to and processed in the United States.</p>
            </div>
          </div>

          {/* 11 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">11.</span> Security.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Perfxt cares about the integrity and security of your personal information. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.</p>
            </div>
          </div>

          {/* 12 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">12.</span> Links to Third-Party Websites; No Implied Endorsements.</h2>
            <div className="term-section-body">
              <p className="term-body-text">These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within Los Angeles County, California for the resolution of any disputes arising out of or relating to these Terms or the Services.</p>
              <p className="term-body-text">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
            </div>
          </div>

          {/* 13 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">13.</span> Indemnification.</h2>
            <div className="term-section-body">
              <p className="term-body-text">By using the Services, you agree to indemnify, hold harmless, and defend Perfxt, and its affiliates, and their respective officers, directors, employees, successors, agents, subsidiaries, partners, contractors, vendors, manufacturers, distributors, representatives, and affiliates (collectively, the &ldquo;Perfxt Indemnitees&rdquo;) from any claims, damages, losses, liabilities, and all costs and expenses of defense, including but not limited to, attorneys&apos; fees, resulting directly or indirectly from a claim (including without limitation, claims made by third parties for infringement of intellectual property rights) by a third party that arises in connection with</p>
              <p className="term-body-text">(i) your use, misuse or access to the Services including any data or content transmitted or received by you;<br /><br />
                (ii) a dispute with a User;<br /><br />
                (iii) your breach of any terms of these Terms, including without limitation your breach of any of the representations and warranties above;<br /><br />
                (iv) your violation of any applicable law, rule or regulation or the rights of a third party;<br /><br />
                (v) your Member Content;<br /><br />
                (vi) your willful misconduct, or<br /><br />
                (vii) any other party&apos;s access and use of the Services with your unique username, password or other appropriate security code.
              </p>
              <p className="term-body-text">You agree to cooperate as fully as reasonably required in the defense of any claim. Perfxt reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you for which you will remain responsible for indemnifying and holding harmless the Perfxt Indemnitees.</p>
            </div>
          </div>

          {/* 14 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">14.</span> Disclaimers.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Perfxt is not and shall not be at any time responsible or liable for any loss or damage of any kind, including personal injury or death, (whether in tort, contract, or strict liability) arising out of or related to any Member Content, or to any act or omission by Members, by Perfxt or by any third party or by any of the equipment or programming associated with or utilized in connection with the Services. Any content submitted by our vendors does not necessarily reflect the opinions or policies of Perfxt. Perfxt assumes no responsibility for any error, omission, interruption, delay, communications line failure, deletion, defect, delay in operation or transmission, theft or destruction or unauthorized access to, or alteration of, any Member Content or other Member communications. Perfxt is not responsible for any problems or technical malfunction of any telephone or cable network or lines, computer systems, servers or providers, computer equipment, software, failure of any email or players due to technical problems or traffic congestion on the Internet or on in connection with the Services, including any injury or damage to Member&apos;s or other person&apos;s computer related to or resulting from participation on or through the Services.</p>
              <p className="term-body-text">THE SERVICES, ALL CONTENT USED IN CONNECTION WITH THE SERVICES AND ALL TEXT, IMAGES, MERCHANDISE, AND OTHER INFORMATION ON, ACCESSIBLE FROM OR AVAILABLE THROUGH OR IN CONNECTION WITH THE SERVICES ARE PROVIDED ON AN &ldquo;AS AVAILABLE&rdquo; AND &ldquo;AS IS&rdquo; BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. USE OF THE SERVICES AS AT YOUR OWN RISK. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM PERFXT OR THROUGH THE SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. SPECIFICALLY, BUT WITHOUT LIMITATION, PERFXT, ITS SUBSIDIARIES, ITS AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT:<br /><br />
                (i) THE INFORMATION AND CONTENT AVAILABLE ON THIS SERVICES IS ACCURATE, RELIABLE, CORRECT OR FREE OF ERRORS;<br /><br />
                (ii) THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR THAT IT WILL BE UNINTERRUPTED OR FREE OF ERRORS;<br /><br />
                (iii) THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION OR SECURE;<br /><br />
                (iv) THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED, OR<br /><br />
                (v) THE SERVICES OR THE SERVER(S) THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              <p className="term-body-text">PERFXT DOES NOT PROVIDE ANY WARRANTY ON PRODUCTS OR ITEMS THAT PERFXT SELLS OR MAKES AVAILABLE ON THE SERVICES. TO THE EXTENT A PRODUCT OR ITEM IS SUBJECT TO THE MANUFACTURER&apos;S WARRANTY, SUCH WARRANTY SHALL BE YOUR SOLE WARRANTY FOR SUCH PRODUCT OR ITEM.</p>
              <p className="term-body-text">ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICES IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICES.</p>
              <p className="term-body-text">PERFXT DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES OR ANY HYPERLINKED WEBSITE OR SERVICE, AND PERFXT WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
              <p className="term-body-text">FEDERAL LAW, SOME STATES, PROVINCES AND OTHER JURISDICTIONS DO NOT ALLOW THE EXCLUSION AND LIMITATIONS OF CERTAIN IMPLIED WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. THESE TERMS GIVE YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE. THE DISCLAIMERS AND EXCLUSIONS UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.</p>
            </div>
          </div>

          {/* 15 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">15.</span> Limitation of Liability.</h2>
            <div className="term-section-body">
              <p className="term-body-text">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PERFXT OR ITS AFFILIATES OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUCCESSORS, SUBSIDIARIES, DIVISIONS, DISTRIBUTORS, SUPPLIERS, AFFILIATES, OR THIRD PARTIES PROVIDING INFORMATION ON OR IN CONNECTION WITH THE SERVICES BE LIABLE TO ANY USER OF THE SERVICES OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, CONSEQUENTIAL OR EXEMPLARY DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, OR LOSS OF USE) ARISING OUT OF THE USE OR INABILITY TO USE OR ACCESS THE SERVICES OR ANY INFORMATION CONTAINED THEREON OR STORED OR MAINTAINED BY PERFXT WHETHER BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, EVEN IF PERFXT HAS BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. UNDER NO CIRCUMSTANCES WILL PERFXT BE RESPONSIBLE FOR ANY DAMAGE, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICES OR YOUR ACCOUNT OR THE INFORMATION CONTAINED THEREIN.</p>
              <p className="term-body-text">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PERFXT ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY<br /><br />
                (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT;<br /><br />
                (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR SERVICES;<br /><br />
                (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN;<br /><br />
                (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES;<br /><br />
                (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY;<br /><br />
                (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICES; AND/OR<br /><br />
                (VII) MEMBER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY. IN NO EVENT SHALL PERFXT, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS, DAMAGES, LOSSES OR COSTS IN AN AMOUNT EXCEEDING THE AMOUNT YOU PAID TO PERFXT HEREUNDER OR $100.00, WHICHEVER IS GREATER.
              </p>
              <p className="term-body-text">THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF PERFXT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.</p>
              <p className="term-body-text">You hereby acknowledge that the preceding paragraph shall apply to all content, merchandise, products, services and experiences available through the Services. Because some states do not allow limitations on implied warranties or the exclusion or limitation of certain damages, in such states some or all of the above disclaimers or exclusions may not apply and liability will be limited to the fullest extent permitted by applicable law.</p>
            </div>
          </div>

          {/* 16 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">16.</span> International Use.</h2>
            <div className="term-section-body">
              <p className="term-body-text">We make no representation that information available in connection with the Services is appropriate or available for use outside the United States.  Those who choose to access the Services from outside the United States do so on their own initiative and risk and are responsible for compliance with local laws, if and to the extent local laws are applicable. You may not use the Services if you are a resident of a country embargoed by the United States, or are a foreign person or entity blocked or denied by the United States government. Unless otherwise explicitly stated, all materials found on the Services are solely directed to individuals, companies, or other entities located in the United States.</p>
            </div>
          </div>

          {/* 17 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">17.</span> Risk of Loss; Deliveries.</h2>
            <div className="term-section-body">
              <p className="term-body-text">The items purchased through the Services are shipped by a third party carrier pursuant to a shipment contract.  As a result, risk of loss and title for such items pass to you upon our delivery to the carrier. We are not responsible for any loss of items, damage to items, misdeliveries, delays or failed deliveries of items. If there are any delays in delivery, you may contact the Perfxt.com Customer Services department, whose contact details are shown in the "Contact Us" section of the Website.
              </p>
            </div>
          </div>

          {/* 18 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">18.</span>  Perfxt Affiliates.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Perfxt is not affiliated with websites or third parties that sell or advertise our products, services and/ or experiences without express permission or authorization from Perfxt. Perfxt reserves the right to void all service, return, and other policies for orders and Perfxt products that were purchased through unauthorized sellers.  Perfxt is not responsible for any representations by unauthorized sellers.</p>
              </div>
          </div>

          {/* 19 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">19.</span> Unavailability of Services; Termination; Fraud.</h2>
            <div className="term-section-body">
              <p className="term-body-text">We may alter, suspend, or discontinue these Services in whole or in part, at any time and for any reason, without notice or cost.  In addition, the Services may be temporarily unavailable from time to time for maintenance or other reasons, including but not limited to force majeure events, in which case our Services may be subject to delays or interruptions. We may, in our sole discretion, terminate or suspend your use or access to all or part of the Services or your account or membership, for any reason, including, without limitation, breach of these Terms. If at any time we notify you that your access to and/or use of the Services or your account is terminated, you must cease and desist from all such access and/or use immediately. We reserve the right to cancel, delay, refuse to ship, or recall from the shipper any order if fraud is suspected. In the event these Terms or your membership or account are terminated, the restrictions regarding intellectual property matters, the representations and warranties, indemnities, and limitations of liabilities set forth herein (as well as any other of your obligations which by their nature should survive termination) will survive termination.</p>
            </div>
          </div>

          {/* 20 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">20.</span> The Digital Millennium Copyright Act.</h2>
            <div className="term-section-body">
              <p className="term-body-text">The Digital Millennium Copyright Act of 1998 (the &ldquo;DMCA&rdquo;) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe that any materials on our websites or mobile applications infringe your copyright, you may request that they be removed. This request must bear a signature (or electronic equivalent) of the copyright holder or an authorized representative, and must:</p>
              <p className="term-body-text">(a) identify the allegedly infringing materials;<br /><br />
                (b) indicate where on the websites or mobile applications the infringing materials are located;<br /><br />
                (c) provide your name and contact information;<br /><br />
                (d) state that you have a good faith belief that the materials are infringing;<br /><br />
                (e) state that the information in your claim is accurate; and<br /><br />
                (f) indicate that &ldquo;under penalty of perjury&rdquo; you are the lawful copyright owner or are authorized to act on the owner&apos;s behalf.
              </p>
              <p className="term-body-text">If you believe that someone has wrongly filed a notice of copyright infringement against you, the DMCA permits you to send us a counter-notice. Notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA. See https://www.copyright.gov/ for further information. Our contact for copyright issues relating to the Services (including the notices and counternotices) is legal@Perfxt.com. Please note that there are penalties for false claims under the DMCA.</p>
              <p className="term-body-text">UNDER FEDERAL LAW, IF YOU KNOWINGLY MISREPRESENT THAT ONLINE MATERIAL IS INFRINGING, YOU MAY BE SUBJECT TO CRIMINAL PROSECUTION FOR PERJURY AND CIVIL PENALTIES, INCLUDING MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS&apos; FEES.</p>
              <p className="term-body-text">Please note that this procedure is exclusively for notifying Perfxt and its affiliates that your copyrighted material has been infringed. The preceding requirements are intended to comply with Perfxt&apos;s rights and obligations under the DMCA, including 17 U.S.C. &sect;512(c), but do not constitute legal advice. It may be advisable to contact an attorney regarding your rights and obligations under the DMCA and other applicable laws.</p>
              <p className="term-body-text">In accordance with the DMCA and other applicable law, Perfxt has adopted a policy of terminating, in appropriate circumstances, Users who are deemed to be repeat infringers. Perfxt may also at its sole discretion limit access to the Services and/or terminate the accounts of any Users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.</p>
            </div>
          </div>

          {/* 21 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">21.</span> Arbitration.</h2>
            <div className="term-section-body">
              <p className="term-body-text">READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES THE PARTIES TO ARBITRATE THEIR DISPUTES AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM PERFXT. While we will make every reasonable effort to resolve any disagreements you may have with Perfxt, if these efforts fail you and we agree that all claims, disputes or controversies arising out of or relating to your use of the Services, these Terms, the purchase, sale and/or redemption of any merchandise, or the content, display or disclosure of any information on or in connection with the Services or any offers (&ldquo;Claims&rdquo;) are subject to binding arbitration. This includes Claims based on contract, tort (including intentional tort), fraud, agency, your or our negligence, statutory or regulatory provisions, or any other sources of law; Claims made as counterclaims, cross-claims, third-party claims, interpleaders or otherwise; and Claims made independently or with other claims. As used in this arbitration agreement, Perfxt includes, and its affiliates and their respective officers, directors, employees, agents, or successors. Notwithstanding the above, we both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights.</p>
              <p className="term-body-text">YOU AND PERFXT ALSO AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER IN ARBITRATION ONLY IN YOUR OR PERFXT&apos;S INDIVIDUAL CAPACITY AND IN SO DOING YOU AND PERFXT HEREBY WAIVE THE RIGHT TO A TRIAL BY JURY, TO ASSERT OR PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS ACTION ARBITRATION, TO ASSERT OR PARTICIPATE IN A PRIVATE ATTORNEY GENERAL LAWSUIT OR PRIVATE ATTORNEY GENERAL ARBITRATION, AND TO ASSERT OR PARTICIPATE IN ANY JOINT OR CONSOLIDATED LAWSUIT OR JOINT OR CONSOLIDATED ARBITRATION OF ANY KIND. HOWEVER, PERFXT WILL NOT INVOKE ITS RIGHT TO ARBITRATE ANY INDIVIDUAL CLAIM THAT YOU BRING IN SMALL CLAIMS COURT, AS LONG AS IT IS BROUGHT AND MAINTAINED AS AN INDIVIDUAL CLAIM.</p>
              <p className="term-body-text">Either party may initiate arbitration, which shall be conducted by the American Arbitration Association (&ldquo;AAA&rdquo;) pursuant to its Commercial Arbitration Rules and Supplementary Procedures for Consumer-Related Disputes in effect on the date the arbitration is filed (&ldquo;AAA Rules&rdquo;), as modified by this Arbitration Agreement. The AAA Rules are available on the AAA&apos;s website https://www.adr.org, or by calling the AAA at (800) 778-7879. Any arbitration hearing that you attend will be held at a place chosen by the AAA in the same city as the U.S. District Court closest to your then current billing address, or at some other place to which you and Perfxt agree in writing. A single, neutral arbitrator will resolve Claims. The arbitrator will be either a lawyer with at least ten (10) years&apos; experience or a retired or former judge, selected in accordance with the AAA rules. Those procedures and rules may limit the discovery available to you or us. The arbitrator will take reasonable steps to protect your customer account information and other confidential information if requested to do so by you or us. The payment of administrative and arbitrator&apos;s fees will be governed by the AAA&apos;s rules. The arbitrator&apos;s award is final and binding on the parties. Any Claim you have must be commenced within one (1) year after the Claim arises.</p>
            </div>
          </div>

          {/* 22 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">22.</span> Governing Law.</h2>
            <div className="term-section-body">
              <p className="term-body-text">You agree that:<br /><br />
                (i) the Services shall be deemed solely based in California; and<br /><br />
                (ii) the Services shall be deemed a passive one that does not give rise to personal jurisdiction over us, either specific or general, in jurisdictions other than California.
              </p>
              <p className="term-body-text">These Terms (together with the Privacy Policy) and any Claims shall be governed by the internal substantive laws of the State of California, without regard to its conflict of laws principles. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You agree to submit to the personal jurisdiction of the federal and state courts located in Los Angeles County, California for any actions for which we retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a our copyrights, trademarks, trade secrets, patents, or other intellectual property or proprietary rights, as set forth in the Arbitration provision above, including any provisional relief required to prevent irreparable harm. You agree that Los Angeles County, California is the proper forum for any appeals of an arbitration award or for trial court proceedings in the event that the arbitration provision below is found to be unenforceable.</p>
            </div>
          </div>

          {/* 23 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">23.</span> Notification Procedures; Modifications.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Perfxt may provide notifications, whether such notifications are required by law or are for marketing or other business -related purposes, to you via email notice, written or hard copy notice, or through posting of such notice on our website, as determined by Perfxt in our sole discretion. Perfxt reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in these Terms. Perfxt is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us. These Terms are subject to revision by Perfxt, in its sole discretion, and so you should review this page periodically. If we deem any of the revisions to be material changes, we will notify you by updating the “Last updated” date at the bottom of this page and notify you that material changes have been made to these Terms.  If any change is found invalid, void or for any reason unenforceable, that change is severable and does not affect the validity and enforceability of any remaining changes or conditions. You should check for any new notices of changes regularly and stay informed of the Terms Your continued use of the Services after any change, regardless of whether a change was received by you directly, indicates your acceptance and agreement to any such change. If you do not agree to any of these terms or any future Terms of Use, do not use or access (or continue to access) the Service.</p>
            </div>
          </div>

          {/* 24 */}
          <div className="term-section-box">
            <h2 className="term-section-title"><span className="term-section-num">24.</span> Miscellaneous.</h2>
            <div className="term-section-body">
              <p className="term-body-text">Unless otherwise specified herein, these Terms, together with the Privacy Policy and any supplemental terms, including the Orders and Shipping and Returns and Refunds policies, constitute the entire agreement between you and Perfxt with respect to the Services and supersede all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and Perfxt with respect to the Services.  If any part of these Terms is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect. The failure of Perfxt to act with respect to a breach by you or others does not waive Perfxt's right to act with respect to subsequent or similar breaches.  Perfxt's failure to exercise or enforce any right or provision of these Terms of Use shall not constitute a waiver of such right or provision.  These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Perfxt without restriction. The section headings contained in these Terms are included for convenience only and shall not limit or otherwise affect the terms of these Terms.</p>
            <p className="term-body-text">Last updated: June 24, 2025 </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
