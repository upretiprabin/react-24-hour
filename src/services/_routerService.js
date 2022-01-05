/**
 * This service serves as a router path collection
 * */

import ProfileComponent from "../routes/profile";
import DashboardComponent from "../routes/dashboard";
import TransactionPage from "../routes/TransactionsPage";

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
        path: 'transactions',
        component: TransactionPage
    }
]