

export default function Services() {

  const ServiceListItem = ({ itemName, test }) => {
    return (
      <div className="flex items-center space-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-middle text-gray-400 font-mono" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        <h1 className="text-gray-400 text-xl my-1 font-mono">{itemName}</h1>
      </div>
    );
  };

  return (
    <>
    <div className="max-w-full mt-10">
      <h1 className="max-w-7xl mx-auto text-center text-5xl mb-10 text-gray-900 font-bold">Services I Provide My Clients</h1>
      <div className="max-w-7xl mx-auto flex space-x-12 px-8">
        <div className="rounded-xl w-1/3  px-16 py-10 bg-gray-900 border-l-8 border-b-8 border-blue-500">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <h3 className="text-4xl mb-6 text-gray-100 mt-2 font-mono">Front-End</h3>
          <ServiceListItem itemName="HTML" />
          <ServiceListItem itemName="CSS" />
          <ServiceListItem itemName="Javascript" />
          <ServiceListItem itemName="React" />
          <ServiceListItem itemName="Wordpress" />
        </div>
        <div className="rounded-xl w-1/3 bg-gray-900 border-l-8 border-b-8 border-blue-500 px-16 py-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>

          <h3 className="text-4xl mb-6 text-gray-100 mt-3 font-mono">Back-End</h3>
          <ServiceListItem itemName="Node JS" />
          <ServiceListItem itemName="MySQL" />
          <ServiceListItem itemName="MongoDB" />
          <ServiceListItem itemName="Swagger" />
          <ServiceListItem itemName="GraphQL" />
        </div>
        <div className="rounded-xl w-1/3 p-20 bg-gray-900 border-l-8 border-blue-500 border-b-8 px-14 py-10">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
          </svg>
          <h3 className="text-4xl mb-6 text-gray-100 mt-3 font-mono">UI/UX Design</h3>
          <ServiceListItem itemName="Adobe XD" />
          <ServiceListItem itemName="Wireframes" />
          <ServiceListItem itemName="Mock Ups" />
          <ServiceListItem itemName="App Design" />
        </div>
      </div>
    </div>
    </>
  )
}
