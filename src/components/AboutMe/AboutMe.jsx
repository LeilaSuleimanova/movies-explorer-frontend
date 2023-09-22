import { Link } from "react-router-dom";
import "./AboutMe.css";
import photo from "../../images/pic-my.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студентка</h2>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <p className="about-me__name">Лейла</p>
          <p className="about-me__about">Фронтенд-разработчик</p>
          <p className="about-me__description">
            Я родилась и живу в Ростове, закончила факультет экономики ДГТУ. У
            меня есть два сына. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начала кодить. С 2009 года работала в компании ОАО «Денеб».
            После того, как прошла курс по веб-разработке, начала заниматься
            фриланс-заказами и ушла с постоянной работы.
          </p>
          <Link
            className="about-me__link"
            to="https://github.com/LeilaSuleimanova"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="фотография студента"
        ></img>
      </div>
    </section>
  );
};

export default AboutMe;
