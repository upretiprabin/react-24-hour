/**
 * This service serves as a router path collection
 * */

import ProfileComponent from "../routes/profile";
import {CreateContact} from "../components/createContact/CreateContact";

export default [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'createContact',
        component: CreateContact
    }
]