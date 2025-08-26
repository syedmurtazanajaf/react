import "./UserCard.css"


const UserCard = ({user}) => {


  return (
    <div className="user-card">
        <img src={user.avatar_url}alt={user.login} />
        <div className="user-info">
            <h2>{user.name || user.login}</h2>
            <p>{user.bio || "No bio available"}</p>

        <div className="stats">
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repos: {user.public_repos}</span>

        </div>
        <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>

    </div>
  )
}

export default UserCard