import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";
import { initializeAnalytics } from "./components/AnalyticsTracker";

import App from "./App.tsx";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TravelPage from "./pages/TravelPage";
import EducationPage from "./pages/EducationPage";
import InsurancePage from "./pages/InsurancePage";
import B2CPage from "./pages/B2CPage";
import G2CPage from "./pages/G2CPage";
import FinancialInclusionPage from "./pages/FinancialInclusionPage";
import ContactPage from "./pages/ContactPage";
import CareerPage from "./pages/CareerPage";
import AboutUsPage from "./pages/AboutUsPage";
import PartnersPage from "./pages/PartnersPage";
import ResourcesPage from "./pages/ResourcesPage";
import ImplementationGuidelinesPage from "./pages/resources/ImplementationGuidelinesPage";
import RightToInformationPage from "./pages/resources/RightToInformationPage";
import FAQPage from "./pages/resources/FAQPage";
import RFPage from "./pages/resources/RFPage";

// Travel sub-pages
import AirTicketPage from "./pages/travel/AirTicketPage";
import BusBookingPage from "./pages/travel/BusBookingPage";
import RailTicketPage from "./pages/travel/RailTicketPage";
import VisaServicesPage from "./pages/travel/VisaServicesPage";

// G2C sub-pages
import PMJAYPage from "./pages/g2c/PMJAYPage";
import EShramPage from "./pages/g2c/EShramPage";
import AadhaarCardPage from "./pages/g2c/AadhaarCardPage";

// B2C sub-pages
import DSCPage from "./pages/b2c/DSCPage";
import RechargePage from "./pages/b2c/RechargePage";

// Admin pages
import UnifiedLoginPage from "./pages/admin/UnifiedLoginPage";
import EnhancedAdminDashboard from "./pages/admin/EnhancedAdminDashboard";

const rootRoute = createRootRoute({
  component: () => {
    // Initialize analytics on app start
    useEffect(() => {
      initializeAnalytics();
    }, []);

    return <Outlet />;
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const travelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel",
  component: TravelPage,
});

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/education",
  component: EducationPage,
});

const insuranceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/insurance",
  component: InsurancePage,
});

const b2cRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/b2c",
  component: B2CPage,
});

const g2cRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/g2c",
  component: G2CPage,
});

const financialInclusionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/financial-inclusion",
  component: FinancialInclusionPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const careerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: CareerPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutUsPage,
});

const partnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partners",
  component: PartnersPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

// Resources sub-routes
const implementationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources/implementation",
  component: ImplementationGuidelinesPage,
});

const rtiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources/rti",
  component: RightToInformationPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources/faq",
  component: FAQPage,
});

const rfpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources/rfp",
  component: RFPage,
});

// Travel sub-routes
const airTicketRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel/air-ticket",
  component: AirTicketPage,
});

const busBookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel/bus-booking",
  component: BusBookingPage,
});

const railTicketRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel/rail-ticket",
  component: RailTicketPage,
});

const visaServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel/visa",
  component: VisaServicesPage,
});

// G2C sub-routes
const pmjayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/g2c/pmjay",
  component: PMJAYPage,
});

const eshramRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/g2c/eshram",
  component: EShramPage,
});

const aadhaarCardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/g2c/aadhaar",
  component: AadhaarCardPage,
});

// B2C sub-routes
const dscRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/b2c/dsc",
  component: DSCPage,
});

const rechargeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/b2c/recharge",
  component: RechargePage,
});

// Admin routes
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/login",
  component: UnifiedLoginPage,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/dashboard",
  component: EnhancedAdminDashboard,
});

const enhancedAdminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/enhanced-dashboard",
  component: EnhancedAdminDashboard,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  servicesRoute,
  travelRoute,
  educationRoute,
  insuranceRoute,
  b2cRoute,
  g2cRoute,
  financialInclusionRoute,
  contactRoute,
  careerRoute,
  aboutRoute,
  partnersRoute,
  resourcesRoute,
  // Resources sub-routes
  implementationRoute,
  rtiRoute,
  faqRoute,
  rfpRoute,
  // Travel sub-routes
  airTicketRoute,
  busBookingRoute,
  railTicketRoute,
  visaServicesRoute,
  // G2C sub-routes
  pmjayRoute,
  eshramRoute,
  aadhaarCardRoute,
  // B2C sub-routes
  dscRoute,
  rechargeRoute,
  // Admin routes
  adminLoginRoute,
  adminDashboardRoute,
  enhancedAdminDashboardRoute,
]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
