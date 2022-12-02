import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "home",
        loadChildren: () => import("@application-a/home").then(m => m.HomeModule),
    },
    {
        path: "auth",
        loadChildren: () => import("@application-a/profile").then(m => m.ProfileModule),
    },
    {
        path: "profile",
        loadChildren: () => import("@application-a/profile").then(m => m.ProfileModule),
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: `/home`,
    },
];
