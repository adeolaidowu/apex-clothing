import React from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase';
import { connect } from 'react-redux';
import { updateCollections } from '../redux/actions/shop';
import CollectionsOverview from './CollectionsOverview';
import CollectionPage from '../pages/CollectionPage';
import WithSpinner from './WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);  

class ShopPage extends React.Component {
    state = {
      isLoading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ isLoading: false});
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromSnapshot();
    }

    render(){
    const { match } = this.props;
    const { isLoading } = this.state;
        return (
          <div className="shop-page">
            <Route
              exact
              path={`${match.path}`}
              render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
            />
            <Route
              path={`${match.path}/:collectionId`}
              render={props=> <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
            />
          </div>
        );
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(undefined, mapDispatchToProps)(ShopPage);
