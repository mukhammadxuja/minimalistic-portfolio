const Projects = () => {
  return (
    <section id="projects" className="mt-10 md:mt-20 lg:my-32">
      <h5 className="my-3 text-lg font-semibold uppercase text-gray-500">Projects</h5>
      <div>
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <a
            className="text-xl font-bold duration-200 hover:opacity-80 md:text-4xl md:font-extrabold cursor-not-allowed	"
            href="#!" //https://frontendresources.vercel.app/
            // target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Resources
          </a>
          <p className="text-sm md:text-lg font-normal md:font-bold">Current</p>
        </div>
        <div className="my-4 flex items-center justify-between md:my-6">
          <a
            className="text-xl font-bold duration-200 hover:opacity-80 md:text-4xl md:font-extrabold"
            href="https://www.dotsoft.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dotsoft team
          </a>
          <p className="text-sm md:text-lg font-normal md:font-bold">Oct 2022 - Nov 2022</p>
        </div>
        <div className="my-4 flex items-center justify-between md:my-6">
          <a
            className="text-xl font-bold duration-200 hover:opacity-80 md:text-4xl md:font-extrabold"
            href="https://www.edteach.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edteach - quiz app
          </a>
          <p className="text-sm md:text-lg font-normal md:font-bold">Jun 2022 - Dec 2022</p>
        </div>
        <div className="my-4 flex items-center justify-between md:my-6">
          <a
            className="text-xl font-bold duration-200 hover:opacity-80 md:text-4xl md:font-extrabold"
            href="https://inreport.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            InReport System
          </a>
          <p className="text-sm md:text-lg font-normal md:font-bold">Sep 2021 - May 2022</p>
        </div>
        <div className="my-4 flex items-center justify-between md:my-6">
          <a
            className="text-xl font-bold duration-200 hover:opacity-80 md:text-4xl md:font-extrabold"
            href="https://indebt.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            InDept System
          </a>
          <p className="text-sm md:text-lg font-normal md:font-bold">Fev 2021 - Aug 2022</p>
        </div>
        <div className="my-4 flex items-center justify-between md:my-6">
          <a
            className="text-xl font-bold duration-200 hover:opacity-80 md:text-4xl md:font-extrabold"
            href="https://www.lazydev.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lazydev ui
          </a>
          <p className="text-sm md:text-lg font-normal md:font-bold">Mar 2022 - Jul 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
