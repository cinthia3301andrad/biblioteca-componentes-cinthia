
import React from 'react';
import { Popover, Button } from 'antd';

const text = <span>Titulo</span>
const content = (
    <div>
        <p>
            O Ceará, um estado do nordeste brasileiro,
            tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas.
        </p>
    </div>
);

function CreatePopoverBottom(): JSX.Element {
    return (
        <>
            <Popover placement="bottom" content={content} title={text} >
                <Button shape="round" size="large" type="primary">Bottom</Button>
            </Popover>
        </>
    )
}

export default CreatePopoverBottom;