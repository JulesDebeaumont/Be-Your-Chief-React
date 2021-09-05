import Loading from './Loading'

export function Overlay()
{
    
    return(
        <div className="overlay">
            <h1>Chargement..</h1>
            <Loading/>
        </div>
    );
}

export default Overlay;
