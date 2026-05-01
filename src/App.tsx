import { Route, Routes } from "react-router-dom";
import { AdminDashboardPage } from "./admin/AdminDashboardPage";
import { AdminLayout } from "./admin/AdminLayout";
import { AdminLoginPage } from "./admin/AdminLoginPage";
import { RequireAdminAuth } from "./admin/RequireAdminAuth";
import { RouteSeo } from "./components/RouteSeo";
import { MarketingLayout } from "./layouts/MarketingLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { ResultsPage } from "./pages/ResultsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TermsPage } from "./pages/TermsPage";

export default function App() {
  return (
    <>
      <RouteSeo />
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLoginPage />} />
          <Route
            index
            element={
              <RequireAdminAuth>
                <AdminDashboardPage />
              </RequireAdminAuth>
            }
          />
        </Route>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
        </Route>
      </Routes>
    </>
  );
}
