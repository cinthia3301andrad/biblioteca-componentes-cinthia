import React from 'react'
import { Image } from 'antd'
import img from '../../assets/img/img.jpg'

type TCardProps = {
    name: string
}

const stylePTitle: React.CSSProperties = {
    position: 'absolute',
    color: 'white',
    height: 'auto',
    paddingTop: 140,
    paddingLeft: 20
}

const styleContainer: React.CSSProperties = {
    display: 'flex',
    height: 'auto',
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: 10
}

function Card(props: TCardProps): JSX.Element {
    return (
        <>
            <div style={styleContainer}>
                <Image src={img} alt="Gov" width="100%" height="175px" />
                <p style={stylePTitle}>{props.name}</p>
            </div>
        </>
    )
}

export default Card