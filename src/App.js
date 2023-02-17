import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import css from './App.module.css'
function App() {
  return (
    <div className={css.app}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
