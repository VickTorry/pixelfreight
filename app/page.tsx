// app/page.tsx

import BrokerSection from "@/components/BrokerSection/BrokerSection";
import CarrierSection from "@/components/CarrierSection/CarrierSection";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import OurServices from "@/components/OurServices/OurServices";
import SiteBenefits from "@/components/SiteBenefits/SiteBenefits";
import TrustBar from "@/components/TrustBar/TrustBar";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import WhyUsSection from "@/components/WhyUsSection/WhyUsSection";
import BookAuditSection from "@/components/BookAuditSection/BookAuditSection";
import Footer from "@/components/Footer/Footer";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import ConsultingSection from "@/components/ConsultingSection/ConsultingSection";




export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <OurServices />
      <SiteBenefits />
      <CarrierSection />
      <BrokerSection />
      <ConsultingSection />
      <WhyUsSection />
      <BookAuditSection />
      <TrustedBy />
      <Footer />
    </>
  );
}
