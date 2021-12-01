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
import { RadarChart } from 'react-vis';
import { format } from 'd3-format';

import {getRandomBreed} from '../fetcher'
import MenuBar from '../components/MenuBar';
import { Redirect } from 'react-router';
const wideFormat = format('.1r');
const { Column, ColumnGroup } = Table;


class RandomPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          query: null,
          new_page: ''
        }   
    }
      
    componentDidMount() {
        getRandomBreed().then(res => {
            this.setState({query: res.results[0]})
            this.setState({new_page: `/breed?name=${this.state.query.name}`})
        })

    }

    render() {
        console.log(this.state.new_page)
        if (this.state.new_page != ''){
           return <Redirect to={this.state.new_page} />
        }
        else return (
            
            <div>
                <MenuBar/>
                <br></br>
                <br></br>
            </div>   

        )
    }
}


export default RandomPage

