
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

import './Home.css'
const Home = () => {

    const addData = async () => {
        await axios.post('/.netlify/functions/addData')
      }
        return (
            <div className="container">
                <FollowersColumn />
                <div className="feed">
                    <h1>Home</h1>
                </div>
                <div className="suggested-box">
                    <div className="section">
                        <div className="suggested">
                            <h2 className="bold">Suggested accounts</h2>
                            <div className="break" />
                    </div>
                        </div>
                </div>
            </div>
        )
    }
    
export default Home
