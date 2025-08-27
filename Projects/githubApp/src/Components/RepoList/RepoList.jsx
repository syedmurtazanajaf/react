import React from 'react'
import "./RepoList.css"

const RepoList = ({repos}) => {
  return (
    <div className='repo-list'>
        <h3>Latest Repositories</h3>
        <ul>
            {repos.map((r)=>(
            <li key={r.id}>
                <a href={r.html_url} target='_blank' rel='noreferrer'>{r.name}</a>
                {r.description && <p>{r.description}</p>}
            </li>
            ))}
        </ul>

    </div>
  )
}

export default RepoList