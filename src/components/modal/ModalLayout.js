import React, {useState} from 'react';
import {Modal, ModalBody } from 'reactstrap';
import { faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ModalLayout = ({modalIcon,children}) =>{

    const[open,setOpen] = useState(false);
    return (
        <div>
            <span className={"ml-5"} onClick={()=>{setOpen(true)}}>{modalIcon}</span>
            <Modal
                isOpen={open}
                className="custom-modal"
                centered={true}
                scrollable={false}
            >
                <ModalBody>
                    <div>
                        <span onClick={()=>{setOpen(false)}}><FontAwesomeIcon icon={faWindowClose} title={"Close"}/></span>
                    </div>
                    <div>
                        {children}
                    </div>
                </ModalBody>
            </Modal>

        </div>
    );
}

export default ModalLayout;