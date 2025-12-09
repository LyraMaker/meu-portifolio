class Hero extends HTMLElement {
connectedCallback() {
this.innerHTML = `
    <div class="flex min-h-screen w-full items-center justify-center bg-gray-100">
      
    </div>

`;
}
}

customElements.define("my-hero", Hero);