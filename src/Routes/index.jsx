import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import GuardedRoutes from './guardedRoute'
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <PublicRoutes />
            <GuardedRoutes />
        </BrowserRouter>
    )
}
export default AppRoutes