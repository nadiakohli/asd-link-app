import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// Images
import circles from 'assets/images/webp/blurredCircles.webp';

// Components
const Header = React.lazy(() => import('components/common/Header'));
const Home = React.lazy(() => import('components/Home'));
const ValidateLink = React.lazy(() => import('components/ValidateLink'));
const NotFound = React.lazy(() => import('components/NotFound'));

// Styles
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${circles});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: right;
`;

const AppRoutes = () => (
  <Wrapper>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/validate-link" element={<Suspense fallback={<div>Loading...</div>}><ValidateLink /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
      </Routes>
    </Router>
  </Wrapper>
);

export default AppRoutes;
