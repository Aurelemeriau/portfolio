import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Site( { site, animation } ) {

    return (
      <div className={animation ? "isAnime" : "notAnime"}>
        <div className='card_site'>
          <img src={site.image} alt={site.name} />
            <div id="style">
                <h2>{site.name}</h2>
                <p>{site.description}</p>
                 <div className='nav'>
                 <a href={site.bouton1.url}><button>{site.bouton1.text}</button></a>
                 <a href={site.bouton2.url}><button>{site.bouton2.text}</button></a>
                 {/* <NavLink to={`/${site.name}`}>
                    <Button />
                 </NavLink> */}
                 </div>
            </div>
        </div>
      </div>
    )
}

Site.propTypes = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bouton1: PropTypes.string.isRequired,
    bouton2: PropTypes.string.isRequired
  }).isRequired,
};

export default Site