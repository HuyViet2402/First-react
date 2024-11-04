import map from './assets/HCMUT_map.jpg'
function Card() {
    return(
        <div className = "card">
            <img className = "card-image" src={map} alt="HCMUT facility 1"></img>
            <h2 className = "card-title">Printer location</h2>
            <p className='card-text'>Enter to explore printer's location based on HCMUT map</p>
        </div>
    );
}

export default Card;