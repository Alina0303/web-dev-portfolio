import SectionTitle from "./SectionTitle";
import about from "../assets/about.svg";

const About = () => {
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={about} alt="about image" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a developer who lives at the intersection of creativity and
            constant evolution. My goal is never just to 'finish' a project, but
            to master the technologies behind it. Whether I’m diving into a new
            language or optimizing a legacy codebase, I bring an obsessive focus
            on quality and a commitment to lifelong learning.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
