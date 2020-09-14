import React from "react";
import { connect } from "react-redux";
import { removeCountry } from "../redux/action";
// import { Redirect } from "react-router-dom";
// import { deleteBook, editBook } from "../redux/books/action";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            population: '',
            avgIncome: '',
            country: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    


    render() {
        const { countries, removeCountry } = this.props;
        const { population, avgIncome, country } = this.state;
        return(
        <div>

            <div className='row'>
                <div class="col-4 mb-3">
                    <label htmlFor="inputGroupSelect01">Population</label>
                  <select name='population' onChange={this.handleChange} class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
                <div class="col-4 mb-3">
                    <label htmlFor="inputGroupSelect02">Average Income</label>
                  <select name='avgIncome' onChange={this.handleChange} class="custom-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
                <div class="col-4 mb-3">
                    <label htmlFor="inputGroupSelect03">Country</label>
                  <select name='country' onChange={this.handleChange} class="custom-select" id="inputGroupSelect03">
                    <option selected>Choose...</option>
                    <option value='all'>All</option>
                    {
                        countries?.map(item => (
                            <option value={item.country}>{item.country}</option>
                        ))
                    }
                  </select>
                </div>
            </div>


            <table className='table table-striped table-bordered table-hover'>
                <thead className="table-info">
                    <tr>
                        <td>#</td>
                        <td>Country</td>
                        <td>City</td>
                        <td>Population</td>
                        <td>Average Income</td>
                        <td>EDIT</td>
                        <td>DELETE</td>
                    </tr>
                </thead>
                <tbody>
                    {countries?.sort( population==='asc' ? (a,b) => a.population>b.population : (a,b) => a.population<b.population)
                        ?.sort( avgIncome==='asc' ? (a,b) => a.avgIncome>b.avgIncome : (a,b) => a.avgIncome<b.avgIncome)
                        ?.filter( country === 'all' ? item => item : item => item.country === country)
                        ?.map(item => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <div data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">{item.country}</div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">  
                                      <div class="modal-body">
                                        <p>
                                            {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td>
                                <select>
                                    {item.cities.map(elem => (
                                        <option value={elem}>{elem}</option>
                                    ))}
                                </select>
                            </td>
                            <td>{item.population}</td>
                            <td>{item.avgIncome}</td>
                            <td><button onClick={() => {}}>EDIT</button></td>
                            <td><button onClick={() => removeCountry(item.country)}>DELETE</button></td>
                        </tr>
                    )}
                </tbody> 
            </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    countries: state.countryArr
})

const mapDispatchToProps = dispatch => ({
    removeCountry: payload => dispatch(removeCountry(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Home)