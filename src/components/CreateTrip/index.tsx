import React from 'react'
import { Button } from 'antd'
import { MdLocationOn, MdAdd } from 'react-icons/md'

const styleContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'solid 1px #00B894',
    borderRadius: '5px',
    padding: 10
}

const styleButton: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 15,
    margin: 10
}

function CreateTrip(): JSX.Element{
    return (
        <>
        <div style={styleContainer}>
            <div style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center'
            }}>
                <MdLocationOn size={40} style={{ color: '#00B894', marginRight: 10 }} />
                <div>
                    <span style={{ fontSize: 25 }}>Qual é o próximo destino?</span><br />
                    <span style={{ fontSize: 15 }}>Comece a planejar sua próxima viagem com uma ajudinha do Google</span>
                </div>
            </div>
            <Button style={styleButton} type="primary" icon={<MdAdd size={30} style={{ marginRight: 10 }} />}  >
                Criar uma viagem?
            </Button>
        </div>
    </>
    )
}

export default CreateTrip