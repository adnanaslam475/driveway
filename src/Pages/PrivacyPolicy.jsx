import React, { useContext } from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import Footer from "../Components/New/Footer";
import LayoutHeader from "../Components/New/Header";
import MyContext from "../AuthMethod/Context";

const PrivacyPolicy = ({ user }) => {
    const context = useContext(MyContext);

    return (
        <div className="relative_div">
            <LayoutHeader context={context} user={user} />

            <div
                style={{
                    padding: "10% 20% 0 20%",
                    backgroundColor: "#F0F2F5",
                }}
            >
                <h3 className="ad_headings"> General </h3>
                <p className="p_italic">
                    Does your business offer anything that Car Enthusiasts need
                    or want?
                </p>
                <p style={{ lineHeight: "1.5" }}>
                    Welcome to GarageRecon.com ( “Garage Recon”). Garage Recon
                    is a website developed, owned and operated by Octane Media
                    Partners, LLC (“OMP”). We respect the privacy of our users
                    when they use our websites and/or any other related online
                    applications or products and services. By using the Garage
                    Recon site, you consent to the use of your information
                    and information about you in accordance with our Privacy
                    Policy. This Privacy Policy Statement applies to
                    information collected through the Garage Recon site
                    and does not describe the collection, use and disclosure
                    practices of our corporate affiliates or third parties.
                    For information on the collection, use and disclosure
                    practices of any company with whom you are doing
                    business, whether or not affiliated with Garage Recon,
                    please review their privacy policies.
                </p>
                <p style={{ lineHeight: "1.5" }} >
                    Services offered by Garage Recon are not directed to
                    individuals under the age of eighteen (18) years. If
                    you are under eighteen (18) years old, you should not
                    provide any personal information.
                </p>
                <p style={{ lineHeight: "1.5" }}> You do not need to be a registered Garage
                    Recon member to view this web site. However, there are some features that
                    are only accessible if you are registered. This Privacy Policy statement
                    discloses the privacy practices for OMP. OMP is committed to your
                    privacy. OMP hereby notifies you of:</p>
                <ul>
                    <li>What personally identifiable information of yours, or
                        third party personally identifiable information is
                        collected from you through Garage Recon.</li>
                    <li>The company collecting the information.</li>
                    <li>How the information is used.</li>
                    <li>With whom the information may be shared.</li>
                    <li>What choices are available to you regarding collection,
                        use and distribution of the information.</li>
                    <li>How you can correct any inaccuracies in the information.</li>
                </ul>











                <h3 className="ad_headings"> Information We Collect and Use </h3>
                <p> Information is gathered from Garage Recon by OMP, its
                    service providers, advertisers, sponsors and partners.
                    Information is collected when you:                </p>
                <ul style={{}} className="ad_ul">
                    <li>Register for one of Garage Recon’s products or services.
                        In order to use all the services of Garage Recon, a
                        user must first complete the "Member Profile" registration
                        form. During registration, users are required to give
                        information such as name, address, e-mail address, age,
                        gender, online purchase habits and income. Mailing
                        address and e-mail address is primarily used to confirm
                        the identity of the user. This information is also
                        used to contact the user about the services on Garage
                        Recon for which he/she has expressed interest. Information
                        as to the age, gender, purchasing habits, and income level
                        and other unique identifiers (such as interests) are
                        requested to help OMP provide a more personalized
                        experience on Garage Recon.</li>
                    <li>Communicate with sellers or advertisers via services
                        such as “Contact Seller”, “Ask Seller A Question”,
                        and other similar email based services offered on
                        Garage Recon;</li>
                    <li> Make information available to us via social networking
                        logins, such as Facebook, Twitter, etc.;</li>
                    <li>Provide payment or credit card information for one of
                        our products or services;</li>
                    <li>Subscribe to newsletters or provide feedback;</li>
                    <li>Participate in surveys, sweepstakes or other promotions.</li>
                </ul>
                <h3 className="ad_headings">Automated Information</h3>
                <p>Information regarding your use of Garage Recon may be
                    collected and/or aggregated through the use of automated
                    means. This may include information such as:</p>
                <ol>
                    <li>Your IP address, the type of browser and operating
                        system used, and the ISP or mobile carrier, and the
                        type of handheld or mobile device that you used;</li>
                    <li>The date and time you access the site and specific
                        pages that you visit, and if you linked from or to
                        another website and the address of that website;</li>
                    <li>Email you open and links you click within those
                        emails; and,</li>
                    <li>Location information. When you use Garage Recon,
                        OMP may collect physical location information that
                        is sufficiently precise to locate a specific person
                        or device. OMP will only collect Location Information
                        with your permission. OMP may use Location Information
                        and provide it to third parties to provide you
                        with content and services that are relevant to a
                        particular location, such as advertising, search
                        results, dealers in the area, and directions</li>
                </ol>
                <h3 className="ad_headings"> Publicly Posted Information</h3>
                <p>Information that you make available to OMP and others via
                    social media networks, forums, blogs, classified or auction
                    sites, chat rooms or similar online services is public
                    information that OMP or others may share or use in
                    accordance with the law. OMP may combine information
                    that you provide with information received from OMP’s
                    affiliates or other sources, as well as information
                    that is automatically collected. The combined information
                    may include
                    information about your use of Garage Recon, use of other sites,
                    devices and mobile applications and information from OMP’s
                    affiliates and other sources.</p>
                <p>
                    When you provide Garage Recon with a testimonial about
                    your experience, OMP may ask for your name, e-mail
                    address, phone number, and feedback regarding your experience.
                    OMP may use this information to contact you regarding
                    your testimonial. Unless you indicate that you do not
                    want to us to promote your testimonial, OMP may quote
                    you, your name and experience may be shared with others
                    or posted publicly to Garage Recon and you may be
                    contacted about your experience.
                </p>
                <h3 className="ad_headings">  How Information Is Collected</h3>
                <p>Various methods and technologies are used to collect information,
                    such as “cookies”, which are small identifiers sent from a web
                    server that are stored on your device for the purpose of identifying
                    your browser or storing information or settings in your browser.
                    A cookie is data stored on the user's computer. Use of a cookie
                    is in no way linked to any personally identifiable information while
                    on Garage Recon. Once the user closes his or her browser, the
                    cookie simply terminates. For instance, by setting a cookie on
                    Garage Recon, the user would not have to log in a Password more
                    than once, thereby saving time while on our site. If a user
                    rejects the cookie, he or she may still use our site. The only
                    drawback to this is that the user may be limited in some areas
                    of Garage Recon. Cookies can also enable us to track the interests
                    of Garage Recon users to enhance the overall user experience.
                    Some of OMP's business partners may use cookies on OMP's site
                    (for example, advertisers). Usually, these cookies exist only
                    if the user links on the ad. OMP has no access to or control over these cookies.</p>
                <p>Anonymous advertising identifiers are increasingly being used on mobile
                    devices
                    and otherwise in a matter similar to cookies.</p>
                <p>OMP may use IP addresses to analyze trends, administer the
                    site, track user's movement, and gather broad demographic
                    information for aggregate use.</p>
                <p>Data technologies, or a combination of more than one data technology,
                    may be used by us, by another party on our behalf, or by third
                    parties in accordance
                    with their privacy policies to transmit information to you or
                    about you and connect information about you from different sources,
                    websites, devices, and mobile applications. When we refer to “data
                    technologies”, we are including all current and similar future
                    technologies.</p>
                <h3 className="ad_headings">  Sharing</h3>
                Garage Recon collects information from its users on every
                classified ad page and/or any other page on the site. OMP
                is the sole owner of all information collected on the
                Garage Recon site. OMP will not sell, share, transfer
                or rent personal information about you with others in
                ways other than the following:
                <ol>
                    <li>OMP may share aggregated demographic information with its partners
                        and advertisers. This is not linked to any personal information
                        that can identify any individual person.</li>
                    <li>OMP may partner with another party to provide specific services.
                        When the user signs up for these services, OMP will share names,
                        or other contact information that is necessary for the third
                        party to provide these services. Per OMP's contractual
                        arrangements with partners, these partners are not allowed
                        to use personally identifiable information except for the
                        explicit purpose of providing these services.</li>
                    <li>OMP shall respond to subpoenas, court orders, or legal process,
                        or to establish or exercise its legal rights or defend against
                        legal claims.</li>
                    <li>OMP will share information if it believes it is necessary in order
                        to investigate, prevent, or take action regarding illegal activities,
                        suspected fraud, situations involving potential threats to physical
                        safety of any persons, violations of Garage Recon’s Privacy Policy,
                        <a>Visitor Agreement</a> and <a>Classified Guidelines</a>, incorporated herein
                        by this reference, or as otherwise required by law.</li>
                    <li>OMP shall transfer information about you if Garage Recon is acquired
                        by or merged with another company. In this event, OMP will notify
                        you before information about you is transferred and becomes subject
                        to a different privacy policy.</li>
                </ol>
                <p>By using Garage Recon and its various features, you may make
                    some of your personal information public or you may choose
                    to share some of your personal information with others. If
                    you post personal information online that is accessible to
                    the public, you may receive unsolicited messages from other
                    parties in return. Before you publish a classified listing
                    on a public website, such as Garage Recon, we suggest that
                    you read and understand the general information provided
                    regarding Online Fraud Prevention.</p>
                <h3 className="ad_headings">  Communications from Garage Recon</h3>
                <p>When you register on the Garage Recon site, you understand
                    that the staff at Garage Recon may contact you from time to time.</p>
                <p>When you register on the Garage Recon site, you will
                    receive a welcoming email to confirm your email and
                    password.</p>
                <p>Registered members will occasionally receive information
                    regarding products, services, special members-only deals
                    from retailers or service providers, or special incentives
                    on listing upgrades or Garage Recon merchandise.</p>
                <p>When you place a classified listing, you will receive a confirmation email that
                    the listing has been published. If you have not completed a listing,
                    which is considered to be in “draft” state, you may receive an email
                    reminder that your listing is not complete. Prior to the
                    expiration of a listing, Garage Recon will e-mail a reminder
                    to the seller that the listing must be updated, renewed or
                    deleted. You will receive an email regarding a listing that
                    expires.</p>
                <p>Garage Recon may call its registered members.
                    Some, but not all, possible reasons for a call to a registered
                    member are to:</p>
                <ol>
                    <li>Investigate suspected fraud.</li>
                    <li>Investigate activity that violates the terms and
                        conditions of the agreements set forth on the Garage Recon website.</li>
                    <li>Warn a member of suspected fraud that may directly affect him or her.</li>
                    <li>Check on the accuracy of account information or classified listing information.</li>
                    <li>Check or confirm the status of an active listing or account that appears to be abandoned.</li>
                    <li>Ask for feedback regarding his or her user experience with Garage Recon.</li>
                    <li>Offer special members-only incentives.</li>
                </ol>
                <p>Garage Recon will publish informative newsletters that
                    will be emailed to registered members. This service
                    is provided free of charge as an added value to our
                    members. If you do not wish to receive our newsletters,
                    you may choose to opt out of this service. See Opt Out
                    Procedures below:
                </p>

                <h3 className="ad_headings">  Opt-Out Procedures</h3>
                <p>You always may opt out of receiving future mailings
                    or other information from OMP. To request that you not
                    receive future communications, please send an e-mail
                    to <a>info@garagerecon.com</a> indicating the type of
                    information that you no longer desire to receive,
                    or change your preferences in your account settings
                    where applicable. If non-registered users wish to
                    subscribe to Garage Recon's newsletter and/or periodic
                    correspondence, we require their e-mail addresses. You
                    must be at least eighteen (18) years of age to subscribe
                    to our newsletter.</p>
                <h3 className="ad_headings"> Recommended Listings</h3>
                <p>If a user elects to use Garage Recon's referral service
                    to inform a friend about the Garage Recon site or a
                    particular listing (or listings), Garage Recon asks
                    for the friend's name and e-mail address. OMP will
                    automatically send the friend a one-time e-mail inviting
                    the friend to visit the site. OMP stores this information
                    for the sole purpose of sending this one-time e-mail.
                    The friend may contact Garage Recon at <a>info@garagerecon.com</a>
                    to request the removal of this information from Garage
                    Recon's database.</p>
                <h3 className="ad_headings"> Social Media and Related Applications </h3>
                <p>Garage Recon may include applications or widgets
                    from social media provides, such as Facebook or
                    Twitter, to allow interaction or content sharing
                    by their users. These widgets, such as “Share”
                    or “Like” buttons are visible on all pages of
                    Garage Recon. Integration between Garage Recon
                    and social media networks may allow these social media
                    networks in which you participate to collect
                    information about you, even when you do not
                    explicitly activate the network’s application or
                    widget. Please visit the related social media network
                    privacy policies to better understand their data
                    collection practices. Garage Recon has no control over
                    how social media networks collect, use or disclose
                    personal information transmitted to these networks.
                </p>
                <h3 className="ad_headings"> Third Party Advertising Networks</h3>
                <p>Garage Recon may partner with third party advertising
                    networks or utilize third-party advertising applications
                    that generate targeted advertising on any pages on the
                    Garage Recon site. In some cases, use of these
                    applications will serve third-party advertisements on
                    Garage Recon. These advertisements may be customized
                    based on predictions generated over time from your
                    visits to various websites other than Garage Recon.
                    You may see an icon in or around these third-party
                    advertisements. Clicking on this icon will provide
                    additional information about the company’s data
                    practices that were used to deliver the ad. Garage
                    Recon does not provide information that is directly
                    associated with a specific person (such as name and
                    address) to any third-party advertising network when
                    you interact with or view a customized advertisement.
                    However, when you view or interact with an advertisement,
                    the advertiser may make the assumption that you are
                    interested in the subject matter of the advertisement.</p>
                <h3 className="ad_headings"> Confidentiality and Security</h3>
                <p>OMP takes all necessary precautions to protect users' personal information both online and off-line.</p>
                <p>However, OMP is not responsible for the confidentiality,
                    security or distribution of your own personal information by our
                    partners and third parties which occurs outside the scope of
                    your agreement with OMP.</p>
                <p>OMP shall not be liable for the transfer of any personal
                    identification information resulting from loss or
                    distribution of data, the delineation or corruption of
                    storage media, power failures, natural phenomena, riots,
                    acts of vandalism, sabotage, terrorism or any other event
                    beyond OMP's control.</p>
                <h3 className="ad_headings"> Links</h3>
                <p>Garage Recon may contain links to other sites.
                    The linked sites are not necessarily under the
                    control of OMP. Please be aware that OMP is not
                    responsible for the privacy practices of such
                    other sites. OMP encourages users to be aware
                    when they leave Garage Recon and to read the privacy
                    statements of each and every web site that collects
                    personally identifiable information. If you decide
                    to access any of the third-party sites linked to
                    this site, you do this entirely at your own risk.
                    Any links to any partner of Garage Recon should
                    be the responsibility of the linking party, and
                    OMP shall not be responsible for notification of any
                    change in name or location of any information of the
                    site.</p>
                <h3 className="ad_headings">Children and Minors</h3>
                <p>OMP strongly encourages parents and guardians to
                    supervise the online activities of their minor
                    children and consider using parental control tools
                    available from online services and software
                    manufacturers to help provide a child-friendly
                    online environment. These tools also can prevent
                    minors from disclosing their name, address, and
                    other personally identifiable information online
                    without parental permission. Garage Recon is not
                    intended for use by minors.</p>
                <h3 className="ad_headings">Site Service and Updates</h3>
                <p>As necessary, Garage Recon may send the user site and
                    service announcement updates. Users are not able to
                    un-subscribe from service announcements, which contain
                    important information about the service. Garage Recon
                    communicates via e-mail with users to provide requested
                    services and to resolve issues relating to their accounts.</p>
                <h3 className="ad_headings">Correcting/Updating Personal Information</h3>
                <p>If a user's personally identifiable information
                    changes (such as ZIP code), or if user no longer desires
                    Garage Recon service(s), he/she can update his/her
                    profile on the "Member Profile" page of Garage Recon.
                    Garage Recon will endeavor to correct, update or remove
                    the personal data provided by the user.
                </p>
                <h3 className="ad_headings">Notification of Changes</h3>
                <p>If OMP decides to change the Garage Recon Privacy Policy,
                    OMP will post those changes on the Garage Recon Homepage
                    so users are always aware of what information OMP
                    collects, how OMP uses it, and under what circumstances,
                    if any, OMP discloses it. If at any point OMP decides
                    to use personally identifiable information in a manner
                    different from that stated at the time it was
                    collected, OMP will notify users by way of an e-mail.
                    Users which have provided personally identifiable
                    information before the changes in the Garage Recon Privacy
                    Policy will have a choice as to whether or not OMP may
                    use their information in this different manner. If the user
                    chooses that OMP not use his/her personally identifiable
                    information in accordance with the new Privacy Policy,
                    OMP will use information in accordance with the Privacy Policy
                    under which the information was originally collected.
                </p>
                <br />
                <p>OMP will notify you of any significant changes to the
                    Garage Recon Privacy Policy by sending you an e-mail
                    notice.</p>
                <br />
                <p>UPDATED January 1, 2018</p>
            </div>
            <Footer />
        </div >
    );
};

export default PrivacyPolicy;