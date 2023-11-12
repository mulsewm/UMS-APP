import Signup from "../src/pages/Signup";
import PswForget from "../src/pages/PswForget";
import Complaint from "../src/pages/Complaint";
import Layout1 from "../src/pages/Layout1/Layout_1";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const routes = [
  { path: "/password-forget", component: PswForget },
  { path: "/sign-up", component: Signup },
  { path: "/submit-complaint", component: Complaint },
  { path: "/terms-of-service", component: TermsOfService },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/", component: Layout1 },
];

export default routes;
