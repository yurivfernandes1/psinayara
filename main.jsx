import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinksPage from './links/LinksPage.jsx';
import HomePage from './HomePage.jsx';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/links" element={<LinksPage />} />
        </Routes>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
