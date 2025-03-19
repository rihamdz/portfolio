const ServiceCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-text-color mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
  export default ServiceCard;