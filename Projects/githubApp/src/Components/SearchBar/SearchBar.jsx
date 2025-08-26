import "./SearchBar.css"

const SearchBar = ({ username, setUsername, searchUser }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") searchUser();
    };


    return (
        <div className='search-bar'>
            <input type="text" placeholder='Enter GitHub username' value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyDown} />
            <button onClick={searchUser}>Search</button>
        </div>
    )
}

export default SearchBar