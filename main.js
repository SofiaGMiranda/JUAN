class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <header class="header">
        <nav>
          <a href="JUAN/index.html" class="header__logo">
            <img src="imagenes/juan_mostacho.png" alt="JUAN">
        
          <div class="header_links ">
            <a href=#>¡A practicar!</a> <a href=#>Foro</a> 
          </div>
        </nav>
        </header> `
    }
}

customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <footer>
        © 2022 PenguinOS
        </footer> `
    }
}

customElements.define('my-footer',MyFooter)