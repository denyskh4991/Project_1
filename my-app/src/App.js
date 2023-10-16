import React from 'react';
/*import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';*/

// Компонент хедера
function Header() {
  return (
      <header className="header">
        <h1>Hello-hello</h1>
      </header>
  );
}

// Компонент лівої бічної навігації
/*function Sidebar() {
  return (
      <aside>
        <nav>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
          </ul>
        </nav>
      </aside>
  );
}*/

// Компонент центрального контейнера
/*function MainContent() {
  return (
      <main>
        <Switch>
          <Route path="/about">
            <h2>Про нас</h2>
            <p>Опис вашого додатку</p>
          </Route>
          <Route path="/contact">
            <h2>Контакти</h2>
            <p>Контактна інформація</p>
          </Route>
          <Route path="/">
            <h2>Головна</h2>
            <p>Зміст головної сторінки</p>
          </Route>
        </Switch>
      </main>
  );
}*/

function App() {
  return (

        <div className="app">
          <Header />
            <aside className="aside">
                <div>
                    My name is unknown
                </div>
            </aside>
          <div className="content">
              <p>
                  I live in Warsaw
              </p>
            {/*<Sidebar />*/}
            {/*<MainContent />*/}
          </div>
        </div>

  );
}

export default App;