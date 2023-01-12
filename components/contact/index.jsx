import { BsLinkedin, BsTelegram, BsInstagram, BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact" className="my-10 md:my-20 lg:my-32">
      <h2 className="tet-2xl font-bold md:text-4xl md:font-extrabold">
        Say hi at <br />
        mukhammadxuja@gmail.com <br />
        or stay in touch.
      </h2>
      <ul className="my-5 flex items-center space-x-4 md:my-10">
        <li className="text-xl md:text-2xl">
          <a href="https://www.linkedin.com/in/mukhammad-anvarov-99649b22a/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </li>
        <li className="text-xl md:text-2xl">
          <a href="https://github.com/mukhammadxuja" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </li>
        <li className="text-xl md:text-2xl">
          <a href="http://t:me//akzmsh" target="_blank" rel="noopener noreferrer">
            <BsTelegram />
          </a>
        </li>
        <li className="text-xl md:text-2xl">
          <a href="https://www.instagram.com/mukhammadxuja/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
