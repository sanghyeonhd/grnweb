
import Navigation from "@/components/Navigation";
import BrandGrid from "@/components/BrandGrid";
import JournalGrid from "@/components/JournalGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-6 pt-32">
        <BrandGrid />
        <JournalGrid />
      </main>
    </div>
  );
};

export default Index;
