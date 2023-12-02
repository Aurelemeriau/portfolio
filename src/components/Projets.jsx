
function Projets( { projets, setCard, setAnimation }) {


  const handleClick = (card) => {
    setCard(card)
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
}

    return (
             (projets.map((site, index) => {
            return   <button className="bouton" onClick={() => {handleClick(index)}} key={index}>
            {site.name}
            </button>
            
          })
          )

   
    )
}

export default Projets;

