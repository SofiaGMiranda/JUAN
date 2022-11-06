class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `

        <header class="header">
        <a href="index.html" class="header__logo">
            <img src="imagenes/juan_mostacho.png" alt="JUAN">
        <nav>
          <div class="header__links ">
            <a href=#>¡A practicar!</a> <a href=#>Foro</a> 
          </div>
        </nav>
        <a href="HTML/profile.html" class="header__user">
            <img src="imagenes/kittyProfile.jpg" alt="user">
        </header> `
    }
}

customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <footer>
        <div class="copyright">
        <a>© 2022 PenguinOS</a>
        </div>
        </footer> `
    }
}

customElements.define('my-footer',MyFooter)