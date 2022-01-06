import React, {useState} from 'react';
import {Modal, ModalBody } from 'reactstrap';
import {faTimes, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ModalLayout = ({modalIcon,children}) =>{

    const[open,setOpen] = useState(false);
    return (
        <div>
            <span onClick={()=>{setOpen(true)}}>{modalIcon}</span>
            <Modal
                isOpen={open}
                className="custom-modal"
                centered={true}
                scrollable={false}
            >
                <ModalBody>
                    <span className='modal__close' onClick={()=>{setOpen(false)}}><FontAwesomeIcon icon={faTimes} title={"Close"}/></span>
                    <div>
                        {children}
                    </div>
                </ModalBody>
            </Modal>

        </div>
    );
}

export default ModalLayout;