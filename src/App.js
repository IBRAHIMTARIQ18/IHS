import React from 'react';
import './App.css';
import Home from './pages/home';
import { ErrorPage } from './pages/errorPage';

import { RootComponent } from './pages/root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Signin } from './pages/signin';
import { ListPage } from './pages/list';
import { Detail } from './pages/detail';
import 'react-slideshow-image/dist/styles.css'
import { RegisterForm } from './pages/register';
import { ListingForm } from './pages/cretaeListingForm';
import { FaSignInAlt } from 'react-icons/fa';
import { ContactUs } from './pages/contactus';
import { AboutUs } from './pages/aboutus';
import { TermsAndConditions } from './pages/termsandconditions';

import Firebase from "./firebase/firebase";
import { FirebaseContext } from "./context/firebase-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "signin",
        element: <Signin />,
        // loader: teamLoader,
      },
      {
        path: "Listing",
        element: <ListPage />,
        // loader: teamLoader,
      },
      {
        path: "Listing/detail",
        element: <Detail />,
        // loader: teamLoader,
      },
      {
        path: "register",
        element: <RegisterForm />,
        // loader: teamLoader,
      },
      {
        path: "listingform",
        element: <ListingForm />,
        // loader: teamLoader,
      },
      {
        path: "contactus",
        element: <ContactUs />,
        // loader: teamLoader,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
        // loader: teamLoader,
      },
      {
        path: "termsandconditions",
        element: <TermsAndConditions />,
        // loader: teamLoader,
      },
    ],
  },
  
]);



function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
  );
}



export default App;
