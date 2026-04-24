const Hero = () => {
  return (
    <section className="pt-28 px-6 lg:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          Community-First Living
        </p>

        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
          Architecture that breathes{" "}
          <span className="text-primary">together.</span>
        </h1>

        <p className="mt-6 text-base-content/70 max-w-md">
          Experience curated shared spaces designed for connection and
          creativity.
        </p>

        <button className="btn btn-primary mt-6">Explore Spaces →</button>
      </div>

      <div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa0kQtQfvYaM86FrZ06YQrVO79lU1S7SpkTlM4mP_BxN4EgOYyn0ZlF9RBnvnwkt7xV5lj93vIXwBlyaxY4Q6La73kJzHTx52YzYxOr_6wXipxkcdiQAhRwtuBCPYwU4-3rfiPsTea_7ypYc3y8MgiRvGyDDmBf6EUK1AAPY9YgU-cBPIt-5SzEHqDDPFS0wbqXeQk6puvwxCD2z4AEb0w4WIK-LRpBgJv9cviN9ig3zC9l02kfnDMH0DaiQ9DXTDe385gMJjx1SQ"
          className="rounded-3xl shadow-xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
