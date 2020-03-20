import React from 'react'

class Results extends React.Component {
    render() {
        return (
            <ul>
                {this.props.content.map(data => {
                    return (
                        <li>
                            <a href={data.url}>{data.name}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Results