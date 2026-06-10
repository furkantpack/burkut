import Blog04 from "@/components/blog-04";
import Footer01 from "@/components/footer-01";
import Header05 from "@/components/header-05";
import StatsMetrics07 from "@/components/stats-metrics-07";
import Teams05 from "@/components/teams-05";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-white-0">
      <Header05 />
      <Teams05 />
      <StatsMetrics07 />
      <Blog04 />
      <Footer01 />
    </main>
  );
}
