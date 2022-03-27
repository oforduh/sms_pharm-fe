import pages from "../pages";

const routes = [
  {
    path: "/",
    element: <pages.Dashboard />,
    type: "authenticated",
  },
  {
    path: "/home",
    element: <pages.Dashboard />,
    type: "authenticated",
  },
  {
    path: "/prescription",
    element: <pages.Prescription />,
    type: "authenticated",
  },
  {
    path: "/patient/data",
    element: <pages.PatientData />,
    type: "authenticated",
  },
  {
    path: "/account",
    element: <pages.Accounts />,
    type: "authenticated",
  },
  {
    path: "/activity",
    element: <pages.Activity />,
    type: "authenticated",
  },
  {
    path: "/login",
    element: <pages.Login />,
    type: "protected",
  },
  {
    path: "/department",
    element: <pages.Branch />,
    type: "authenticated",
  },
];

export default routes;
