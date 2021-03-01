import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from './CollectionsOverview';
import CollectionPage from '../pages/CollectionPage';

const ShopPage = ({match}) => (
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionsOverview} />
       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage;
