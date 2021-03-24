import React from "react"
import PropTypes from "prop-types"

class Spotify extends React.Component {
  constructor(props) {
    super(props)
    // FIXME: Set to empty strings once API is finished
    this.state = {
      ArtistName: "Kate Simko",
      SongName: "XX Intro - Original Mix",
      SongURL: "https://open.spotify.com/track/6PBjqYBDA09CG7WJm4sXKF?si=zF-hCvV5RlKf8HIaZyudiA",
    }

    this.fetchUpdate = this.fetchUpdate.bind(this)
  }

  componentDidMount() {
      this.fetchUpdate()
      // Every 1.5 min, fetch api call to check for new song
      this.interval = setInterval(() => {
        this.fetchUpdate()
      }, 90000);
  }

  fetchUpdate() {
    // TODO: Create GO REST API with endpoint
    const { url } = this.props;
    fetch(url, { credentials: "include" })
      .then(response => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then(data => {
        this.setState({
          ArtistName: data.artist_name,
          SongName: data.song_name,
          SongURL: data.song_url,
        })
      })
      .catch(error => console.log(error))
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { ArtistName, SongName, SongURL } = this.state

    return (
      <div className="spotify_status">
        <div>
          Listening to {" "}
          <a target="_blank" rel="noreferrer" href={SongURL}>
            {SongName}
          </a>
           {" "} by {ArtistName}
        </div>
      </div>
    )
  }
}

Spotify.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Spotify;
