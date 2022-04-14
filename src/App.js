import React from 'react';
import { Routes, Route } from  'react-router-dom';
import * as Pages from './pages';
import {Layout} from './layout'
import {artistCard} from './components';



function App() {
  return (
    <>
   <Routes>
     <Route index element={<Pages.Home />} />
     <Route path="/" element={ <Layout />}>
       <Route path="about" element={<Pages.About />} />
       <Route path="profile" element={<Pages.Profile />} />
       <Route path="artists" element={<Pages.Artists />} >
          <Route index element={<artistCard />}/>
       </Route>
     </Route>
   </Routes>
   </>
  );
}

export default App;
