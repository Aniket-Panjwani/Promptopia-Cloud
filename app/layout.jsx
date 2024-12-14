<<<<<<< HEAD
import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Nav from '@/components/Nav';
=======
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import WebChat from "@components/WebChat";
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
<<<<<<< HEAD
  <ClerkProvider>
    <html lang='en'>
      <body>
=======
  <html lang='en'>
    <body>
      <Provider>
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
<<<<<<< HEAD
      </body>
    </html>
  </ClerkProvider>
=======
      </Provider>
      <WebChat />
    </body>
  </html>
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
);

export default RootLayout;
