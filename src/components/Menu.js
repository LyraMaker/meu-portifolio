

class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
        <nav class="flex justify-between bg-orange-600 p-4">
            <div class="flex items-center"><img src="https://picsum.photos/20"> <p class="ps-2">LyraThor</p></div>
            <div>menu</div>
        </nav>
    </header>

    `;
  }
}

customElements.define("my-menu", Hero);
