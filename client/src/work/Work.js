import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardArticleContainer from '../components/CardArticleContainer';
import {loadArtCards, loadArticle} from "./actions"

class Work extends Component {

  /*componentWillMount() {
    debugger;
    const { handle } = this.props.match.params
    this.props.onLoadArtCards();
  }*/

  componentDidMount () {
    const id = this.props.match.params.id;
    if (id) {
      this.props.onLoadArticle(id);
    } else {
      this.props.onLoadArtCards();
    }
  }
	
  render() {
    let workData = this.props.work;
    let content;
    if (workData.artCards.length > 0) {
      content = <CardArticleContainer data ={workData.artCards}></CardArticleContainer>;
    } else {
      content = <div dangerouslySetInnerHTML={{__html: workData.content}} className="about"/>;
    }
    return (
      <div className="greyBackground">
        <div className="container">
          <div className="page-content-title">{workData.title} </div>
          {content}
        </div>
      </div>
    );
  }
}

const mapToStateProps = state => {
  return {
    work: state.workState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadArtCards: () => {
      dispatch(loadArtCards())
    },
    onLoadArticle: (id) => {
      dispatch(loadArticle(id))
    }
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(Work);