import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../Collection-item/collection-item.component.jsx';


const Collection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
        </div>
    </div>
);

export default Collection;