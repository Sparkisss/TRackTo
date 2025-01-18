import React from "react"

export const Statistics = React.lazy(() => import("@/pages").then(module => ({ default: module.Statistics })))
export const Tasks = React.lazy(() => import("@/pages").then(module => ({ default: module.Tasks })))
export const Equipment = React.lazy(() => import("@/pages").then(module => ({ default: module.Equipment} )))
export const Control = React.lazy(() => import("@/pages").then(module => ({ default: module.Control })))
export const PickInfo = React.lazy(() => import("@/pages").then(module => ({ default: module.PickInfo })))
export const Auth = React.lazy(() => import("@/pages").then(module => ({ default: module.Auth })))
export const ListOfUsers = React.lazy(() => import("@/pages").then(module => ({ default: module.ListOfUsers })))
export const Setting = React.lazy(() => import("@/pages").then(module => ({ default: module.Setting})))
export const Dashboard = React.lazy(() => import("@/pages").then(module => ({default: module.Dashboard})))
