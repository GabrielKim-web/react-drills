import React, {Component} from 'react';

class Image extends Component {
    render() {
        return(
            <div>
                <img src={this.props.src} alt="a cup of coffee" />;
            </div>
        )
    }
}

export default Image;