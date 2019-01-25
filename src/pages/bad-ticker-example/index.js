import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Ticker.css';

const baseUri = 'https://api.iextrading.com/1.0';
const headers = {
 'Content-Type': 'application/json',
 'Accept': 'application/json',
};

// To go on dashboard, header, marquee, etc.
class Ticker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      latestPrice: 0,
    };
  }

  fetchData = async () => {
    const { symbol } = this.props.match.params;

    const response = await fetch(`${baseUri}/stock/${symbol}/quote`, { headers });
    const quote = await response.json();

    this.setState({
      quote,
      isLoaded: true,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(props) {
    if (this.props.match.params.symbol !== props.match.params.symbol) {
      this.fetchData();
    }
  }

  render() {
    const { isLoaded, quote } = this.state;

    return isLoaded
      ? (
        <div className="ticker">
          <span className="symbol">{quote.symbol}</span>
          <span className={`price ${quote.latestPrice > quote.open ? 'green' : 'red'}`}>
            Latest Price {quote.latestPrice}
            ({(((quote.latestPrice - quote.open) / quote.latestPrice) * 100).toFixed(2)}%)
          </span>
          <span className="disclaimer">
            Data provided for free by <a href="https://iextrading.com/developer">IEX</a>.
          </span>
        </div>
      )
      : (
        <div className="ticker">
          <div className="loading-indicator">Loading...</div>
        </div>
      );
  }
}

export default withRouter(Ticker);
