import SocialMediaLinks from "../pieces/medialinks";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 flex flex-col mx-4 mt-16 mb-4 sm:mx-16 2xl:mx-40">
      <h1 className="text-virid italic grow mb-4 font-light text-4xl text-left xsml:text-5xl">
        Contact
      </h1>

      <div className="flex flex-col gap-4 md:flex-row-reverse mt-24 md:mt-0">      

          

        <SocialMediaLinks />
      </div>

    </section>
  )
};