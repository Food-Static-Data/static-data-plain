

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);



class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('LOGO1.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

// const Block = props => (
//   <Container
//     padding={['bottom', 'top']}
//     id={props.id}
//     background={props.background}>
//     <GridBlock align="left" contents={props.children} layout={props.layout} />
//   </Container>
// );



const MainPage = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
      <div className = "tableofcontents">
      <p>
      Food Tech related static data in json arrays, like recipes, ingredients, recipes, diets, allergies, etc.
      </p>
      <p>
      In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.
      </p>
      </div>
  </div>
);




const FeatureCallout = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{textAlign: 'center'}}>



      
    <h2>Table of contents</h2>
      <div className = "tableofcontents" style={{margin: '0px 150px'}}>

        <ul>
          <li>
            <a href="/static-food-data-documentation/docs/intro.html">Getting Started</a>
          </li>
          <li>
            <a href="/static-food-data-documentation/docs/chickenkyiv-project.html">ChickenKyiv</a>
          </li>
          <li>
            <a href="/static-food-data-documentation/docs/groceristar-project.html">Groceristar</a>
          </li>
          <li>
            <a href="/static-food-data-documentation/docs/mealcalendar-project.html">Meal Calendar</a>
          </li>
          <li>
            <a href="/static-food-data-documentation/docs/searchapi-project.html">Search API</a>
          </li>
          <li>
            <a href="/static-food-data-documentation/docs/searchform-project.html">Search Form</a>
          </li>
          <li><a href="/static-food-data-documentation/docs/GraphQL.html">GraphQL</a></li>
          <li><a href="/static-food-data-documentation/docs/Selector.html">Selector</a></li>
          <li>
            <a href="/static-food-data-documentation/docs/stretch-goals.html">Stretch goals</a>
          </li>
          <li>
            <a href="/static-food-data-documentation/docs/tests.html">Tests</a>
          </li>
        </ul>
      </div>

  </div>
);

const FeatureCallout2 = props => (

  <div className = "ogg" style={{textAlign: 'left'}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src="/recipe-app-react-native/img/54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png">

            </img>
          </div>
          <div className="blockContent"><h2><div><span><p>Description</p>
    </span></div></h2><div><span><p>
        Build with: Angular, Ionic Framework v.1
      <ul>
        <h3>Basic functionality:</h3>
        <li>Screen with recipes list</li>
        <li>Recipe details</li>
        <li>Basic grocery list</li>
        <li>Login screen.</li>
    </ul>
      </p>
    </span></div></div></div>
      </div>
    </div>
  </div>
);
