Para la creación de rutas se tiene que inetalar he importar el react route dom

```

```

```
import React from "react";

import ReactDOM from "react-dom/client";

import { App } from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EnEmision } from "./components";

import { Animes } from "./components/Animes/Animes.jsx";

  

const router = createBrowserRouter([

  {

    path: "/",

    element: <App />,

  },

  {

    path: "/emision",

    element: <EnEmision />,

  },

  {

    path: "/animes",

    element: <Animes />,

  },

]);

  

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>

);
```

Para que la página no se recargue se utiliza
```
 <Link
	className="fs-5 nav-link active text-light"
    aria-current="page"
    to="/animes"
>
```