import React from "react";
import LoadingWrapper from "@/components/navbar/LoadingWrapper";
import { AnimatedTestimonials } from "@/components/bg-animate-ui/animated-testimonials";

const AboutPage = () => {
  const testimonials = [
    {
      quote:
        "saya mahasiswa IT, adalah inovator masa depan. Dengan semangat belajar yang tak pernah padam, kami menjelajahi dunia teknologi untuk menciptakan solusi cerdas yang mempermudah hidup manusia. Dalam perjalanan ini, kami berkomitmen untuk terus belajar, beradaptasi, dan memberikan kontribusi nyata kepada masyarakat",
      name: "Wadiyan",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/wadi.jpg",
    },
    {
      quote:
        "Teknologi adalah masa depan, dan kami adalah arsiteknya. Sebagai mahasiswa IT, kami percaya pada kekuatan logika, kreativitas, dan kolaborasi. Dengan keberanian menghadapi tantangan serta semangat untuk terus berkembang, kami siap membangun dunia yang lebih terhubung dan efisien melalui teknologi.",
      name: "Hafidz Ferzino Afrani",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/hafiz.jpg",
    },
    {
      quote:
        "Belajar, berinovasi, dan memberikan dampak positif adalah misi kami. Sebagai mahasiswa IT, kami percaya bahwa teknologi adalah alat untuk membangun masa depan yang lebih baik. Dengan dedikasi dan tekad, kami siap menciptakan karya yang tidak hanya berguna, tetapi juga menginspirasi generasi mendatang.",
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
