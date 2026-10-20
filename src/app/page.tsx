import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/layout/CartDrawer";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import MobileBar from "@/components/layout/MobileBar";
import HeroSection from "@/components/home/HeroSection";
import MarqueeBanner from "@/components/home/MarqueeBanner";
import FounderSection from "@/components/home/FounderSection";
import StatsSection from "@/components/home/StatsSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ReviewsSection from "@/components/home/ReviewsSection";
import HairFinder from "@/components/home/HairFinder";
import StandardsSection from "@/components/home/StandardsSection";
import InstagramSection from "@/components/home/InstagramSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <FounderSection />
        <StatsSection />
        <CategoryGrid />
        <FeaturedProducts />
        <StandardsSection />
        <ReviewsSection />
        <HairFinder />
        <InstagramSection />
        <NewsletterSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBar />
    </>
  );
}
