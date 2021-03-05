import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectIsCollectionsLoaded } from '../selectors/shop';
import WithSpinner from '../components/WithSpinner';
import CollectionsPage from '../pages/CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer = connect(mapStateToProps)(WithSpinner(CollectionsPage));

export default CollectionsPageContainer;

