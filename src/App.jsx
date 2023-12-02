/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import Projets from './components/Projets'
import Site from './components/Site';
import { GrMysql } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoFilterCircleOutline } from "react-icons/io5";


function App() {

  const [float, setFloat] = useState(true);
  const handleFloat = () => {
    setFloat(!float);
  };

  const [card, setCard] = useState(0);
  const [animation, setAnimation] = useState(false);

  const projets = [

    {
      id: 1,
      name: "Gym_Studio",
      image: "./images/Gym_Studio.png",
      description: "Gym Studio est un projet de groupe. Il a été réalisé en 2 semaines, il s'agit d'un site vitrine sur le thème de coaching sportif personnalisé. La fonctionnalité du site a été priorisée en proposant aux utilisateurs une navigation sous forme de tunnel leur permettant d'afficher directement leur sélection.",
      bouton1: { text: 'Voir', url: 'https://gym-studio-projet1-r9il.vercel.app/' },
      bouton2: { text: 'Repo Github', url: 'https://github.com/hlnvrnt/GymStudio' }
    },
    {
      id: 2,
      name: "Wookie_Taxi",
      image: "./images/Wookie_Taxi.png",
      description: "Wookie Taxi est mon 2ème projet de groupe et le 1er service de co-voiturage galactique ! Le but était de se servir d'une API pour en afficher les données. Le site a été réalisé en 4 semaines avec React et en mode Agile.",
      bouton1: { text: 'Voir', url: 'https://wookie-taxi.vercel.app/' },
      bouton2: { text: 'Repo Github', url: 'https://github.com/NadineJhb/wookie_taxi' }
    },
    {
      id: 3,
      name: "Magic_8_Ball",
      image: "./images/Magic_8_Ball.png",
      description: "Un autre projet collectif, celui-ci réalisé en seulement quelques heures afin de capitaliser sur React. Jeu reprenant le concept de la MagicBall proposant des réponses aléatoires aux questions de l'utilisateur.",
      bouton1: { text: 'Voir', url: 'https://game-8-ball.vercel.app/' },
      bouton2: { text: 'Repo Github', url: 'https://github.com/Aurelemeriau/jeu-8-ball' }
    },
    // {
    //   name: "",
    //   image: "",
    //   description: "",
    // },
  ]

  return (
    <>
    <div className='navbarre'>

<ScrollLink
  onClick={handleFloat}
  activeClass="active"
  to="accueil" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Accueil
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="projets" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Projets
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="competences" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Compétences
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="contact" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Contact
</ScrollLink>


    </div>

    <IoFilterCircleOutline className="float" onClick={handleFloat} />

<div className={`burger ${
          float ? "filtersVisible" : "filtersInvisible"
        }`}
      >
<div className='scroll'>
<ScrollLink
  activeClass="active"
  to="accueil" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Accueil
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="projets" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Projets
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="competences" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Compétences
</ScrollLink>

<ScrollLink
  activeClass="active"
  to="contact" // Remplacez "sectionID" par l'ID de la section que vous voulez atteindre
  spy={true}
  smooth={true}
  offset={-70} // Ajustez cet offset selon votre mise en page
  duration={500}
>
  Contact
</ScrollLink>
</div>
</div>
    
      
    <div id="accueil" className='intro'>

      <div className='aurel'>
        <img src="./images/Aurel.png"></img>
      </div>
      
      <div className='info'>
        <p className='nom'>AURELIEN EMERIAU</p>
        <p className='job'>Développeur Web</p>
        <a href="https://github.com/Aurelemeriau" >
        <img className='git' src="./images/github.png"></img>
        </a>
        <a href='https://www.linkedin.com/in/aur%C3%A9lien-emeriau/'>
        <img className="ln" src="./images/linkedin.png"></img>
        </a>
        <a href="mailto:aurelien.emeriau@hotmail.fr">
        <img className='email' src="./images/email.png"></img>
        </a>
      </div>

    </div>
   
      {/* <div id="propos" className='propos'>
          <div className='moi'>
            <h1>A PROPOS DE MOI</h1>
            <p className='intro'>
         Actuellement en formation à la Wild Code School, pour obtenir le titre
         professionnel "développeur web et web mobile".
         J'ai déjà pu mettre mes compétences en pratique en travaillant en groupe sur plusieurs projets clients.
         Ma détermination à apprendre et ma passion pour la technologie pour créer des solutions numériques innovantes me poussent à aller jusqu'au bout des projets et à avoir un
         produit final impeccable. 
            </p>
            <button type='button'>Télécharger mon CV</button>
          </div>
      </div> */}

      <div id='projets' className='projets'>

        <h1>PROJETS</h1>
        <Projets projets={projets} setCard={setCard} card={card} animation={animation} setAnimation={setAnimation}/>
        <Site site={projets[card]} animation={animation}/>

      </div>


      <div id='competences'className='competences'>

          <div className='text'>
            <h1>COMPETENCES</h1>
            <p>J'aime créer des choses qui prennent forme à l'écran, aussi bien des sites Web, des applications ou quoi que ce soit entre les deux. J’adore voir mon imagination s’animer sous les clics, autant que résoudre des casses-têtes exigeants.
Voici les outils avec lesquels j’aime particulièrement travailer.</p>
          </div>

      <div className='wrap'>

        <div className='images'>
            <div className='front'>
              <p>Front-end</p>
            </div>

            <div className='logo-front'>
              <FaHtml5 className='html'/>
              <IoLogoJavascript className='js'/>
              <FaReact className='react'/>
            </div>

        </div>

        <div className='images'>
            <div className='back'>
              <p>Back-end</p>
            </div>

            <div className='logo-back'>
              <GrMysql className='sql'/>
              <FaNode className='node'/>
              <TbApi className='api'/>
            </div>
        </div>

        <div className='images'>
            <div className='tools'>
              <p>Tools</p>
            </div>

            <div className='logo-tools'>
              <FaGithub className='git'/>
              <FaFigma className='figma'/>
              <FaJira className='jira'/>
              <SiPostman className='post'/>
            </div>
        </div>

      </div>

    </div>
      
      <div id='contact' className='contact'>

        <h1>CONTACT</h1>
            <p>Envie d’en savoir plus ? Envoyez-moi quelques lignes et parlons-en.</p>
            <div className='mail'>
            <a href="mailto:aurelien.emeriau@hotmail.fr">
            <button>📧 aurelien.emeriau@hotmail.fr </button>
            </a>
            </div>

      </div>
    </>
  )
}

export default App

