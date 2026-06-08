import AreaNews from "../components/AreaNews";
import ReporterUpdates from "../components/ReporterUpdates";
import LiveEvents from "../components/LiveEvents";
import CrimeUpdates from "../components/CrimeUpdates";
import TrafficUpdates from "../components/TrafficUpdates";

const LocalNews = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">

      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        Local News Dashboard
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Area-wise News</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <AreaNews />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Reporter Updates</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <ReporterUpdates />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Live Events</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <LiveEvents />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Crime Updates</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <CrimeUpdates />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Traffic Updates</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <TrafficUpdates />
        </div>
      </section>

    </div>
  );
};

export default LocalNews;