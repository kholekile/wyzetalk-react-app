import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArtist, getAlbums, getPopularTracks } from '../actions/artistAction';
import ArtistMediaCard from '../components/artistMediaCard';
import TrackList from '../components/trackList';
import AlbumCard from '../components/albumCard'

class Detail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      artistData : props.artistData ? props.artistData :null,
      tracksData : props.tracksData ? props.tracksData :null,
      ablumsData: props.ablumsData ? props.ablumsData :null
    }

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      artistData: nextProps.artistData ? nextProps.artistData : null,
      tracksData: nextProps.tracksData ? nextProps.tracksData : null,
      ablumsData: nextProps.ablumsData ? nextProps.ablumsData : null
    })
  }

  componentDidMount(){
    this.props.getArtist(this.props.match.params.id);
    this.props.getAlbums(this.props.match.params.id);
    this.props.getPopularTracks(this.props.match.params.id);
  }

  render() {

    return (

      <div className="container">
          <div className="detail-top-banner">
            <div>
              <ArtistMediaCard artist = {this.state.artistData}/>
            </div>
            <div>
              <TrackList tracks = {this.state.tracksData}/>
            </div>
          </div>

        {this.state.ablumsData ?
        this.state.ablumsData.map((item, index) => (
          <AlbumCard key={index} album={item}/>
        ))
        :null
        }    
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    artistData:state.artistData,
    tracksData:state.tracksData,
    ablumsData:state.ablumsData
  }
}

 const mapDispatchToProps = dispatch => bindActionCreators({
  getArtist:getArtist,
  getAlbums:getAlbums,
  getPopularTracks:getPopularTracks
 }, dispatch)

export default compose(connect(mapStateToProps,mapDispatchToProps))(Detail);