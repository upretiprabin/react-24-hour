/**
 * This service serves as a router path collection
 * */

import FirstPage from "../routes/first-page";
import {CreateContact} from "../components/createContact/CreateContact";

export default [
    {
        path: 'first-page',
        component: FirstPage
    },
    {
        path: 'createContact',
        component: CreateContact
    }
]