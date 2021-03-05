import React from 'react'
import { Link } from 'react-router-dom';
import CollectionItem from './CollectionItem'

function CollectionPreview({title, items, routeName}) {
    return (
      <div className="collection-preview">
        <h1 className="title">
          <Link to={`/shop/${routeName.toLowerCase()}`}>{title.toUpperCase()}</Link>
        </h1>
        <div className="preview">
          {items  
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
}

export default CollectionPreview
