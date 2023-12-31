import Image from "next/image";
import AboutImage from "@public/assets/img/about.png";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const About = () => {
  return (
    <>
      <Header pageTitle="About US" />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world's largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <a href="#" className="hero_btn btn">
              EXPLORE NOW
            </a>
          </div>
          <div className="about-col">
            <Image
              src={AboutImage.src}
              width={AboutImage.width}
              height={AboutImage.height}
              alt="about"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
