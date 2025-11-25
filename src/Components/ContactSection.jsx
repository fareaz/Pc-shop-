export default function ContactSection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact & Service Center
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

         
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Service Center Address</h3>
            <p className="text-gray-700 leading-relaxed">
              PC Shop Service Hub <br />
              Maltiplan Tower, 12th Floor,<br /> 
              Gulshan, Dhaka 1200 <br />
              Bangladesh
            </p>
          </div>

    
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <p className="text-gray-700 leading-relaxed">
              Customer Support: <br />
              <span className="font-semibold text-lime-600">+880 17 0000 0000</span>
            </p>
            <p className="text-gray-700 mt-3">
              Warranty / Repairs: <br />
              <span className="font-semibold text-lime-600">+880 18 0000 0000</span>
            </p>
          </div>

     
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-gray-700">
              General Inquiries:{" "}
              <span className="font-semibold text-lime-600">
                support@pcshop.com
              </span>
            </p>
            <p className="text-gray-700 mt-3">
              Warranty Queries:{" "}
              <span className="font-semibold text-lime-600">
                warranty@pcshop.com
              </span>
            </p>
          </div>

      
          <div className="bg-white shadow-md p-6 rounded-xl md:col-span-2 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-3">Support Hours</h3>
            <p className="text-gray-700 leading-relaxed">
              Saturday – Thursday:{" "}
              <span className="font-semibold">10:00 AM – 8:00 PM</span> <br />
              Friday: <span className="font-semibold">Closed</span> <br />
              Customer support available on FB Messenger 24/7.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
