import React from 'react';
import { Form, FormInput, FormGroup, Button, Card, CardBody, CardTitle, Progress } from "shards-react";

import {
    Table,
    Pagination,
    Select,
    Row,
    Col,
    Divider,
    Slider,
    Rate 
} from 'antd'

import { format } from 'd3-format';


import {getBreedCriteria} from '../fetcher'

import MenuBar from '../components/MenuBar';

const wideFormat = format('.3r');
const { Column, ColumnGroup } = Table;



class CriteriaPage extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
          countryQuery: '', 
          groupQuery: '',
          breedResults: [],
          heightLow: 6,
          heightHigh: 32,
          weightLow: 3,
          weightHigh: 176,
          lifespanLow: 6,
          lifespanHigh: 18,
          friendlinessLow: 0,
          friendlinessHigh: 6,
          intelligenceLow:0,
          intelligenceHigh:6,
          adaptbilityLow: 0,
          adaptbilityHigh: 6,
          pageNumber: 1,
          pageSize: 10,
          pagination: null  
        }

        this.countryQueryChange = this.countryQueryChange.bind(this)
        this.groupQueryChange = this.groupQueryChange.bind(this)
        this.updateSearchResults = this.updateSearchResults.bind(this)
        this.handleHeightChange = this.handleHeightChange.bind(this)
        this.handleWeightChange = this.handleWeightChange.bind(this)
        this.handleLifespanChange = this.handleLifespanChange.bind(this)
        this.handleFriendlinessChange = this.handleFriendlinessChange.bind(this)
        this.handleIntelligenceChange = this.handleIntelligenceChange.bind(this)
        this.handleLifespanChange = this.handleLifespanChange.bind(this)
        this.handleAdptabilityChange = this.handleAdptabilityChange.bind(this)
        this.goToBreed = this.goToBreed.bind(this)
      }
    countryQueryChange(event){
          this.setState({countryQuery: event.target.value})
    }
    groupQueryChange(event){
        this.setState({groupQuery: event.target.value})
    }
    handleHeightChange(value){
        this.setState({ heightLow: value[0] })
        this.setState({ heightHigh: value[1] })
    }

    handleWeightChange(value){
        this.setState({ weightLow: value[0] })
        this.setState({ weightHigh: value[1] })
    }
    handleLifespanChange(value){
        this.setState({ lifespanLow: value[0] })
        this.setState({ lifespanHigh: value[1] })
    }
    handleFriendlinessChange(value){
        this.setState({ friendlinessLow: value[0] })
        this.setState({ friendlinessHigh: value[1] })
    }
    handleIntelligenceChange(value){
        this.setState({ intelligenceLow: value[0] })
        this.setState({ intelligenceHigh: value[1] })
    }
    handleAdptabilityChange(value) {
        this.setState({ adaptbilityLow: value[0] })
        this.setState({ adaptbilityHigh: value[1] })
    }


    updateSearchResults(){
        getBreedCriteria(this.state.countryQuery, this.state.groupQuery, this.state.heightLow, this.state.heightHigh, 
            this.state.weightLow, this.state.weightHigh, this.state.lifespanLow, this.state.lifespanHigh,
            this.state.friendlinessLow, this.state.friendlinessHigh, this.state.intelligenceLow,
            this.state.intelligenceHigh, this.state.adaptbilityLow, this.state.adaptbilityHigh, null, null).then(res => {
            this.setState({breedResults: res.results})
          })
    }


    goToBreed(breed) {
        window.location = `/breed?name=${breed}`
    }

    componentDidMount() {
        getBreedCriteria(this.state.countryQuery, this.state.groupQuery, this.state.heightLow, this.state.heightHigh, 
            this.state.weightLow, this.state.weightHigh, this.state.lifespanLow, this.state.lifespanHigh,
            this.state.friendlinessLow, this.state.friendlinessHigh, this.state.intelligenceLow,
            this.state.intelligenceHigh, this.state.adaptbilityLow, this.state.adaptbilityHigh, null, null).then(res => {
            this.setState({breedResults: res.results})
          })
    }

    render() {
        console.log(this.state.breedResults)
        console.log(getBreedCriteria(this.state.countryQuery, this.state.groupQuery, this.state.heightLow, this.state.heightHigh, 
            this.state.weightLow, this.state.weightHigh, this.state.lifespanLow, this.state.lifespanHigh,
            this.state.friendlinessLow, this.state.friendlinessHigh, this.state.intelligenceLow,
            this.state.intelligenceHigh, this.state.adaptbilityLow, this.state.adaptbilityHigh, null, null))
        return (

            <div>
                <MenuBar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="searchCenter">
                <Form style={{ width: '80vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row>
                    <Col flex={2}>
                    <FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                        <label> Country </label>
                        <FormInput placeholder="Type in Country" value={this.state.countryQuery} onChange={this.countryQueryChange} />
                    </FormGroup>
                    </Col>
                    <Col flex={2}>
                    <FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                        <label> Breed Group </label>
                        <FormInput placeholder="Type in Breed Group" value={this.state.groupQuery} onChange={this.groupQueryChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row style={{ marginTop: '5vh'}}>
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Average Height(inch)</label>
                            <Slider min={7} max={31} range defaultValue={[7, 31]} onChange={this.handleHeightChange} />
                        </FormGroup></Col>
                        {/* TASK 27: Create a column with a label and slider in a FormGroup item for filtering by Potential. See the column above for reference and use the onChange method (handlePotentialChange)  */}
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Average Weight(lb)</label>
                            <Slider min={4} max={175} range defaultValue={[4, 175]} onChange={this.handleWeightChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Average Lifespan(year)</label>
                            <Slider min={7} max={17} range defaultValue={[7, 17]} onChange={this.handleLifespanChange} />
                        </FormGroup></Col>
                    </Row>
                    <Row>
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Friendliness</label>
                            <Slider min={1} max={5} range defaultValue={[1, 5]} onChange={this.handleFriendlinessChange} />
                        </FormGroup></Col>
                        {/* TASK 27: Create a column with a label and slider in a FormGroup item for filtering by Potential. See the column above for reference and use the onChange method (handlePotentialChange)  */}
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Intelligence</label>
                            <Slider min={1} max={5} range defaultValue={[1, 5]} onChange={this.handleIntelligenceChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Adptability</label>
                            <Slider min={1} max={5} range defaultValue={[1, 5]} onChange={this.handleAdptabilityChange} />
                        </FormGroup></Col>
                    </Row>
                    <Row>
                        <Col flex={2}><FormGroup style={{ width: '20vw', marginLeft: '35vw',  marginTop: '5vh'}}>
                            <Button onClick={this.updateSearchResults}>Search</Button>
                        </FormGroup></Col>
                    </Row>
                </Form>
        </div>
        <Divider />

            <Table onRow={(record, rowIndex) => {
            return {
            onClick: event => {this.goToBreed(record.name)}, // clicking a row takes the user to a detailed view of the match in the /matches page using the MatchId parameter  
            };
            }} dataSource={this.state.breedResults} pagination={{ pageSizeOptions:[5, 10], defaultPageSize: 5, showQuickJumper:true }}>
                <Column title="Breed" dataIndex="name" key="name" sorter= {(a, b) => a.Breed.localeCompare(b.Breed)}/>
                <Column title="Country" dataIndex="country" key="country" sorter= {(a, b) => a.Country.localeCompare(b.Country)}/>
                <Column title="Group" dataIndex="group" key="group" sorter= {(a, b) => a.Country.localeCompare(b.Country)}/>
            </Table>

            </div>
        )
    }
}

export default CriteriaPage

