import React from 'react';
import { Popover, Button } from 'antd';


const content = (
    <div>
        <p>O Ceará, um estado do nordeste brasileiro,
            tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. </p>
    </div>
);

function CreatePopoverTop(): JSX.Element {
    return (
        <>
            <Popover placement="top" content={content} title="Popover Top">
            <Button shape="round" size="large" type="primary">Top</Button>
            </Popover>

        </>
    )
}

export default CreatePopoverTop;