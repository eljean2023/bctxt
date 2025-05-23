// pages/privacy.js
import Link from "next/link";
import { useTranslation } from "react-i18next";
import '../utils/i18n';

export default function PrivacyPolicy() {
    const { t} = useTranslation();
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">

        <div className="container mx-auto max-w-dvw px-12">
      
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-5">
       {t("Your Privacy Is Important to Us")}
      </h1>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
      {t("GENERAL")}
      </h2>

      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("BodyshopConnect by Micazen Consulting & Technologies Inc is very sensitive to the issue of protection of trade secrets and proprietary information. Micazen Consulting & Technologies Inc employees are expected to use good judgment, to adhere to high ethical standards, and to abide by any confidentiality obligations to former employers. Micazen Consulting & Technologies Inc employees shall not use, bring on the premises or otherwise disclose any proprietary or trade secret information of former employers or other third parties. All employees share responsibility to ensure that proper security is maintained.")}
      </h5>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
      {t("YOUR CONFIDENTIALITY")}
      </h2>
      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("We believe your business is no one else’s. Your privacy is important to you and to us. Therefore, we will protect the information you share with us. To protect your privacy, Micazen Consulting & Technologies Inc follows different principles in accordance with worldwide practices for customer privacy and data protection. We won’t sell or give away your name, mail address, phone number, email address or any other information to anyone. We’ll use state-of-the-art security measures to protect your information from unauthorized users.")}
      
      </h5>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
      {t("COLLECTION & USE OF PERSONAL INFORMATION")}
      </h2>
      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("You may be asked to provide your personal information anytime you are in contact with BodyshopConnect or a Micazen affiliated company. Micazen and its affiliates may share this personal information with each other and use it in accordance with this Privacy Policy. Personal Information may include business name, client names, phone numbers, addresses, etc.")}
      </h5>
      <h4 className="text-xl text-center text-gray-500 mt-2 mb-8">
      {t("We do not store or retain any Google user data information.")}
      </h4>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
      {t("PROTECTION OF PERSONAL INFORMATION")}
      </h2>
      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("Micazen and its affiliates will take every precaution including administrative, technical and physical measures to safeguard your personal information against loss, theft and misuse. BodyshopConnect data uses multiple level encryption platform in order to help safeguard against unauthorized access, disclosure and destruction of your data.")}
      
      </h5>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
      {t("THIRD PARTY APPLICATIONS")}
      </h2>
      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("BodyshopConnect may contain links to third party software applications. Which applications are connected can be viewed in the administration section of your software under the Third Party Application section. Each Third Party Application is different and therefore the transfer of your data to each of the third party applications may contain different personal information. Third Party Applications must be authorized by the user and can be disconnected at any time. It is recommended that you check with the third party provider as to their privacy policy.")}
      </h5>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
        {t("APPS & NOTICE TO PARENTS")}
      </h2>
      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("Micazen Consulting & Technologies Inc APPS may access the Camera on your device. The pictures inside the APP cannot access your personal pictures unless you add them through the APP. Parents or guardians: we want to help you guard your children’s privacy. We encourage you to talk to your children about safe and responsible use of their Personal Information while using APPS or the Internet. The Micazen Consulting & Technologies Inc APPS and website does not publish content that is targeted to children.")}
      
      </h5>
      <h2 className="text-xl text-center text-blue-800 mt-2 mb-8">
      {t("UPDATES & ENFORCEMENT")}
      
      </h2>
      <h5 className="text-xl text-center text-gray-700 mt-2 mb-8">
      {t("Occasionally, we may change this privacy policy. If for some reason you believe Micazen Consulting & Technologies Inc has not adhered to these principles, please notify us by email at privacy@bodyshopconnect.com and we will do our best to determine and correct the problem promptly. Please make sure the words Privacy Policy are in the Subject line. Thank you.")}
     
      </h5>
    </div>

        <p className="mt-10 text-center">
          <Link href="/" className="text-orange-500 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </>
  );
}
