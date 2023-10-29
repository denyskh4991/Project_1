import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleAlbumClick = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data));
    };

    const handlePhotosClick = (albumId) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data));
    };

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <Link to={`/albums/${user.id}`}>Album</Link>
                    </li>
                ))}
            </ul>
            {albums.length > 0 && (
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
            )}
            {photos.length > 0 && (
                <div>
                    <h2>Фото</h2>
                    <ul>
                        {photos.map(photo => (
                            <li key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function Albums() {
    return <div>Вміст сторінки з альбомами</div>;
}

function Photos() {
    return <div>Вміст сторінки з фото</div>;
}

function App() {
    return (
        <Router>
            <Route path="/albums/:userId" component={Albums} />
            <Route path="/photos/:albumId" component={Photos} />
            <Route path="/" component={UserList} />
        </Router>
    );
}

export default App;