import React from 'react';
import Pet from './components/Pet';
import {fetchCat, deleteCat, resetCat} from './actions/cat'
import {fetchDog, deleteDog, resetDog} from './actions/dog'

import {connect} from 'react-redux'
import './dashboard.css'

export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCat())
        this.props.dispatch(fetchDog())
    }
    delCat(){
        this.props.dispatch(deleteCat())
    }
    delDog(){
        this.props.dispatch(deleteDog())
    }
    checkEmptyCats(){
        if(this.props.currentCat && !this.props.currentCat.message){
            return (<Pet petToAdopt={this.props.currentCat} adoptPet={()=>this.delCat()}/>)
        } else if (this.props.currentCat){
            return (<div className="emptyPetList"><h1>{this.props.currentCat.message}</h1>
            <button onClick={()=>{this.props.dispatch(resetCat())}}>Reset</button></div> )
        }
    }
    checkEmptyDogs(){
        if(this.props.currentDog && !this.props.currentDog.message){
            return (<Pet  petToAdopt={this.props.currentDog} adoptPet={()=>this.delDog()}/>)
        } else if (this.props.currentDog){
            return (<div className="emptyPetList"><h1>{this.props.currentDog.message}</h1>
            <button onClick={()=>{this.props.dispatch(resetDog())}}>Reset</button></div> )
        }
    }
    render() {
    return (
        <div className="dashboard">
            <div><h1>Welcome to the Petful web app</h1>
                <h3>To a adopt a pet just click the "Adopt" button below the picture of the pet you want. 
                    After a dog or cat is adopted another one will take its place and be available for adoption.</h3> 
                </div>
            {this.checkEmptyCats()}
            {this.checkEmptyDogs()}
        </div>
    );
}}

const mapStateToProps = state => ({
    currentCat: state.cats.currentCat,
    currentDog: state.dogs.currentDog
})

export default connect(mapStateToProps)(Dashboard)