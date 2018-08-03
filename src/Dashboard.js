import React from 'react';
import Pet from './components/Pet';
import {fetchCat, deleteCat} from './actions/cat'
import {fetchDog, deleteDog} from './actions/dog'
import {connect} from 'react-redux'

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
            return (<div className="emptyCatList"><h1>{this.props.currentCat.message}</h1></div> )
        }
    }
    checkEmptyDogs(){
        if(this.props.currentDog && !this.props.currentDog.message){
            return (<Pet petToAdopt={this.props.currentDog} adoptPet={()=>this.delDog()}/>)
        } else if (this.props.currentDog){
            return (<div className="emptyDogList"><h1>{this.props.currentDog.message}</h1></div> )
        }
    }
    render() {
    return (
        <div className="Dashboard">
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