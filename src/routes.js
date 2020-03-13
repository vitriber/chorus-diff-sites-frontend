import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Main } from './pages/Main';
import  { Compare } from './pages/Compare';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/compare/:id" component={Compare} />
    </BrowserRouter>
  );
}