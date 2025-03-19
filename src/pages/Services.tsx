import ServiceCard from '@/components/ServiceCard';

const Services = () => (
  <section id="services" className="bg-[#F1EFEE] text-black px-4 sm:px-6 lg:px-8 py-12">
    <div className="container mx-auto">
      <div className="text-left mb-8 sm:mb-12">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-main-yellow text-xl sm:text-2xl font-bold">-</span>
          <span className="text-text-color text-xl sm:text-2xl font-bold">Services</span>
        </div>
        <div className="flex items-centertext-2xl sm:text-3xlMy Last md:text-2xl lg:text-4xl space-x-2 mb-4">
      <span className="text-text-color font-heebo font-bold">Services</span>
      <span className="text-main-yellow  font-heebo font-bold">I Provide</span>
    </div>      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ServiceCard title="Laravel Backend Development" description="Creating efficient and secure backend solutions for web applications." />
        <ServiceCard title="Algorithm Optimization" description="Improving the performance of algorithms for faster and more efficient execution." />
        <ServiceCard title="Frontend Development" description="Building responsive and user-friendly interfaces using modern technologies." />
      </div>
    </div>
  </section>
);
  export default Services;