import React from 'react';
import { Form, Field } from 'react-final-form'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faCaretDown, faCaretRight} from "@fortawesome/free-solid-svg-icons";

const EditContact = ({onSubmit, contactDetail}) => {
    return(
        <>
            <div className='page-title'>
                <h3>Edit Contact</h3>
            </div>
            <div className='edit-form'>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="fullName">Full Name</label>
                                <Field name="fullName" component="input" placeholder="" defaultValue={contactDetail.fullName || null} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <Field name="email" component="input" placeholder="" defaultValue={contactDetail.email || null} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="phone">Phone (optional)</label>
                                <Field name="phone" component="input" placeholder="" defaultValue={contactDetail.phone || null} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="nearAccountID">Neaar Account ID (optional)</label>
                                <Field name="nearAccountID" component="input" placeholder="" defaultValue={contactDetail.nearAccountId || null} />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary' type="submit">
                                    Save
                                    <FontAwesomeIcon className='icon ml-3' icon={faAngleRight} />
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </>
    );
};

export default EditContact;
