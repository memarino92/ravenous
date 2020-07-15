import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    renderBusinessList() {
        if (this.props.businesses) {
            return this.props.businesses.map(
                business => {
                    return <Business business={business} key={business.id} />
                }
            )
        }

    }
    
    render() {
        return (
            <div className="BusinessList">
                {this.renderBusinessList()}
            </div>
        );
    }
};

export default BusinessList;