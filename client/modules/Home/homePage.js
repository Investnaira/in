import React, { PropTypes } from 'react';
import { Button, ButtonToolbar, Jumbotron } from 'react-bootstrap';
import {
  LandingCanvas,
  ThemePropagator,
  GenericBrick,
  DoubleContentBrick,
  StrongMessageBrick,
  EnumerationBrick,
  EmailSqueezeBrick,
  FooterBrick,
  CallToAction,
  FeatureItem,
  PlaceHolder
} from 'landricks-components';

// Import Style
// import styles from '../../components/PostListItem/PostListItem.css';
//
// // Import Actions
// import { fetchPost } from '../../PostActions';
//
// // Import Selectors
// import { getPost } from '../../PostReducer';
const BASE_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '18px'
};

const HEADER_BAND_THEME = {
  ...BASE_THEME,
  baseFontSize: '18px',
  backgroundColor: '#4CAF50',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#71A2B6',
  objectDesign: 'square-solid'
};

const HEAVY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#4caf50',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#000000',
  secondaryColor: '#C99DA3',
  objectDesign: 'square-outline'
};

const LIGHT_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#FAFAFA',
  textColor: '#888888',
  primaryColor: '#996888',
  secondaryColor: '#C99DA3'
};

export function homePage(props) {
  return (
    <LandingCanvas>
      <Jumbotron>
   <h1>Hello, world!</h1>
   <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
   <p><Button bsStyle="primary">Learn more</Button></p>
 </Jumbotron>
      <ButtonToolbar>
   {/* Standard button */}
        <Button bsSize="large">Default</Button>
      </ButtonToolbar>
      <StrongMessageBrick
        theme={ HEADER_BAND_THEME }
        messageLevel1="WELCOME TO INVESTNAIRA"
        messageLevel2="SAVE SMARTLY, INVEST WISELY, COMPOUND WEALTH"
        CTAs={ <CallToAction label="sign up" /> }
      />
      <DoubleContentBrick theme={HEAVY_BAND_THEME} hasHeader>
        <ThemePropagator>
          <h1>Africa's Largest Investing Portal</h1>
          <p>you wont find a better product anywhere in the universe.</p>
          {/* <CallToAction label="buy" /> */}
          <CallToAction label="learn more" />
        </ThemePropagator>
        <PlaceHolder />
      </DoubleContentBrick>
      <GenericBrick
        theme={ LIGHT_BAND_THEME }
        title="InvestNaira provides a platform to :"
        subtitle="Save Smartly (Education)  "
        subtitle="Invest Wisely (Investments)"
        subtitle="Compound Wealth (Community)"
        contentStyle={ {textAlign: 'center'} }>
        <PlaceHolder />
      </GenericBrick>
      <EnumerationBrick
        theme={HEAVY_BAND_THEME}
        title="Awesome features"
      //  subtitle="You can add any number of them"
      >
        <FeatureItem
          icon="rocket"
          title="Save Smartly"
          description="Become Financially Literate via Articles, Podcasts, Videos and Seminars"
        />
        <FeatureItem
          icon="rocket"
          title="Invest Wisely"
          description="Get the latest information on Investments. Stocks, Bonds, Currencies, Real Estate, Cryptos..."
        />
        <FeatureItem
          icon="rocket"
          title="Compound Wealth"
          description="

Join the largest Investment community as you meet experts and learn about finance and Investments"
        />
      </EnumerationBrick>
      <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
        <PlaceHolder useLoremIpsum={ true } />
        <PlaceHolder label="image placeholder" />
      </DoubleContentBrick>
      <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
        <PlaceHolder label="image placeholder" />
        <PlaceHolder useLoremIpsum={ true } />
      </DoubleContentBrick>
      <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
        <PlaceHolder useLoremIpsum={ true } />
        <PlaceHolder label="image placeholder" />
      </DoubleContentBrick>
      <EmailSqueezeBrick
        title="Join our Newsletter"
        subtitle="To get updates about what we want you to know about"
        theme={ HEAVY_BAND_THEME }
        buttonLabel="Join"
        placeholder="Enter your email"
      />

     </LandingCanvas>

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
