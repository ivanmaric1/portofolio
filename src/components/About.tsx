import React from 'react';
import './About.scss';
import html from '../img/programs/html5.png';
import css from '../img/programs/css3.png';
import js from '../img/programs/js.png';
import sass from '../img/programs/sass.png';
import react from '../img/programs/react.png';
import typescript from '../img/programs/typescript.png';
import xd from '../img/programs/xd.png';
import ps from '../img/programs/ps.png';
import git from '../img/programs/git.png';
import github from '../img/programs/github.png';
import about1 from '../img/about1.png';
import about2 from '../img/about2.png';
import about3 from '../img/about3.png';

const About = () => {
  return (
    <div className="About section" id="about">
      <div className="About-info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis animi
        nemo nihil magni excepturi veniam quae iste, deserunt, accusantium
        exercitationem asperiores? Praesentium dolores voluptates labore natus.
        Modi placeat vitae ad labore, perspiciatis laborum tenetur vel accusamus
        sit nesciunt architecto possimus temporibus! Dolorem sunt asperiores
        dolorum facere libero voluptas nulla amet sequi laboriosam nisi facilis
        dignissimos dolor accusantium aut vel sit, quod eos corrupti maiores
        quidem sed! Unde repellendus necessitatibus maxime beatae? Eos ex
        similique, quia minus hic itaque, vel pariatur veritatis suscipit,
        nostrum accusantium incidunt sequi sunt. Numquam repellendus non
        ratione, iste tenetur nobis iusto dolorum ducimus corrupti! Eum beatae
        aperiam quo placeat facilis reprehenderit, cum fuga! Consectetur
        deleniti totam et ullam aut sequi repudiandae eos harum esse! Soluta
        numquam corporis aliquam nostrum, rem labore dolorum voluptate minus
        cumque? Tenetur ratione quidem commodi dolore voluptas praesentium,
        reprehenderit laboriosam sequi maiores aspernatur, temporibus molestiae!
        Quasi officia illum dolores? Vitae excepturi mollitia perspiciatis
        exercitationem ut aspernatur inventore eum dicta sed porro deleniti
        labore adipisci voluptate totam similique dolorum, facilis culpa aliquam
        quae. Natus, quidem. Corporis explicabo facere totam eum illum adipisci
        quam ut perspiciatis in, labore, similique neque eveniet, tempore harum
        assumenda molestiae. Esse, possimus labore aspernatur quos vero culpa
        voluptas autem.
        <ul className="About-programs">
          <li>
            <img src={html} alt="" />
          </li>
          <li>
            <img src={css} alt="" />
          </li>
          <li>
            <img src={js} alt="" />
          </li>
          <li>
            <img src={sass} alt="" />
          </li>
          <li>
            <img src={react} alt="" />
          </li>
          <li>
            <img src={typescript} alt="" />
          </li>
          <li>
            <img src={xd} alt="" />
          </li>
          <li>
            <img src={ps} alt="" />
          </li>
          <li>
            <img src={git} alt="" />
          </li>
          <li>
            <img src={github} alt="" />
          </li>
        </ul>
      </div>
      <div className="About-img">
        <img src={about1} alt="aboutImage" />
        <img src={about3} alt="aboutImage" />
        <img src={about2} alt="aboutImage" />
      </div>
    </div>
  );
};

export default About;
