import React from 'react';
import { Popover, Button } from 'antd';

const text = <span>Titulo</span>
const content = (
    <div>
        <p>O Ceará, um estado do nordeste brasileiro,
            tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. </p>
    </div>
);

function CreatePopoverRight(): JSX.Element {
    return (
        <>
            <Popover  placement="bottomRight" content={content} title={text}>
            <Button shape="round" size="large" type="primary">Right</Button>
            </Popover>
        </>
    )
}

export default CreatePopoverRight;