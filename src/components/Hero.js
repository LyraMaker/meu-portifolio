class HeaderHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="bg-orange-600 p-4">
        <h1>Header Hero</h1>
      </header>
    `;
    }
}
customElements.define("header-hero", HeaderHero);

// ContentHero
class ContentHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <main class="flex-grow flex items-center justify-center p-8">
        <h2>Content Hero</h2>
        <p>Aqui vai o conteúdo principal</p>
      </main>
    `;
    }
}
customElements.define("content-hero", ContentHero);

class FooterHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="bg-gray-800 text-white p-4 text-center">
        <p>Footer Hero © 2025</p>
      </footer>
    `;
    }
}
customElements.define("footer-hero", FooterHero);

class Hero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="flex flex-col min-h-screen w-full bg-gray-100">
        <header-hero></header-hero>
        <content-hero></content-hero>
        <footer-hero></footer-hero>
      </div>
    `;
    }
}
customElements.define("my-hero", Hero);