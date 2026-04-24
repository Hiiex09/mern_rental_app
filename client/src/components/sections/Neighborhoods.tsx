const Neighborhoods = () => {
  return (
    <section className="bg-base-200 py-20 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Neighborhood Spotlights
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Chelsea Heights", "Riverside Terrace", "The Enclave"].map((name) => (
          <div key={name} className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://via.placeholder.com/400" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="text-sm opacity-70">Explore community lifestyle</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Neighborhoods;
