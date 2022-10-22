import { useState, useNavigate, useEffect, } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import GrantsPage from '../GrantsPage/GrantsPage';
import EditProfile from '../EditProfile/EditProfile';
import AboutUsPage from '../AboutUs/AboutUsPage';
import Chat from '../Chat/Chat'
import GrantDetailPage from '../GrantDetailPage/GrantDetailPage';
import Footer from '../../components/Footer/Footer'
import FaqPage from '../Faq/FaqPage'
import FindGuide from '../FindGuide/FindGuide';
import GuideProfile from '../GuideProfile/GuideProfile'
import Dashboard from '../Dashboard/Dashboard';

import * as grantsApi from "../../utilities/grants-api";
import * as userApi from "../../utilities/users-api"
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [grants, setGrants] = useState([]);
  const [grantsCopy, setGrantsCopy] = useState([]);
  const [guides, setGuides] = useState([]);

  // redid app.jsx to render nav and home page. I think it works well but may not be best solution

  useEffect(() => {
    const getGuides = async () => {
      let guides = await userApi.getGuides();
      setGuides(guides);
    }
    getGuides();
  }, [])

  return (
    <>
      <main className="App">
        {/* <AuthPage /> */}
        {user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <div className='container-wrapper px-4'>
              <Routes>
                {/* Route components in here */}
                <Route path="/profile" element={<ProfilePage user={user} guides={guides} />} />
                <Route path="/grants" element={<GrantsPage user={user} grants={grants} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} setGrants={setGrants} />} />
                <Route path='/grants/:grantId' element={<GrantDetailPage user={user} grants={grants} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} setGrants={setGrants} />} />
                <Route path="/editprofile" element={<EditProfile user={user} />} />
                <Route path="/chat" element={<Chat user={user} grants={grants} />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/findguide" element={<FindGuide user={user} guides={guides} />} />
                <Route path="/home" element={<Dashboard user={user} grants={grants} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} setGrants={setGrants} />} />
                <Route path="/guideprofile" element={<GuideProfile user={user} guides={guides} />} />
                <Route path='/' element={<Navigate to={'/grants'} />} />
                <Route path='/*' element={<Navigate to={'/grants'} />} />
              </Routes>
            </div>
          </>
          :
          <>
            <NavBar user={user} setUser={setUser} />
            <div className='container-wrapper px-4'>
              <Routes>
                {/* <Route path="/howitworks" element={<HowItWorksPage />}/> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/login" element={<AuthPage setUser={setUser} />} />
                <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
                <Route path='/*' element={<Navigate to={'/'} />} />
              </Routes>
            </div>
          </>
        }
        <Footer />
      </main>
    </>
  );
}