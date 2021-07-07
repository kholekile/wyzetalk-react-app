import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInitailData } from '../actions/artistAction';
import ArtistCard from '../components/artistCard'

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      artistsData:props.artistsData ? props.artistsData :null,
    }

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      artistsData: nextProps.artistsData ? nextProps.artistsData : null
    })
  }

  componentDidMount(){
    this.props.getInitailData()
  }

  render() {

    return (
      <div className="container">
        {this.state.artistsData ?
        this.state.artistsData.map((item, index) => (
          <ArtistCard key={index} artist={item}/>
        ))
        :null
        }
    </div>
    );
  }
}

 const mapStateToProps = (state) => {
  return {
    artistsData:state.artistsData
  }
}

 const mapDispatchToProps = dispatch => bindActionCreators({
  getInitailData:getInitailData
 }, dispatch)

 export default compose(connect(mapStateToProps,mapDispatchToProps))(Home);

