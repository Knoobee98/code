import Jumbotron from './../../components/jumbotron/jumbotron';
import Explore from './../../components/explore/explore';
import Recommended from './../../components/recommended/recommended';
import Testimony from './../../components/testimony/testimony'

let Homepage = () => {
    return(
        <>
        <Jumbotron />
        <Explore />
        <Recommended />
        <Testimony />
        </>
    )
}

export default Homepage