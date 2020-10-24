import React, {useState, useEffect} from 'react';
import CollectionPreview from './CollectionPreview';
import SHOPDATA from '../data/shopdata';

function ShopPage() {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
       setCollections(SHOPDATA)
    }, [])                      

    //console.log(collections);
    return (
        <div className="shop-page">
           {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
           ))}
        </div>
    )
}

export default ShopPage
