import './style.css'
import './components/Hero'
import './components/Menu'

document.querySelector('#app').innerHTML = `
  <my-hero>
    <header-hero>
      <my-menu></my-menu>
    </header-hero>

    <content-hero>
      <h1 class="text-4xl">Bem-vindo ao Hero</h1>
      <p>Este é o conteúdo principal</p>
    </content-hero>

    <footer-hero>
      <p>&copy; 2025 Gabriel</p>
    </footer-hero>
  </my-hero>
`