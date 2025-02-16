
import Navigation from "@/components/Navigation";
import JournalGrid from "@/components/JournalGrid";

const Journal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-6 pt-32">
        <JournalGrid />
      </main>
    </div>
  );
};

export default Journal;
