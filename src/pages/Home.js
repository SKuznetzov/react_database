import './Home.css'
import FollowersColumn from '../components/FollowersColumn'
const Home = () => {
        return (
            <div className="container">
                <h1>Home</h1>
                <FollowersColumn />
                <div className="feed"></div>
                <div className="suggested-box"></div>
            </div>
        )
    }
    
export default Home
