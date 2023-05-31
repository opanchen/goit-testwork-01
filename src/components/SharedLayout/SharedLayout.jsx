import { Outlet } from "react-router-dom"

export const SharedLayout = () => {

    return (
        <div className="container">
            <header></header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}