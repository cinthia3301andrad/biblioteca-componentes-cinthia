import React, {useState} from 'react';
import { Modal} from 'antd';
import './modal.less';


type ModalCustomeProps = {
    title?: string;
    cancelText?: string;
    okText?: string;
    visible: boolean;
    onCancel(): void
   
} 



const ModalCustome: React.FC<ModalCustomeProps> = ( props) => {
    const [visible, setVisible] = useState(false)
    
    function onOk(): void {
    
        setVisible(true)
        
    }
   
    return (
        <Modal 
            cancelText={props.cancelText} 
            okText={props.okText}
            title={props.title}
            visible={props.visible}
            onCancel={props.onCancel}
            onOk={onOk}

        >
            {props.children}   
        </Modal>
 
    );
}
export default ModalCustome;