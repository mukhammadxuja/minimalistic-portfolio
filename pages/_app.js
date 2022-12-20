import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';

import 'styles/globals.css';
import Layout from 'components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-primary dark:bg-dark'>
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
