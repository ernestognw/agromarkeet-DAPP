import React, { Component } from "react";
import "./webApp.css";

import Sidebar from "../components/sidebar";
import ContentLayout from "../components/content-layout";
import Header from "../components/header";
import AppLayout from "../components/app-layout";
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import ContentRouter from './content-router';
import { withRouter } from 'react-router'
import { agroMarkeet } from '../../agroMarkeet';
import web3 from '../../web3';

class App extends Component {
  state = {
    isBidStarted: false,
    isBidFinished: false,
    batchesPlaced: {
      name: '',
      kg: '',
      price: '',
      finalOwner: '',
    },
    account: '',
  }

  async componentDidMount() {
    const isBidStarted = await agroMarkeet.methods.isBidStarted().call();
    const isBidFinished = await agroMarkeet.methods.isBidFinished().call();
    const account = await web3.eth.getAccounts();
    const name = await agroMarkeet.methods.batches(account[0]).call().name;
    const kg = await agroMarkeet.methods.batches(account[0]).call().kg;
    const price = await agroMarkeet.methods.batches(account[0]).call().price;
    const finalOwner = await agroMarkeet.methods.batches(account[0]).call().finalOwner;
    console.log(isBidStarted)
    console.log(account)
    this.setState({
      isBidStarted: isBidStarted,
      isBidFinished: isBidFinished,
      batchesPlaced: {
        name: name,
        kg: kg,
        price: price,
        finalOwner: finalOwner,
      },
      account: account[0],
    })
  }

  handleStartBid = async (event) => {
    await agroMarkeet.methods.startBid().send({
      from: this.state.account
    })
    let bidResult = await agroMarkeet.methods.isBidStarted().call();
    console.log(bidResult);
    this.setState({
      isBidStarted: bidResult,
    })
  }

  handleFinishBid = async (event) => {
    console.log('performing well')
    await agroMarkeet.methods.finishBid().send({
      from: this.state.account
    })
    let bidResult = await agroMarkeet.methods.isBidFinished().call();
    this.setState({
      isBidFinished: bidResult,
    })
  }

  handlePlaceBatch = async (event) => {
    await agroMarkeet.methods.placeBatch().send(this.state.batchesPlaced, this.state.batchesPlaced, {
      from: this.state.account
    })
    this.setState({
      batchesPlaced: this.state.batchesPlaced.push([this.state.kg, this.state.name]),
    })
  }

  handleInputChange = event => {
    if (event.target.id === 'kg'){
      this.setState({
        batchesPlaced: {
          kg: event.target.value,
        }
      })
    } else if (event.target.id === 'name'){
      this.setState({
        batchesPlaced: {
          name: event.target.value,
        }
      })
    }
  }

  render() {
    return(
      <AppLayout>
        <Sidebar
          title="Contabilidad Electrónica"
          notifHandler={this.notifHandler}
        />
        <ContentLayout>
          <Header signOut={this.signOut} showNotif={this.state.showNotif} notifHandler={this.notifHandler} />
          <ContentRouter 
            isBidStarted={this.state.isBidStarted}
            isBidFinished={this.state.isBidFinished}
            kg={this.state.batchesPlaced.kg}
            name={this.state.batchesPlaced.name}
            batchesPlaced={this.state.batchesPlaced}
            handleStartBid={this.handleStartBid}
            handleFinishBid={this.handleFinishBid}
            handleInputChange={this.handleInputChange}
            handlePlaceBatch={this.handlePlaceBatch}
          />
        </ContentLayout>
      </AppLayout>
    )
  } 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// function mapStateToProps(state, props) {
//   return {
//     ...state.auth
//   };
// }

export default withRouter(connect(null, mapDispatchToProps)(App));
