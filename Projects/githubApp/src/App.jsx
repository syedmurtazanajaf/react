import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar'
import UserCard from './Components/UserCard/UserCard'
import RepoList from "./Components/RepoList/RepoList"

const App = () => {


  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchUser = async () => {
    const u = username.trim();
    if (!u) {
      setError("Please enter a GitHub username");
      return;
    }
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {

      const [userRes, repoRes] = await Promise.all([
        axios.get(`https://api.github.com/users/${u}`),
        axios.get(`https://api.github.com/users/${u}/repos`, {
          params: { sort: "updated", per_page: 10 },
        }),
      ]);

      setUser(userRes.data);
      setRepos(repoRes.data);

    } catch (err) {
      if (err?.response?.status === 404) {
        setError("User not found. Check the username and try again.");

      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }

  };


  return (
    <div className='container'>
      <h1>Github Finder</h1>
      <SearchBar
        username={username}
        setUsername={setUsername}
        searchUser={searchUser}
      />

      {error && <p className='error'>{error}</p>}
      {loading && <p>Loading...</p>}

      {user && <UserCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}

    </div>
  )
}

export default App