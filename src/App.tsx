import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import InfoSection from './components/InfoSection';
import ComparisonsSection from './components/ComparisonsSection';
import SolutionsSection from './components/SolutionsSection';
import { generalStatistics, environmentalIssues, environmentalSolutions, environmentalComparisons } from './data/environmentalData';

// Importando as páginas
import DeforestationPage from './pages/Deforestation';
import OceansPage from './pages/Oceans';
import AgriculturePage from './pages/Agriculture';
import SolutionsPage from './pages/Solutions';
import ReferencesPage from './pages/References';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero 
                  title="Proteja Nosso Planeta!"
                  subtitle="Conheça os impactos ambientais causados por ações humanas e como podemos construir um futuro mais sustentável"
                  backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                  ctaText="Saiba Mais"
                  ctaLink="#stats"             
                  secondaryCtaLink="#solutions"
                  overlay={true}
                  height="100vh"
                  alignText="center"
                />
                
                <div id="stats">
                  <StatsSection 
                    title="Estatísticas Ambientais"
                    subtitle="Dados importantes sobre o impacto ambiental da agropecuária"
                    stats={generalStatistics}
                    columns={4}
                  />
                </div>
                
                <InfoSection 
                  title={environmentalIssues[0].title}
                  description={environmentalIssues[0].description}
                  imageUrl={environmentalIssues[0].imageUrl || 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
                  imageAlt="Desmatamento para pecuária"
                  ctaText="Saiba Mais"
                  ctaLink="/deforestation"
                  backgroundColor={theme.colors.background}
                />
                
                <InfoSection 
                  title={environmentalIssues[2].title}
                  description={environmentalIssues[2].description}
                  imageUrl={environmentalIssues[2].imageUrl || 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
                  imageAlt="Consumo de água na pecuária"
                  reverse={true}
                  backgroundColor={theme.colors.background}
                />
                
                <div id="comparisons">
                  <ComparisonsSection 
                    title="Comparações de Impacto"
                    subtitle="Veja a diferença de impacto ambiental entre diferentes escolhas"
                    comparisons={environmentalComparisons}
                    columns={2}
                    backgroundColor={theme.colors.tertiary + '20'}
                  />
                </div>
                
                <div id="solutions">
                  <SolutionsSection 
                    title="Soluções Ambientais"
                    subtitle="Conheça algumas soluções para reduzir o impacto ambiental"
                    solutions={environmentalSolutions}
                    columns={3}
                    backgroundColor={theme.colors.background}
                  />
                </div>
              </>
            } />
            <Route path="/deforestation" element={<DeforestationPage />} />
            <Route path="/oceans" element={<OceansPage />} />
            <Route path="/agriculture" element={<AgriculturePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/references" element={<ReferencesPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
