import React from 'react';
import {connect} from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

const ShopPage = ({collections})  => (
  <div>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
