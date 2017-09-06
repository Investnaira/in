import React, { PropTypes } from 'react';
import { Button, Jumbotron, Carousel, Image, Glyphicon, Row, Col, Grid, Thumbnail,
          Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
export function signupPage(props) {
  return (
    <div>
      <Form>
        <FormGroup controlId="formInlineUsername">
         <ControlLabel>Username</ControlLabel>
         {' '}
         <FormControl type="email" placeholder="ezeebube5" />
        </FormGroup>
        {' '}<FormGroup controlId="formInlineEmail">
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
 Sign Up
</Button>
</Form>
</div>
  );
}

export default signupPage;
