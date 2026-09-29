import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Products } from "@/src/components/Products";
import { Feature } from "@/src/components/Feature";
import { ServingService } from "@/src/components/ServingService";
import { Delivery } from "@/src/components/Delivery";
import { About } from "@/src/components/About";
import { FinalCta } from "@/src/components/FinalCta";
import { Footer } from "@/src/components/Footer";
import { ProcessVideo } from "@/src/components/ProcessVideo";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <Feature />
      <ProcessVideo />
      <ServingService />
      <Delivery />
      <About />
      <FinalCta />
      <Footer />
    </main>
  );
}