import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useState } from 'react';

export function Map(props) {
    const { address, city, name } = props;
    //const url = address.replace(/\s/g, '+') + '+' + city.replace(/\s/g, '+');

    const search = city + ' ' + address;
    const provider = new OpenStreetMapProvider();
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    provider.search({ query: search })
        .then(function (result) {
            if (result[0] !==undefined)
            {
                setX(result[0].x);
                setY(result[0].y);
                setIsLoaded(true);
            }
        });

    //https://github.com/smeijer/leaflet-geosearch

    return (
        <div id="MapMerchant">
            {isLoaded !== true
                ?
                null
                :
                <MapContainer center={[y, x]} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[y, x]}>
                        <Popup>
                            {name}
                        </Popup>
                    </Marker>
                </MapContainer>
            }</div>
    );
}

Map.propTypes =
{
    address: PropTypes.string,
    city: PropTypes.string,
    name: PropTypes.string,
}

export default Map;
