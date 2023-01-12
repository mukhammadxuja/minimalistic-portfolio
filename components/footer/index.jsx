import moment from 'moment';

const Footer = () => {
  const year = moment().format('YYYY');
  return (
    <footer className="flex items-center justify-between py-4 md:py-8">
      <p className="text-lg font-medium">&copy;{year}. All rights reserved.</p>
      <p className="text-lg font-medium">
        Inspired by 
        <a
          className="text-[#C15866] ml-1"
          href="https://dribbble.com/shots/9777097-Drod-2020-Portfolio-Concept"
          target="_blank"
          rel="noopener noreferrer"
        >
          Drod
        </a>
      </p>
    </footer>
  );
};

export default Footer;
