import React from 'react';
import { Popover, Button } from 'antd';

const content = (
    <div>
        <p>O Ceará, um estado do nordeste brasileiro,
            tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. </p>
    </div>
);

function CreatePopoverLeft(): JSX.Element {
    return (
        <>
            <Popover  placement="bottomLeft" content={content} title="Popover Top">
            <Button shape="round" size="large" type="primary">Left</Button>
            </Popover>
        </>
    )
}

export default CreatePopoverLeft;