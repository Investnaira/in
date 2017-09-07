import React, { PropTypes } from 'react';
import { Button, Jumbotron, Carousel, Image, Glyphicon, Row, Col, Grid, Thumbnail,
          Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
export function loginPage(props) {
  return (
    <div>
      <Jumbotron>
      <Form>
<FormGroup controlId="formInlineEmail">
 <ControlLabel>Email</ControlLabel>
 {' '}
 <FormControl type="email" placeholder="eze@gmail.com" />
</FormGroup>
{' '}
<FormGroup controlId="formInlinePassword">
  <ControlLabel>Password</ControlLabel>
  {' '}
  <FormControl type="text" placeholder="******" />
</FormGroup>
{' '}
<Button type="submit" bsStyle="success">
 Log In
</Button>
</Form>
</Jumbotron>
</div>
  );
}


export default loginPage;
