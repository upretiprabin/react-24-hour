/**
 * This service serves as a router path collection
 * */

import ProfileComponent from "../routes/profile";
import DashboardComponent from "../routes/dashboard";
import {CreateContact} from "../components/createContact/CreateContact";

export default [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'createContact',
        component: CreateContact
    }
]