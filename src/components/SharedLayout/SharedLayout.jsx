import { Navigation } from "components/Navigation/Navigation"
import { Outlet } from "react-router-dom";
import css from './SharedLayout.module.css';

export const SharedLayout = () => {

    return (
        <div className={css.container}>
            <header className={css.header}>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}