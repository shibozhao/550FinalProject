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

import {getAllInfo} from '../fetcher'
import MenuBar from '../components/MenuBar';
const wideFormat = format('.1r');
const { Column, ColumnGroup } = Table;


class BreedPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          selectedBreed: window.location.search ? window.location.search.substring(1).split('=')[1] : 'pug',
          detail: null,
        }

        this.showMoreImage = this.showMoreImage.bind(this)
        
    }

    showMoreImage(){
        window.location = `/image?name=${this.state.selectedBreed}`
    }
      
    componentDidMount() {
        getAllInfo(this.state.selectedBreed).then(res => {
            this.setState({detail: res.results[0] })
        })
    }

    render() {
        
        return (
            
            <div>
                <MenuBar/>
                <br></br>
                <br></br>
                {this.state.detail ? <div>
                <img src={this.state.detail.imageUrl} alt= 'dogicon' className="center" height ='300' weight='300'/>
                <div className='buttonSection'>
                <h2>{this.state.detail.name}</h2>
                </div>
                <div className='buttonSection'>
                <Button onClick={this.showMoreImage}>show more images</Button>
                </div>
                <div style={{ width: '50vw', margin: '0 auto', marginTop: '2vh' }}>
                <Card>
                        <CardBody>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Country</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                    {this.state.detail.country}
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Subgroup</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                    {this.state.detail.subgroup}
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Average Height</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                    {this.state.detail.aveHeight} inch
                                </Col>
                                
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Average Weight</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                    {this.state.detail.aveWeight} lb
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Average Lifespan</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                    {this.state.detail.aveLifespan}  year
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Friendliness</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                <Rate disabled defaultValue={this.state.detail.friendliness} />
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Intelligence</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                <Rate disabled defaultValue={this.state.detail.intelligence} />
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Easy to Train</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                <Rate disabled defaultValue={this.state.detail.easyToTrain} />
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Energy</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                <Rate disabled defaultValue={this.state.detail.energy} />
                                </Col>
                            </Row>
                            <Row gutter='30' align='middle' justify='center'>
                                <Col flex={2} style={{ textAlign: 'left' }}>
                                    <h6>Adaptability</h6>
                                </Col>
                                <Col flex={2} style={{ textAlign: 'right' }}>
                                <Rate disabled defaultValue={this.state.detail.adaptbility} />
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
              
                </div>
               
                <br></br>
                <br></br>
                <div className="highlightCenter" >
                    {this.state.detail.hightlight}
                </div>  
                <br></br>
                <br></br>
                <br></br>
                <div className='radarSection'>

                </div> 
                <div className='radarSection'>




                </div> 
                
                </div> : null}

           </div>
        )
    }
}

export default BreedPage

