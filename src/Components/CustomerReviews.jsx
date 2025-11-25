"use client";

import Marquee from "react-fast-marquee";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Arman Hossain",
      review:
        "Amazing service! Got my gaming PC built within 2 days. Performance is outstanding!",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      review:
        "Fast delivery and original components. Their support really impressed me!",
      rating: 4,
    },
    {
      name: "Tanvir Rahman",
      review:
        "Best price in the market! My motherboard and GPU arrived perfectly.",
      rating: 5,
    },
    {
      name: "Sadia Akter",
      review:
        "Great product quality and very smooth warranty claim experience.",
      rating: 5,
    },
    {
      name: "Rahim Uddin",
      review:
        "Highly recommended! Honest pricing and quick customer service.",
      rating: 4,
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Customer Reviews
      </h2>

      <Marquee
        pauseOnHover={true}
        speed={45}
        gradient={false}
      >
        <div className="flex gap-6 px-4">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] bg-white shadow-md p-6 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lime-600 font-bold text-sm">
                  {"★".repeat(item.rating)}
                </span>
              </div>

              <p className="text-gray-700 italic">"{item.review}"</p>

              <h4 className="mt-4 font-semibold text-gray-900">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
