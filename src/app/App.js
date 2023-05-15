import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Pages/Home'
import Training from '../components/Pages/Training'
import DailyActions from '../components/Pages/Training/Questionnaires/DailyActions';
import Result from '../components/Pages/Result';
import About from '../components/Pages/About';
import { GlobalStyles } from './style';
import { createContext, useRef, useState } from 'react';
import ResearchDesignPlanning from '../components/Pages/Training/Questionnaires/ResearchDesignPlanning';
import Completed from '../components/Completed';
import { ThemeProvider } from 'styled-components';
import Introduction from '../components/Pages/Test/Introduction';

export const AppContext = createContext()
export var theme = {
  scoreColor: 'black'
}

function App() {
  const [training, setTraining] = useState({
    score: 0,
    dailyAction: 'incomplete',
    researchDesignPlanning: 'incomplete'
  })
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const windowHeight = windowSize.current[1]

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ theme }>
        <AppContext.Provider value={{training, setTraining}}>
          <Router>
            <Routes>
              <Route path='/' element={<Layout pageMinimumHeight={windowHeight}/>}>
                <Route index element={<Home window/>}/>
                <Route path='test' element={<Introduction />}/>
                <Route path='training'>
                  <Route index element={<Training />}/>
                  <Route path='questions/daily_actions' element={<DailyActions />}/>
                  <Route path='questions/research_design_planning' element={<ResearchDesignPlanning />}/>
                  <Route path='completed' element={<Completed />}/>
                </Route>
                <Route path='result' element={<Result />}/>
                <Route path='about-us' element={<About />}/>
              </Route>
            </Routes>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App;
