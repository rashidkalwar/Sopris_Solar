import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';

import { AuthContextProvider } from 'src/firebase/Context/auth.context';

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContextProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 0.7,
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
