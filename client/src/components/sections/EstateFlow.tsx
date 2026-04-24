const EstateFlow = () => {
  return (
    <section className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        The Estate Flow Living Philosophy
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-primary text-white col-span-2">
          <div className="card-body">
            <h3 className="card-title">Curated Solitude</h3>
            <p>Quiet zones for focused work and reflection.</p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3>Neighborhood Nodes</h3>
            <p>Workshops and community dinners.</p>
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h3>Concierge</h3>
            <p>24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateFlow;
