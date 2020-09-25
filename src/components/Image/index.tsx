import React from 'react';
import { Image } from 'antd';


const Styles :  React.CSSProperties = {
    paddingBottom: '10px',
    
}
const StylesImage: React.CSSProperties = {
    borderRadius: '50'
}

function CreateImage(): JSX.Element {
    return (
        <>
            <div style={Styles}>
                <Image
                    width={300}
                    src="https://cdn.acritica.net/img/pc/450/300/dn_noticia/2020/04/1585853437.jpg?a=CC"
                />
            </div>
            <div>
                <Image
                    width={300}
                    src="https://cdn.acritica.net/img/pc/450/300/dn_noticia/2020/04/1585853437.jpg?a=CC"
                    style= {StylesImage}
                />
            </div>


        </>

    )
}

export default CreateImage;