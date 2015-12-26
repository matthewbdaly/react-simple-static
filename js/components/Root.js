import React from 'react';

export default React.createClass({
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <h1>Test</h1>
        </body>
      </html>
    )
  }
});
