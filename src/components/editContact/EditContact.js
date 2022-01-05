import React from 'react';
import { Form, Field } from 'react-final-form'

const EditContact = ({onSubmit, contactDetail}) => {
    return(
        <>
            <div>
                <h3>Edit Contact</h3>
            </div>
            <div>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="fullName">Full Name</label>
                                <Field name="fullName" component="input" placeholder="" defaultValue={contactDetail.fullName || null} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field name="email" component="input" placeholder="" defaultValue={contactDetail.email || null} />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone (optional)</label>
                                <Field name="phone" component="input" placeholder="" defaultValue={contactDetail.phone || null} />
                            </div>
                            <div>
                                <label htmlFor="nearAccountID">Neaar Account ID (optional)</label>
                                <Field name="nearAccountID" component="input" placeholder="" defaultValue={contactDetail.nearAccountId || null} />
                            </div>
                            <button type="submit">Save</button>
                        </form>
                    )}
                />
            </div>
        </>
    );
};

export default EditContact;
