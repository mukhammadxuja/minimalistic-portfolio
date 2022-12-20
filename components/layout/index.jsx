import { Navbar, Footer } from 'components';


const Layout = ({ children }) => {


  return (
    <div className="mx-auto max-w-5xl px-5 md:px-0">
      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
