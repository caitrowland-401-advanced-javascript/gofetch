import React from 'react'

// import {capitalize} from 'lodash'

const DataList = ({ content }) => {
    return (
        <ul>
            {content.map(data => {
                return (
                    <li key={data.name}>
                        <a href={data.url}>results</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default DataList