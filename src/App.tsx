import rebrandingIllu from './assets/annonce-illu.svg';
import logoExtraSmall from './assets/logo-extra-small.svg';
import './App.scss';

const App = () => {
  return (
    <>
      <header>
        <div>
          <img src={logoExtraSmall} alt='Maque Tapage' />
          <h1 className='manrope-text'>Marque Tapage</h1>
        </div>
        <div className='btn'>
          <p className='manrope-text'>Bientôt!</p>
        </div>
      </header>
      <main>
        <img src={rebrandingIllu} alt='Annonce rebranding' />
        <h2 className='manrope-text'>
          Votre librairie favorite poursuit sa transformation... Préparez-vous
          au renouveau!
        </h2>
        <p className='manrope-text'>
          Après avoir déménagé à Battice, le Marque Tapage ne s'arrête pas là
          dans sa métamorphose ! Nous sommes ravis de vous annoncer que nous
          changeons de logo et que notre tout nouveau site internet est
          actuellement en cours de création. Imaginez un espace digital repensé,
          plus intuitif, où vous pourrez découvrir nos dernières nouveautés,
          explorer vos auteurs préférés et retrouver toutes les informations sur
          nos événements. Le chantier bat son plein et nous mettons tout en
          œuvre pour vous offrir une expérience en ligne à la hauteur de votre
          passion pour les livres. Rendez-vous dans quelques semaines pour le
          grand reveal et plongez avec nous dans cette nouvelle ère du Marque
          Tapage !
        </p>
      </main>
    </>
  );
};

export default App;
