import React from 'react';

class SourceImg extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.src.map((src) => <HeaderImg src={src} />)
                }
            </div>
        )
    }
}

export default SourceImg;