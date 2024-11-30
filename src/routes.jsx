import React from "react";
import Product from "./Components/Products/Product.jsx";
import Comment from "./Components/Comments/Comment.jsx";
import Order from "./Components/Orders/Order.jsx";
import Offers from "./Components/Offers/Offers.jsx";
import Users from "./Components/Users/Users.jsx";

const routes = [
     { path: "/persian-CMS-V2/products", element: <Product /> },
     { path: "/persian-CMS-V2/comments", element: <Comment /> },
     { path: "/persian-CMS-V2/order", element: <Order /> },
     { path: "/persian-CMS-V2/offers", element: <Offers /> },
     { path: "/persian-CMS-V2/users", element: <Users /> },

]


export default routes