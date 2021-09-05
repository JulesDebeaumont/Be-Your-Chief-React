import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ProfilPic from "./ProfilPic";
import EditionSchedules from './EditionSchedules';
import { useDispatch, useSelector } from 'react-redux'
import DeleteAccountButton from './DeleteAccountButton';
import { allMerchantSpecificationThunk, allMerchantTypeThunk, patchMerchantThunk } from '../../../store/merchant'
import { uploadFile } from '../../../services/accountAPI';

export function EditionMerchant(props)
{
    const { merchant, setEdited } = props;
    const [ copyMerchant, setCopyMerchant] = useState({...merchant});
    const [ image, setImage ] = useState(null);
    const dispatch = useDispatch();
    const isBusy = useSelector((state) => state.app.isBusy);
    const allMerchantSpecification = useSelector((state => state.merchant.specifications));
    const allMerchantType = useSelector((state => state.merchant.types));

    useEffect(() =>
    {
        dispatch(allMerchantTypeThunk());
        dispatch(allMerchantSpecificationThunk());
    }, [dispatch]);

    const selectAllSpecification = Object.values(allMerchantSpecification).map((v) =>
     <option 
     key={v.name} 
     value={v['@id']} 
     >
         {v.name}
    </option>);

    selectAllSpecification.unshift(
        <option 
        key={"noSpecification"}
        value={null}>
        </option>
    )

    const selectAllType = Object.values(allMerchantType).map((v) => 
    <option 
    key={v.name} 
    value={v['@id']} 
    >
        {v.name}
    </option>);

    selectAllType.unshift(
        <option 
        key={"noType"}
        value={null}
        ></option>
    )

    if (isBusy === true)
    {
        return null;
    }

    return(
            <div className="EditionMerchant">
                <ProfilPic image={merchant.imageName}/>
                <span className="ProfileRecipeButton">
                    <span>{'Upload image'}</span>
                    <input type="file" onChange={(event) => setImage(event.target.files[0])}/>
                </span>

                <form className="FormEditionProfil" onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(patchMerchantThunk(copyMerchant)); 
                    if (image !== null)
                    {
                        uploadFile(image);
                    }
                    setEdited(false);
                    }}>

                    <div className="EditionMerchantFirst">
                        <label>Name : </label>
                        <input type="text" value={copyMerchant.name} placeholder="Name" onChange={(event)=> {
                            const copyNameMerchant = {...copyMerchant}
                            copyNameMerchant.name = event.target.value;
                            setCopyMerchant(copyNameMerchant);
                        }}/>

                        <label>Website :</label>
                        <input type="text" value={copyMerchant.webSiteLink} placeholder="Website" onChange={(event)=> {
                            const copyWebSiteMerchant = {...copyMerchant}
                            copyWebSiteMerchant.webSiteLink = event.target.value;
                            setCopyMerchant(copyWebSiteMerchant);
                        }}/>

                        <label>Description :</label>
                        <textarea rows="7" type="text" value={copyMerchant.description} placeholder="Description" onChange={(event)=> {
                            const copyDescriptionMerchant = {...copyMerchant}
                            copyDescriptionMerchant.description = event.target.value;
                            setCopyMerchant(copyDescriptionMerchant);
                        }}/>

                        <label>Address :</label>
                        <textarea rows="3" type="text" value={copyMerchant.address} placeholder="Address" onChange={(event)=> {
                            const copyAddressMerchant = {...copyMerchant}
                            copyAddressMerchant.address = event.target.value;
                            setCopyMerchant(copyAddressMerchant);
                        }}/>

                        <label>City :</label>
                        <input type="text" value={copyMerchant.city} placeholder="City" onChange={(event)=> {
                            const copyCityMerchant = {...copyMerchant}
                            copyCityMerchant.city = event.target.value;
                            setCopyMerchant(copyCityMerchant);
                        }}/>

                        <label>Postal Code :</label>
                        <input type="text" value={copyMerchant.postalCode} placeholder="Postal Code" onChange={(event)=> {
                            const copyPCMerchant = {...copyMerchant}
                            copyPCMerchant.postalCode = event.target.value;
                            setCopyMerchant(copyPCMerchant);
                        }}/>
                    </div>
                    
                    <div className="EditionMerchantSecond">
                        <label>Specification :</label>
                        <select 
                        defaultValue={merchant.merchantSpecification ? merchant.merchantSpecification['@id'] : null} 
                        onChange={(event) => {
                            const copySpecificationMerchant = {...copyMerchant};
                            copySpecificationMerchant.merchantSpecification = 
                            {...copyMerchant.merchantSpecification, '@id': event.target.value};
                            setCopyMerchant(copySpecificationMerchant);
                        }}
                        >
                            {selectAllSpecification}
                        </select>

                        <br/>

                        <label>Type :</label>
                        <select 
                        defaultValue={merchant.merchantType ? merchant.merchantType['@id'] : null}
                            onChange={(event) => {
                                const copyTypeMerchant = {...copyMerchant};
                                copyTypeMerchant.merchantType = 
                                {...copyMerchant.merchantType, '@id': event.target.value};
                                setCopyMerchant(copyTypeMerchant);
                            }}>
                            {selectAllType}
                        </select>
                    </div>

                    <div className="EditionMerchantThird">
                        <span className="schedulesTitle">Schedules :</span>
                        <EditionSchedules copyMerchant={copyMerchant} setCopyMerchant={setCopyMerchant}/>
                    </div>

                    <button type="submit" className="SaveProfil">Save profil</button>     

                </form>
                
                <DeleteAccountButton user={copyMerchant}/>
                <span onClick={() => setEdited(false)} type="button" className="ProfileModifierButton bottom">Cancel</span>                     
            </div>
    );
}

EditionMerchant.propTypes =
{
    merchant: PropTypes.object,
    setEdited: PropTypes.func,
}

export default EditionMerchant;