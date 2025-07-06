import React from "react";
import Testimonial from "../components/Testimonial";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company Inc",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "This product has changed my life for the better! Highly recommended.",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    image:
      "https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Amazing service and top-notch quality!",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    image:
      "https://images.unsplash.com/photo-1618568949779-895d81686151?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Amazing service and top-notch quality!",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image} 
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
