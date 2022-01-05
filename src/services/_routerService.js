/**
 * This service serves as a router path collection
 * */

import ProfileComponent from "../routes/profile";
import DashboardComponent from "../routes/dashboard";
import TransactionsComponent from "../routes/TransactionsComponent";
import ExperienceComponent from "../routes/experience";
import EditContactComponent from "../routes/EditContactComponent";

export default [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'transactions',
        component: TransactionsComponent
    },
    {
        path: 'edit-contact/:userId',
        component: EditContactComponent
    }
]