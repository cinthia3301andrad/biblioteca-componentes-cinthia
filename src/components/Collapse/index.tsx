import React from 'react';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
O Ceará, um estado do nordeste brasileiro,
tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas.
`;

function CreateCollapse(): JSX.Element {
    return (
        <>
            <Collapse defaultActiveKey={['1']}>
                <Panel showArrow={false} header="O ceará" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel showArrow={false} header="O Ceará" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel showArrow={false} header="O Ceará" key="3" >
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </>
    )
}

export default CreateCollapse;


