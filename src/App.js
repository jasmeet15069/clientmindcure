import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import WriteNew from "./pages/dashboard/WriteNew";
import PrivateJournals from "./pages/dashboard/PrivateJournals";
import PublicJournals from "./pages/dashboard/PublicJournals";
import PostViewPage from "./pages/dashboard/PostViewPage";
import Uplift from "./pages/dashboard/Uplift";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Meditate from "./pages/dashboard/uplift/Meditate";
import axios from "axios";
import Resources from "./pages/dashboard/Resources";
import Insights from "./pages/dashboard/Insights";
import Therapist from "./pages/dashboard/uplift/Therapist";
import ManageVideoOnCanvas from "./emotion/src/components/ManageVideoOnCanvas";
import Yoga from "./yogaMeditation/src/pages/Yoga/Yoga"
import Tutorials from "./yogaMeditation/src/pages/Tutorials/Tutorials"




// import Appp from "./Community-Support/src/App";
import CommunitySupport from "./Community-Support/src/components/Home";
import IndividualHome from "./Community-Support/src/components/Individuals/IndividualHome";
import OnlineBooking from "./Community-Support/src/components/Individuals/Booking/OnlineBooking";
import Telemedicine from "./Community-Support/src/components/Individuals/Telemedicine/Telemedicine";
import CrowdFunding from "./Community-Support/src/components/Individuals/Crowdfunding/CrowdFunding";
import PharmacyCatalog from "./Community-Support/src/components/Individuals/Online_Pharmacy/PharmacyCatalog";
import PharmacyHome from "./Community-Support/src/components/Pharmacies/PharmacyHome";
import NotificationsAndReminders from "./Community-Support/src/components/Individuals/Notifications/NotificationsAndRemainderse";
import MentalHealthSupport from "./Community-Support/src/components/Individuals/Mental_Health/MentalHealthSupport";
import HealthInformationPortal from "./Community-Support/src/components/Individuals/Health_Info_Portal/HealthInformationPortal";
import FeedbackAndReviews from "./Community-Support/src/components/Individuals/Feedback/FeedbackAndReviews";
import UserProfile from "./Community-Support/src/components/Individuals/User_Profile/UserProfile";
import HospitalHome from "./Community-Support/src/components/Hospitals/HospitalHome";
import LanguageAccessibility from "./Community-Support/src/components/Individuals/Accessibility/LanguageAccessibilty";
import EmergencySupport from "./Community-Support/src/components/Individuals/Emergency/EmergencySupport";
import HealthEducationPlatform from "./Community-Support/src/components/Individuals/Education/HealthEducationPlatform";
import FitnessWellnessCommunity from "./Community-Support/src/components/Individuals/Fitness_Wellness_Community/FitnessWellnessCommunity";
import RemoteHealthMonitoring from "./Community-Support/src/components/Individuals/Remote_Health_Monitoring/RemoteHealthMonitoring";

// import DashBoard from "./ChatVibe-main/src/Dashboard";
import Quiz from "./mhc_quiz/src/pages/Quiz";
import PortfolioForm from "./CustomizedPortfolio/PortfolioForm";
import PortfolioOutput from "./CustomizedPortfolio/PortfolioOutput";

// import { Quiz } from "@mui/icons-material";
function App() {
  // axios.defaults.baseURL = "http://localhost:5000";

  axios.defaults.baseURL = "https://mindcureserver.vercel.app";
  const testimonies = [
    {
      name: "Joy singh",
      review:
        "Simple easy to use journal website with a clean and user friendly UI. One can make daily entries easily and and can capture the mood of the writer pretty accurately.",
    },
    {
      name: "Ayush Khurana",
      review:
        "It was a pleasure working with the entire MindCure development team. ",
    },
    {
      name: "Manoj Kumar",
      review:
        "An amazing and thoughful app.It helps to express myself only to me with full security.",
    },
  ];

  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home testimonies={testimonies} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/dashboard/write-new"
            element={
              <ProtectedRoute>
                <WriteNew />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals/:postId"
            element={
              <ProtectedRoute>
                <PostViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/private-journals"
            element={
              <ProtectedRoute>
                <PrivateJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals"
            element={
              <ProtectedRoute>
                <PublicJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/insights"
            element={
              <ProtectedRoute>
                <Insights />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/meditate"
            element={
              <ProtectedRoute>
                <Meditate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/therapy"
            element={
              <ProtectedRoute>
                <Therapist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift"
            element={
              <ProtectedRoute>
                <Uplift />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard/resources" element={<Resources />} />
          <Route path="/dashboard/emotion" element={<ManageVideoOnCanvas />} />

          <Route path="/dashboard/Community-Support" element={<CommunitySupport />} />

          <Route path='/dashboard/yoga-meditation' element={<Yoga />} />
          <Route path='/dashboard/yoga-meditation' element={<Tutorials />} />

          {/* For Individual Users */}
          <Route path='/individual' element={<IndividualHome />} exact />
          <Route path='/individual/online_booking' element={<OnlineBooking />} exact />
          <Route path='/individual/telemedicine' element={<Telemedicine />} exact />
          <Route path='/individual/crowdfunding' element={<CrowdFunding />} exact />
          <Route path='/individual/online_pharmacy' element={<PharmacyCatalog />} exact />
          <Route path='/individual/notification_and_remainders' element={<NotificationsAndReminders />} exact />
          <Route path='/individual/profile_and_settings' element={<UserProfile />} exact />
          <Route path='/profile' element={<UserProfile />} exact />
          <Route path='/individual/feedback_and_reviews' element={<FeedbackAndReviews />} exact />
          <Route path='/individual/heath_information_portal' element={<HealthInformationPortal />} exact />
          <Route path='/individual/remote_health_monitoring' element={<RemoteHealthMonitoring />} exact />
          <Route path='/individual/mental_health_support' element={<MentalHealthSupport />} exact />
          <Route path='/individual/fitness_and_wellness_community' element={<FitnessWellnessCommunity />} exact />
          <Route path='/individual/health_education_and_awareness' element={<HealthEducationPlatform />} exact />
          <Route path='/individual/emergency_support' element={<EmergencySupport />} exact />
          <Route path='/individual/language_and_accessibility_support' element={<LanguageAccessibility />} exact />
          {/* For Hospitals */}
          <Route path="/hospital" element={<HospitalHome />} exact />
          {/* For Pharmacies */}
          <Route path='/pharmacy' element={<PharmacyHome />} exact />

          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />


          <Route
            path="/dashboard/Quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />

          <Route path="/dashboard/PortfolioForm" element={
            <ProtectedRoute>
              <PortfolioForm />
            </ProtectedRoute>
          } />

          <Route path="/dashboard/PortfolioOutputDashbaord" element={
            <ProtectedRoute>
              <PortfolioOutput/>
            </ProtectedRoute>
          } />

        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
