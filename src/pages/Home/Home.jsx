import { HomeCard } from "components/HomeCard/HomeCard";
import { Helmet } from "react-helmet";
import css from './Home.module.css';

export const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <section className={css.hero}>
                <h1 className={css.heading}>Welcome to GoIT Tweets Application!</h1>
                <HomeCard/>
            </section>
        </>
        
    )
}
