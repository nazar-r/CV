import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import type { ReactElement } from 'react';
import '../src.a.css/index.css';

const Layout = lazy(() => import('./tsx.items/layout.tsx'));
const ProjectsPage = lazy(() => import('./tsx.pages/page.projects.tsx'));
const WelcomePage = lazy(() => import('./tsx.pages/page.welcome.tsx'));
const AboutPage = lazy(() => import('./tsx.pages/page.about.tsx'));
const ANotePage = lazy(() => import('./tsx.pages/page.anote.tsx'));
const AMessagePage = lazy(() => import('./tsx.pages/page.amessage.tsx'));
const ContactsPage = lazy(() => import('./tsx.pages/page.contacts.tsx'));
const CertificationsPage = lazy(() => import('./tsx.pages/page.certifications.tsx'));

const withSuspense = (component: ReactElement) => (
  <Suspense>{component}</Suspense>
);

const contentRoutes: RouteObject[] = [
  {
    path: '/', element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/welcome" replace /> },
      { path: 'welcome', element: withSuspense(<WelcomePage />) },
      { path: 'projects', element: withSuspense(<ProjectsPage />) },
      { path: 'amessage', element: withSuspense(<AMessagePage />) },
      { path: 'anote', element: withSuspense(<ANotePage />) },
      { path: 'about', element: (withSuspense(<AboutPage />)) },
      { path: 'contacts', element: (withSuspense(<ContactsPage />)) },
      { path: 'certifications', element: (withSuspense(<CertificationsPage />)) },
    ],
  },
];

const appRouter = createBrowserRouter(contentRoutes);
const RouterRendering = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};

export default RouterRendering;