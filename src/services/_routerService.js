/**
 * This service serves as a router path collection
 * */

import ProfileComponent from "../routes/profile";
import DashboardComponent from "../routes/dashboard";
import TransactionPage from "../routes/TransactionsPage";
import ExperienceComponent from "../routes/experience";

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
        component: TransactionPage
    }
]