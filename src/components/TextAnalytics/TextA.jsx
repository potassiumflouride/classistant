import React from "react";
import firebase from "firebase";
import { LessonList, ItemGrid } from "components";
import { Grid } from "material-ui";

import _ from 'lodash';

class TextA extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listOfLessons: [],
      first: null
    }
    this.myFunction5 = this.myFunction5.bind(this);
  }

  componentDidMount() {
    // Final_YouTubeUI_DataRetrieving
        let app = firebase.database().ref('Final_YouTubeUI_DataRetrieving');
        app.on('value', snapshot => {
          this.getLessonData(snapshot.val());
        });
    }

  getLessonData(values){
    let messagesVal = values;   // this is an Object
    let lessons = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      //stores array of Objects into lessons state
      this.setState({
        listOfLessons: lessons,
        first: lessons[0].key
      }, this.myFunction5);
  }

  myFunction5 = () => {

  }

  render(){
    // alert(this.state.first);
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
          <div style={{marginTop: '10px'}}>
          <LessonList db={firebase} listOfLessons={this.state.listOfLessons} first={this.state.first} />
          </div>
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default TextA;
