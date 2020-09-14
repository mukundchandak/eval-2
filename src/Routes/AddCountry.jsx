import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCountries } from "../redux/action";

class AddBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            country: "",
            description: "",
            cities: [],
            population: "",
            avgIncome: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // const { editBook, isEdit } = this.props
        console.log(this.state)
        // console.log(isEdit)
        const { addCountries } = this.props;
        return (
            <div>
                <form>
                    <div className='form-group mt-3'>
                        <label htmlFor="country" className='col-2'>COUNTRY NAME</label>
                        <input type="text" name="country" value={this.state.country} placeholder="Country" onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description" className='col-2'>DESCRIPTION</label>
                        <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="population" className='col-2'>POPULATION</label>
                        <input type="text" name="population" value={this.state.population} placeholder="Population" onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cities" className='col-2'>City</label>
                        <input type="text" name="cities" value={this.state.cities} placeholder="City" onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="avgIncome" className='col-2'>AVERAGE INCOME</label>
                        <input type="text" name="avgIncome" value={this.state.avgIncome} placeholder="Average Income" onChange={this.handleChange}/>
                    </div>
                </form>
                    <div>
                        <button onClick={() => addCountries(this.state)}>SUBMIT</button>
                    </div>   
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // editBook: state.editBook,
    // isEdit: state.isEdit
})

const mapDispatchToProps = dispatch => ({
    addCountries: payload => dispatch( addCountries( payload ))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
