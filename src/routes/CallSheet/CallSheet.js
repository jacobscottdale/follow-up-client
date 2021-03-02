import React, { Component } from 'react';
import NavBar from 'components/NavBar/NavBar';

export default class CallSheet extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <section className='CallSheet'>
          
        </section>
      </>
    );
  }

}
