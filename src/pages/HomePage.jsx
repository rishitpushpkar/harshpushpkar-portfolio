import HeroSection from "../sections/HeroSection";
import WhatIDidSection from "../sections/WhatIDidSection";
import WhatIDoSection from "../sections/WhatIDoSection";
import DesignProcessSection from "../sections/DesignProcessSection";
import QuotationPage from "../sections/QuotationSection";
import MarqueeSection from "../sections/MarqueeSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhatIDoSection />
      <WhatIDidSection />
      <MarqueeSection />
      <DesignProcessSection />
      <QuotationPage />
    </div>
  );
}
