import About from './index';
import Header from '../../components/header';
import Footer from '../../components/footer';

export const aboutRouter = {
    path: "/padmasambhava/about",
    element: (
        <>
            <Header />
            <About />
            <Footer />
        </>
    ),
}

export default aboutRouter;