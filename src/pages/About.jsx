import Button from "../ui/Button";

function About() {
  return (
    <div className="lg:min-h-[55dvh] min-h-[45dvh] py-5 pl-4 md:pl-0 flex flex-col">
      <div>
        <h1 className="lg:text-[5rem] text-[3rem] font-semibold text-primary ">
          NIXZO
        </h1>
        <h3 className="text-2xl font-light text-primary tracking-[.5rem] pb-10">
          TRENDY WEARABLES
        </h3>
      </div>

      <div>
        <p className="lg:text-xl text-lg text-gray-900 pr-8 xl:pr-[45rem]">
          Welcome to NIXZO, where fashion meets individuality. Our collection is
          curated with love, offering unique styles that empower you to express
          your true self. From timeless classics to bold trends, we believe in
          making every outfit a statement. Quality, comfort, and sustainability
          are at the heart of what we do. Step into a world where your style
          story unfolds beautifully, one piece at a time.
        </p>
      </div>

      <div className="lg:pt-10 pt-16">
        <Button label={"Get in Touch"} type={"standard"} />
      </div>
    </div>
  );
}

export default About;
