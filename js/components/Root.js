import React from 'react';

export default React.createClass({
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          {this.props.children}
        </body>
        <script language="javascript" type="text/javascript" src="/js/bundle.js" />
      </html>
    )
  }
});
