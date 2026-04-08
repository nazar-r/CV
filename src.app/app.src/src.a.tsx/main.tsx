import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { authentication } from './tsx.extensions/authentication.ts';
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import type { ReactElement } from 'react';
import '../src.a.css/index.css';

const Layout = lazy(() => import('./tsx.items/layout.tsx'));
const LoginPage = lazy(() => import('./tsx.pages/login.page.tsx'));
const WelcomePage = lazy(() => import('./tsx.pages/welcome.page.tsx'));
const ChatPage = lazy(() => import('./tsx.pages/chat.page.tsx'));
const AnotePage = lazy(() => import('./tsx.pages/anote.tsx'));
const AmessagePage = lazy(() => import('./tsx.pages/amessage.tsx'));
const ContactsPage = lazy(() => import('./tsx.pages/contacts.tsx'));
const ChoosingUserPage = lazy(() => import('./tsx.pages/choosing.user.page.tsx'));

const withSuspense = (component: ReactElement) => (
  <Suspense>{component}</Suspense>
);

const contentRoutes: RouteObject[] = [
  {
    path: '/', element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/welcome" replace /> },
      { path: 'welcome', element: withSuspense(<WelcomePage />) },
      { path: 'lobby', element: withSuspense(<LoginPage />) },
      { path: 'projects', element: withSuspense(<LoginPage />) },
      { path: 'amessage', element: withSuspense(<AmessagePage />) },
      { path: 'anote', element: withSuspense(<AnotePage />) },
      { path: 'about', element: (withSuspense(<ChatPage />)) },
      { path: 'contacts', element: (withSuspense(<ContactsPage />)) },
    ],
  },
];

const appRouter = createBrowserRouter(contentRoutes);
const queryClient = new QueryClient();

const RouterRendering = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
  );
};

export default RouterRendering;