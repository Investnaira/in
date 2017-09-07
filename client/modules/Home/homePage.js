import React, { PropTypes } from 'react';
import { Button, Jumbotron, Carousel, Row, Col, Grid, Thumbnail,
          Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { withBaseIcon } from 'react-icons-kit';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import { Link } from 'react-router';
// Import Style
// import styles from './homePage.css';
//
// // Import Actions
// import { fetchPost } from '../../PostActions';
//
// // Import Selectors
// import { getPost } from '../../PostReducer';
const IconGreen32 =
        withBaseIcon({ size: 32, style: { color: '#4caf50' } });
export function homePage(props) {

  return (
    <div>

      <Carousel style={{ height: '100%', width: '100%'}}>
      <Carousel.Item>
        <Jumbotron style={{ margin: '0px', padding: '200px', backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)', backgroundSize: 'cover'}}>

         <h1 style={{'color': '#4caf50' }}>NairaPedia</h1>
         <p style={{'color': '#fff' }}>WikiFinance (Compound-Wealth Community)</p>
         <p style={{ color: '#fff' }}><Button bsStyle="success">Visit</Button></p>
       </Jumbotron>
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron style={{ margin: '0px', padding: '200px', backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)', backgroundSize: 'cover'}}>
         <h1 style={{ color: '#4caf50' }}>NairaSense</h1>
         <p style={{'color': '#fff' }}>Investment Education</p>
         <p style={{'color': '#fff' }}><Button bsStyle="success">Learn more</Button></p>
       </Jumbotron>
      </Carousel.Item>
      <Carousel.Item>
        <Jumbotron style={{ margin: '0px', padding: '200px', backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)', backgroundSize: 'cover'}}>
         <h1 style={{'color': '#4caf50' }}>Financial Supermarket</h1>
         <p style={{'color': '#fff' }}>Multi Platform Asset Class (Bonds, Stocks, Derivatives)</p>
         <p style={{'color': '#fff' }}><Button bsStyle="success">Visit</Button></p>
       </Jumbotron>
      </Carousel.Item>
    </Carousel>
    <Jumbotron style={{ margin: '0px 0px 30px', backgroundColor: '#cccccc'
      //  backgroundImage: 'url(https://bucket.mlcdn.com/a/861/861811/images/3006e61447ac127c7ef997766b8fba37dd90f0b7.jpeg)', backgroundSize: 'cover'
     }}>
    <Row className="show-grid">
      <Col md={8} sm={6} mdPush={4}>
        <h2 style={{'color': '#4caf50' }}>Most people earn but few save smartly</h2>
        <h2 style={{'color': '#4caf50' }}>Few invest, but fewer invest wisely</h2>
        <h2 style={{'color': '#4caf50' }}>And only a minor group compound wealth.</h2>
        </Col>
    </Row>
   </Jumbotron>
   <Grid>
 <Row>
 <Col xs={6} md={4}>
   <Thumbnail src="https://images.alphacoders.com/633/633643.jpg" alt="242x200">
     <h3>Save Smartly</h3>
     <p>Become Financially Literate via Articles, Podcasts, Videos and Seminars</p>
     <p>
       <Link to={'/forum'} style={{ color: '#4caf50' }}><Button bsStyle="success" block>Visit NairaSense</Button></Link>
     </p>
   </Thumbnail>
 </Col>
 <Col xs={6} md={4}>
   <Thumbnail src="https://images.alphacoders.com/633/633643.jpg" alt="242x200">
     <h3>Invest Wisely</h3>
     <p>Get the latest information on Investments. Stocks, Bonds, Currencies, Real Estate, Cryptos...</p>
     <p>
       <a href="https://www.investnaira.com"><Button bsStyle="success" block>Visit NairaPedia</Button></a>
     </p>
   </Thumbnail>
 </Col>
 <Col xs={6} md={4}>
   <Thumbnail src="https://images.alphacoders.com/633/633643.jpg" alt="242x200">
     <h3>Compound Wealth</h3>
     <p>Join the largest Investment community as you meet experts and learn about finance and Investments</p>
     <p>
       <a href="https://www.investnaira.com"><Button bsStyle="success" block>My DashBoard</Button></a>
     </p>
   </Thumbnail>
 </Col>
 </Row>
</Grid>
    <Jumbotron style={{ margin: '0px', backgroundColor: '#cccccc'
      // backgroundImage: 'url(https://bucket.mlcdn.com/a/861/861811/images/3006e61447ac127c7ef997766b8fba37dd90f0b7.jpeg)', backgroundSize: 'cover'
    }}
      >
    <Row className="show-grid">
      <Col md={8} sm={6} mdPush={2}>
        <h2 style={{'color': '#4caf50' }}>Life is a Game of Cards</h2>
        <h3 style={{'color': '#4caf50', padding: '0px 0px 20px' }}>Everybody plays, but, there can be only one winner. And winning means having the right set of cards.</h3>
          <h2 style={{'color': '#4caf50' }}>Sign up for our weekly educational newsletter.</h2>
        <Form inline>
   <FormGroup controlId="formInlineName">
     <ControlLabel>Name</ControlLabel>
     {' '}
     <FormControl type="text" placeholder="Eze Ebube" />
   </FormGroup>
   {' '}
   <FormGroup controlId="formInlineEmail">
     <ControlLabel>Email</ControlLabel>
     {' '}
     <FormControl type="email" placeholder="eze@gmail.com" />
   </FormGroup>
   {' '}
   <Button type="submit" bsStyle="success">
     Sign Up
   </Button>
 </Form>
        </Col>
    </Row>

   </Jumbotron>



    </div>

  );
}

// Actions required to provide data for this component to render in sever side.
// PostDetailPage.need = [params => {
//   return fetchPost(params.cuid);
// }];

// Retrieve data from store as props
// function mapStateToProps(state, props) {
//   return {
//     post: getPost(state, props.params.cuid),
//   };
// }
;

export default homePage;
