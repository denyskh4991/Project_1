import React from 'react';
import "./App.css";

// Компонент хедера
function Header() {
  return (
      <header className="header">
        <h1>Hello-hello</h1>
      </header>
  );
}

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
          </div>
        </div>

  );
}

export default App;