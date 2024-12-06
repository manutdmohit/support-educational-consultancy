const services = [
  {
    title: 'Academic Planning',
    description: 'Personalized academic roadmaps for students',
  },
  {
    title: 'College Admissions Consulting',
    description: 'Expert guidance through the college application process',
  },
  {
    title: 'Curriculum Development',
    description: 'Custom curriculum design for schools and institutions',
  },
  {
    title: 'Educational Technology Integration',
    description: 'Implementing effective EdTech solutions',
  },
];

export default function Services() {
  return (
    <main className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
