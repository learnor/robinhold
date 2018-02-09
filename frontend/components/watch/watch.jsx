import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    console.log("state",this.state);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log("component MOUNT");
  }

  handleClick(e) {
    const { company, watch, unwatch, getCompany } = this.props;
    // e.preventDefault();
    console.log("compnay:", company);
    if (!company['watched?']){
      watch(company.id).then(() => getCompany(company.id));
    } else {
      unwatch(company.watch_id).then(() => getCompany(company.id));
    }
  }

  render() {
    const { company, watch, unwatch } = this.props;
    const text = company['watched?'] ? "Watching" : `Watch ${company.ticker}`;
    return (
      <button className="watching" onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

export default Watch;
