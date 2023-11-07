import { Route } from '@angular/router';

export const GadgetStoreRoutes: Route[] = [
    {
        path:"*", redirectTo: "home", pathMatch:"full"
    },
    {
        path: " ", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "/home", redirectTo: "home", pathMatch: "full"
    }
];
