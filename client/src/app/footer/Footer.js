import {
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialVkontakte,
  SlSocialGoogle,
} from "react-icons/sl";

import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footer-info"></div>
      <div className="footer-social">
        <div className="footer-social-info">
          <div className="footer-social-number">
            <a href="tel:88005058286">8 (800) 505-82-86</a>
          </div>
          <div className="footer-social-numberPostfix">
            <p>Задать вопрос или оформить покупку</p>
          </div>
        </div>
        <div className="footer-social-info">
          <p>Напишите нам:</p>
          <a href="mailto:mail@constrco.com">mail@constrco.com</a>
        </div>
        <div className="footer-social-info">
          <a>
            <SlSocialInstagram />
          </a>
          <a>
            <SlSocialYoutube />
          </a>
          <a>
            <SlSocialVkontakte />
          </a>
          <a>
            <SlSocialGoogle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
