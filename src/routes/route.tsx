import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ContainerChild} from "./ContainerChild.tsx";

const router = createBrowserRouter(ContainerChild);


// RouterProvider를 컴포넌트로 생성
const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
