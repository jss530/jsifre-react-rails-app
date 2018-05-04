import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SuppliersShow.css';
import ProduceCard from '../components/ProduceCard';
import { getProduce } from '../actions/suppliers';

class SuppliersShow extends Component {

  componentDidMount() {

    this.props.getProduce(this.props.match.params.supplierId)
  }

  render() {
    const { match, produces } = this.props;
    return(
      <div className="show-supplier">
          <div className="hero-image">
            <div className="hero-text">
              <h1>Produce List</h1>
            </div>
          </div>
            <div className="produce-section">
              <h3 className="produce-intro">Here's what's available:</h3>
              {this.props.produces.map(produce => <ProduceCard key={produce.id} produce={produce} />)}
            </div>
            <div className="show-produce" id="show-produce">
              {this.props.children}
            </div>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return ({
    produces: state.produces
  })
}

export default connect(mapStateToProps, { getProduce })(SuppliersShow);
