const Header = () => {
  return (
    <header className="my-10 md:my-20">
      <h1 className="text-lg font-semibold md:text-xl">
        <b>Anvarov Muhammad</b> - Frontend Developer based in Uzbekistan.
        <br />
        Member at
        <a
          className="text-[#C15866] hover:text-opacity-70 hover:underline"
          href="https://www.dotsoft.uz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          .Soft team
        </a>{' '}
        since 2022.
      </h1>
    </header>
  );
};

export default Header;
