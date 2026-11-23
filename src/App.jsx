import s from './App.module.css'
import { Menu } from './components/menu'
import bannerImg from '/bannerImg.jpg'

function App() {

  return (
    <>
      <Menu/>
        <div className={s.wrapHome}>

            <div className={s.section1}>
                <div className={s.wrapImage}>
                  <img className={s.imgSection1} src={bannerImg} alt="banner" />
                </div>
                <div className={s.wrapTexts}>
                    <h1 className={s.tituloSection1}>GTA VI</h1>
                    <p className={s.textSection1}>Melhor jogo de todos!</p>
                    <button className={s.btnSection1}>CLIQUE</button>
                </div>
            </div>

            <div className={s.section2}>
              <iframe className={s.vid} src="https://www.youtube.com/embed/WYdCRVKC6VM?si=a8cAkjB8NX8t8gFV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    
    </>
  )
}

export default App

