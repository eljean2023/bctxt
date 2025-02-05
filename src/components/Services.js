const Services = () => {
    return (
      <section id="services" className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold">Web Design</h3>
            <p className="mt-4">Creating stunning user experiences.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold">App Development</h3>
            <p className="mt-4">Innovative apps for all platforms.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold">Marketing Strategy</h3>
            <p className="mt-4">Boosting your brand with digital marketing.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  