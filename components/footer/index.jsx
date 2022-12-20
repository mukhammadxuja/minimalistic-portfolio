import moment from 'moment';

const Footer = () => {
  const year = moment().format('YYYY');
  return (
    <footer className="py-4 md:py-8">
      <p className="text-lg font-medium">&copy;{year}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
