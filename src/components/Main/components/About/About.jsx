import aboutImage from '../../../../assets/images/About/about_image.jpg';

function About() {
  return (
    <section className='about'>
      <img
        className='about__image'
        src={aboutImage}
        alt='Foto em preto e branco de um homem jovem usanndo oculos escuros e usanod uma farda de gala do Exército Brasileiro'
      />
      <div className='about__content'>
        <h2 className='about__title'>Sobre o autor</h2>
        <p className='about__text'>
          Oi! Eu sou o Pedro e atualmente estou em transição de carreira. E para
          ingressar na área da tecnologia finalizei recentemente o bootcamp de
          desenvolvimento web da TripleTen, onde aprendi as seguintes
          tecnologias: JS, HTML, CSS, React, Node.js e Express. Aprendi também a
          trabalhar com banco de dados não relacionais, utilizando o MongoDB e o
          Mongoose.
        </p>
      </div>
    </section>
  );
}

export default About;
