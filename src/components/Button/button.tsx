import React, {useState, Component, Props} from 'react';
import { Button} from 'antd';
import './button.less';


type ButtonCustomeProps = {
    loading?:boolean | { delay: number }
    icon?: React.ReactElement<Component>
    ghost?:boolean;
    disabled?: boolean;
    danger?:boolean;
    onClick(): void;

   
} 



const ButtonCustome: React.FC<ButtonCustomeProps> = ( props) => {

    return (
        <div className="testandoButton">
            <Button 
                type="primary"
                icon={props.icon} 
                loading={props.loading}
                ghost={props.ghost}
                disabled={props.disabled}
                onClick={props.onClick}
                danger={props.danger}
                >
            {props.children}   
            </Button>
        </div>
 
    );
}
export default ButtonCustome;