import React from 'react'

import './Hello.less'

const Hello = React.createClass({
    render: function() {
        return (
            <div className="HelloWorld">Hello LAL {this.props.who}</div>
        )
    }
})

export default Hello
