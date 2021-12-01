import React from 'react';
import '../components/style.css'
// run npm install --save react-grid-gallery
import Gallery from 'react-grid-gallery';
import { Form, FormInput, FormGroup, Button, Card, CardBody, CardTitle, Progress } from "shards-react";
import {
  Table,
  Pagination,
  Select,
  Divider,
  Row,
  Col,
  AutoComplete
} from 'antd'
import {getAllImage} from '../fetcher'

import MenuBar from '../components/MenuBar';
const { Column, ColumnGroup } = Table;
const { Option } = Select;


class ImagePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedBreed: window.location.search ? window.location.search.substring(1).split('=')[1] : 'pug',
      imageResult: null
    }
    
  }
  componentDidMount() {
    getAllImage(this.state.selectedBreed).then(res => {
        this.setState({imageResult: res.results })
    })
}




  render() {
    console.log(this.state.selectedBreed)
    console.log(getAllImage(this.state.selectedBreed))
    return (
      <div>
        <MenuBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          {this.state.imageResult ? <div>
            <Gallery images={this.state.imageResult}/>
          </div>:null}
        
      </div>
    )
  }

}
export default ImagePage

