import React, { useState, useEffect } from 'react'
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import axios from 'axios'

import './Home.css'
const Home = () => {
    const [users, setUsers] = useState(null)
  let descendingUsers

    const addData = async () => {
        await axios.post('/.netlify/functions/addData')
      }
      const fetchData = async () => {
        const results = await axios.get('/.netlify/functions/posts')
        console.log(results.data)
        setUsers(results.data)
      }
      useEffect(() => {
        addData()
        fetchData()
      }, [])
      if (users) {
        descendingUsers = users.sort((a, b) => a.id < b.id ? 1 : -1)
        const following = users.filter(user => user.is_followed === true)
        const descendingFollowing = following.sort((a, b) => a.likes < b.likes ? 1 : -1)
        topFiveFollowing = descendingFollowing.slice(0, 5)

      }



        return (
            <>
    {descendingUsers && (

            <div className="container">
                <FollowersColumn />
                <div className="feed">
                {descendingUsers.map((descendingUser, index) => (
            <Card
              key={index}
              user={descendingUser}
              
            />
          ))}          {descendingUsers.map((descendingUser, index) => (
            <Card
              key={index}
              user={descendingUser}
              toggleFollow={userToToggle => setUserToToggle(userToToggle)}
            />
          ))}     
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
    )}
            </>
        )
    }
    
export default Home
