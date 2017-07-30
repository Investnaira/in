import React, { PropTypes } from 'react';
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
}

const HEADER_BAND_THEME = {
  ...BASE_THEME,
  baseFontSize: '18px',
  backgroundColor: '#71A2B6',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#71A2B6',
  objectDesign: 'square-solid'
}

const HEAVY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#29D9C2',
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
      <StrongMessageBrick
        theme={ HEADER_BAND_THEME }
        messageLevel1="A beautiful message, but not so long"
        messageLevel2="A related but not so important concept, that usually is a little bit longer than the previous"
        CTAs={ <CallToAction label="sign up" /> }
      />
      <DoubleContentBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
        <ThemePropagator>
          <h1>Our product highlight</h1>
          <p>you wont find a better product anywhere in the universe.</p>
          <CallToAction label="buy" /><CallToAction label="learn more" />
        </ThemePropagator>
        <PlaceHolder />
      </DoubleContentBrick>
      <GenericBrick
        theme={ LIGHT_BAND_THEME }
        title="Yes, we can!"
        subtitle="if you think you can do it"
        contentStyle={ {textAlign: 'center'} }>
        <PlaceHolder />
      </GenericBrick>
      <EnumerationBrick
        theme={ HEAVY_BAND_THEME }
        title="Awesome features"
        subtitle="You can add any number of them">
        <FeatureItem
          icon="rocket"
          title="Feature 1"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="Feature 2"
          description="bla bla bla bla bla"
        />
        <FeatureItem
          icon="rocket"
          title="Feature 3"
          description="bla bla bla bla bla"
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
