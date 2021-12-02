import React from 'react';
import '../components/style.css'
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
import {getBreedSearch, getRandomBreed} from '../fetcher'


import MenuBar from '../components/MenuBar';
const { Column, ColumnGroup } = Table;
const { Option } = Select;


class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      breedQuery: '', 
      breedResults: [],
      pageNumber: 1,
      pageSize: 10,
      pagination: null ,
      randomQuery: null
    }
    this.queryChange = this.queryChange.bind(this)
    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.breedOnChange = this.breedOnChange.bind(this)
    this.feelingDoggy = this.feelingDoggy.bind(this)
    this.goToBreed = this.goToBreed.bind(this)


  }
  
  queryChange(event) {
    
    this.setState({ breedQuery: event.target.value })
  }



  updateSearchResults(){
    if (this.state.breedQuery != ''){
      window.location = `/home?name=${this.state.breedQuery}`
    }
  }

  breedOnChange(value){
    window.location = `/breed?name=${value}`
  }

  feelingDoggy(){
    window.location = `/random`
  }

  goToBreed(breed) {
    window.location = `/breed?name=${breed}`
  }





  render() {

    return (
      <div>
        <MenuBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <img src='./dog.png' alt= 'dogicon' className="center" height ='250' weight='250'/>
        <br></br>
        <br></br>
        <div className="center">
        <Form className="searchCenter">
            <Row>
              <Col flex={2}>
                <FormGroup style={{ width: '30vw', marginLeft: '8vw'}}>
                <FormInput placeholder="Type in Breed Name"  onChange={this.queryChange} 
                onKeyPress={event => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  this.updateSearchResults()
                }}}
               />
                </FormGroup>
              </Col>
              <Col flex={2}>
                <FormGroup style={{ width: '10vw', marginLeft: '2vw'}}>
                <Button onClick={this.updateSearchResults}>Search</Button>
                </FormGroup>
              </Col>
            </Row>
        </Form>
        </div>
        <div className='buttonSection'>
              <Select defaultValue="Select a Dog Breed" style={{ width: 180, marginRight: '5vw'}} onChange={this.breedOnChange}>
              <Option value="AFFENPINSCHER">AFFENPINSCHER</Option>
              <Option value="AFGHAN HOUND">AFGHAN HOUND</Option>
              <Option value="AKITA">AKITA</Option>
              <Option value="ALASKAN MALAMUTE">ALASKAN MALAMUTE</Option>
              <Option value="AMERICAN FOXHOUND">AMERICAN FOXHOUND</Option>
              <Option value="AMERICAN STAFFORDSHIRE TERRIER">AMERICAN STAFFORDSHIRE TERRIER</Option>
              <Option value="AMERICAN WATER SPANIEL">AMERICAN WATER SPANIEL</Option>
              <Option value="AUSTRALIAN CATTLE DOG">AUSTRALIAN CATTLE DOG</Option>
              <Option value="AUSTRALIAN KELPIE">AUSTRALIAN KELPIE</Option>
              <Option value="AUSTRALIAN SILKY TERRIER">AUSTRALIAN SILKY TERRIER</Option>
              <Option value="AUSTRALIAN TERRIER">AUSTRALIAN TERRIER</Option>
              <Option value="BASENJI">BASENJI</Option>
              <Option value="BEAGLE">BEAGLE</Option>
              <Option value="BEARDED COLLIE">BEARDED COLLIE</Option>
              <Option value="BEDLINGTON TERRIER">BEDLINGTON TERRIER</Option>
              <Option value="BERNESE MOUNTAIN DOG">BERNESE MOUNTAIN DOG</Option>
              <Option value="BICHON FRISE">BICHON FRISE</Option>
              <Option value="BLACK AND TAN COONHOUND">BLACK AND TAN COONHOUND</Option>
              <Option value="BLOODHOUND">BLOODHOUND</Option>
              <Option value="BORDER COLLIE">BORDER COLLIE</Option>
              <Option value="BORZOI - RUSSIAN HUNTING SIGHTHOUND">BORZOI - RUSSIAN HUNTING SIGHTHOUND</Option>
              <Option value="BOUVIER DES FLANDRES">BOUVIER DES FLANDRES</Option>
              <Option value="BOXER">BOXER</Option>
              <Option value="BRIARD">BRIARD</Option>
              <Option value="BRITTANY SPANIEL">BRITTANY SPANIEL</Option>
              <Option value="BULL TERRIER">BULL TERRIER</Option>
              <Option value="BULLDOG">BULLDOG</Option>
              <Option value="BULLMASTIFF">BULLMASTIFF</Option>
              <Option value="CAIRN TERRIER">CAIRN TERRIER</Option>
              <Option value="CAVALIER KING CHARLES SPANIEL">CAVALIER KING CHARLES SPANIEL</Option>
              <Option value="CHESAPEAKE BAY RETRIEVER">CHESAPEAKE BAY RETRIEVER</Option>
              <Option value="CHIHUAHUA">CHIHUAHUA</Option>
              <Option value="CHOW CHOW">CHOW CHOW</Option>
              <Option value="COTON DE TULEAR">COTON DE TULEAR</Option>
              <Option value="DALMATIAN">DALMATIAN</Option>
              <Option value="DANDIE DINMONT TERRIER">DANDIE DINMONT TERRIER</Option>
              <Option value="DOBERMANN">DOBERMANN</Option>
              <Option value="DOGO ARGENTINO">DOGO ARGENTINO</Option>
              <Option value="DUTCH SHEPHERD DOG">DUTCH SHEPHERD DOG</Option>
              <Option value="ENGLISH COCKER SPANIEL">ENGLISH COCKER SPANIEL</Option>
              <Option value="ENGLISH SETTER">ENGLISH SETTER</Option>
              <Option value="ENGLISH SPRINGER SPANIEL">ENGLISH SPRINGER SPANIEL</Option>
              <Option value="FIELD SPANIEL">FIELD SPANIEL</Option>
              <Option value="FINNISH SPITZ">FINNISH SPITZ</Option>
              <Option value="FOX TERRIER (SMOOTH)">FOX TERRIER (SMOOTH)</Option>
              <Option value="FRENCH BULLDOG">FRENCH BULLDOG</Option>
              <Option value="GERMAN PINSCHER">GERMAN PINSCHER</Option>
              <Option value="GERMAN SHEPHERD DOG">GERMAN SHEPHERD DOG</Option>
              <Option value="GIANT SCHNAUZER">GIANT SCHNAUZER</Option>
              <Option value="GOLDEN RETRIEVER">GOLDEN RETRIEVER</Option>
              <Option value="GREAT DANE">GREAT DANE</Option>
              <Option value="GREAT SWISS MOUNTAIN DOG">GREAT SWISS MOUNTAIN DOG</Option>
              <Option value="HARRIER">HARRIER</Option>
              <Option value="HAVANESE">HAVANESE</Option>
              <Option value="HUNGARIAN SHORT-HAIRED POINTER (VIZSLA)">HUNGARIAN SHORT-HAIRED POINTER (VIZSLA)</Option>
              <Option value="IRISH GLEN OF IMAAL TERRIER">IRISH GLEN OF IMAAL TERRIER</Option>
              <Option value="IRISH TERRIER">IRISH TERRIER</Option>
              <Option value="IRISH WATER SPANIEL">IRISH WATER SPANIEL</Option>
              <Option value="IRISH WOLFHOUND">IRISH WOLFHOUND</Option>
              <Option value="JACK RUSSELL TERRIER">JACK RUSSELL TERRIER</Option>
              <Option value="JAPANESE CHIN">JAPANESE CHIN</Option>
              <Option value="KERRY BLUE TERRIER">KERRY BLUE TERRIER</Option>
              <Option value="KOMONDOR">KOMONDOR</Option>
              <Option value="KUVASZ">KUVASZ</Option>
              <Option value="LABRADOR RETRIEVER">LABRADOR RETRIEVER</Option>
              <Option value="LAKELAND TERRIER">LAKELAND TERRIER</Option>
              <Option value="LHASA APSO">LHASA APSO</Option>
              <Option value="MALTESE">MALTESE</Option>
              <Option value="NEDERLANDSE KOOIKERHONDJE">NEDERLANDSE KOOIKERHONDJE</Option>
              <Option value="NEWFOUNDLAND">NEWFOUNDLAND</Option>
              <Option value="NORFOLK TERRIER">NORFOLK TERRIER</Option>
              <Option value="NOVA SCOTIA DUCK TOLLING RETRIEVER">NOVA SCOTIA DUCK TOLLING RETRIEVER</Option>
              <Option value="OLD ENGLISH SHEEPDOG">OLD ENGLISH SHEEPDOG</Option>
              <Option value="OTTERHOUND">OTTERHOUND</Option>
              <Option value="PAPILLON">PAPILLON</Option>
              <Option value="PEKINGESE">PEKINGESE</Option>
              <Option value="PETIT BASSET GRIFFON VENDEEN">PETIT BASSET GRIFFON VENDEEN</Option>
              <Option value="POLISH LOWLAND SHEEPDOG">POLISH LOWLAND SHEEPDOG</Option>
              <Option value="POMERANIAN">POMERANIAN</Option>
              <Option value="PORTUGUESE WATER DOG">PORTUGUESE WATER DOG</Option>
              <Option value="PUG">PUG</Option>
              <Option value="PULI">PULI</Option>
              <Option value="RHODESIAN RIDGEBACK">RHODESIAN RIDGEBACK</Option>
              <Option value="RUSSIAN BLACK TERRIER">RUSSIAN BLACK TERRIER</Option>
              <Option value="SALUKI">SALUKI</Option>
              <Option value="SAMOYED">SAMOYED</Option>
              <Option value="SCHIPPERKE">SCHIPPERKE</Option>
              <Option value="SCOTTISH TERRIER">SCOTTISH TERRIER</Option>
              <Option value="SEALYHAM TERRIER">SEALYHAM TERRIER</Option>
              <Option value="SHAR PEI">SHAR PEI</Option>
              <Option value="SHETLAND SHEEPDOG">SHETLAND SHEEPDOG</Option>
              <Option value="SHIBA">SHIBA</Option>
              <Option value="SHIH TZU">SHIH TZU</Option>
              <Option value="SKYE TERRIER">SKYE TERRIER</Option>
              <Option value="ST. BERNARD">ST. BERNARD</Option>
              <Option value="SUSSEX SPANIEL">SUSSEX SPANIEL</Option>
              <Option value="TIBETAN SPANIEL">TIBETAN SPANIEL</Option>
              <Option value="TIBETAN TERRIER">TIBETAN TERRIER</Option>
              <Option value="WELSH CORGI (CARDIGAN)">WELSH CORGI (CARDIGAN)</Option>
              <Option value="WELSH SPRINGER SPANIEL">WELSH SPRINGER SPANIEL</Option>
              <Option value="WELSH TERRIER">WELSH TERRIER</Option>
              <Option value="YORKSHIRE TERRIER">YORKSHIRE TERRIER</Option>
              </Select>
              <Button theme='light' onClick={this.feelingDoggy}>I'm Feeling Doggy</Button>
        </div>
      </div>
    )
  }

}
export default HomePage

