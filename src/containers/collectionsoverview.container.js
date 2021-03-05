import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from '../selectors/shop';
import WithSpinner from "../components/WithSpinner";
import CollectionsOverview from '../components/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;
