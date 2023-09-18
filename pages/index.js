import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirige a la página de tienda cuando el componente se monta
    router.push('/tienda');
  }, [router]);

  return null; // Este componente no renderiza nada en pantalla
};

export default Home;
