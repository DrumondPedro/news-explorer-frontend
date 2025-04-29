import ellipse from '../../../../assets/images/Preloader/ellipse.svg';

function Preloader() {
  return (
    <section className='preloader'>
      <img class='circle-preloader' src={ellipse} alt='' />
      <p className='preloader__text'>Procurando notícias...</p>
    </section>
  );
}

export default Preloader;
