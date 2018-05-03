import React from 'react';
import { Link } from 'react-router-dom';

class SupplierCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      likes: 0
    }
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    const {supplier} = this.props;

    return (
      <div key={supplier.id} id="supplier-card">
        <Link to={`/suppliers/${supplier.id}/produce`} key={supplier.id}>{supplier.name}</Link>
        <p><strong>Location:</strong> {supplier.location}</p>
        <button onClick={this.addLike}>Like this</button> {this.state.likes}
      </div>
    )
  }
}
export default SupplierCard;
