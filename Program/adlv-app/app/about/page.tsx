import React from "react";
import LoadingWrapper from "@/components/navbar/LoadingWrapper";
import { AnimatedTestimonials } from "@/components/bg-animate-ui/animated-testimonials";

const AboutPage = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut ea aliquam vero quam, quae similique nobis earum delectus! Modi culpa quidem voluptas perspiciatis laboriosam molestias quibusdam nulla iste maiores.",
      name: "Wadiyan",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/wadi.jpg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut ea aliquam vero quam, quae similique nobis earum delectus! Modi culpa quidem voluptas perspiciatis laboriosam molestias quibusdam nulla iste maiores.",
      name: "Hafidz Ferzino Afrani",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/hafiz.jpg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut ea aliquam vero quam, quae similique nobis earum delectus! Modi culpa quidem voluptas perspiciatis laboriosam molestias quibusdam nulla iste maiores.",
      name: "Rexlicky Verdhika Sagatha",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/Rexlicky .jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <LoadingWrapper>
          <h1 className="text-3xl text-black font-bold text-center">Pendiri</h1>
          <AnimatedTestimonials testimonials={testimonials} />
        </LoadingWrapper>
      </div>
    </>
  );
};

export default AboutPage;
