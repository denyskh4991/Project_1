import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/albums/${user.id}`}>Album</Link>
                        <Link to={`/photos/${user.id}`}>Photos</Link>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Albums({ userId }) {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, [userId]);

    return (
        <div>
            <h2>Альбоми</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos/${album.id}`}>Photos</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/albums/:userId" element={<Albums />} />
                <Route path="/" element={<UserList />} />
            </Routes>
        </Router>
    );
}

export default App;