document.addEventListener("DOMContentLoaded", function () {

    const savedUser =
        localStorage.getItem("sportfinderUser");

    const navButtons =
        document.querySelector(".nav-buttons");

    if (!savedUser || !navButtons) {
        return;
    }

    const user =
        JSON.parse(savedUser);

    const initial =
        user.name.charAt(0).toUpperCase();

    // Detectar si estamos dentro de la carpeta pages
    const isInsidePages =
        window.location.pathname.includes("/pages/");

    const pagesPath =
        isInsidePages ? "" : "pages/";

    const homePath =
        isInsidePages ? "../index.html" : "index.html";

    navButtons.innerHTML = `
        <div class="account-menu">

            <button
                type="button"
                class="account-button"
                id="account-button"
                aria-label="Abrir menú de cuenta"
            >

                <span class="account-avatar">
                    ${initial}
                </span>

                <span class="account-text">

                    <small>Hola,</small>

                    <strong>
                        ${user.name}
                    </strong>

                </span>

                <span class="account-arrow">
                    ▼
                </span>

            </button>

            <div
                class="account-dropdown"
                id="account-dropdown"
            >

                <div class="dropdown-header">

                    <span class="dropdown-avatar">
                        ${initial}
                    </span>

                    <div>

                        <strong>
                            ${user.name}
                        </strong>

                        <p>
                            ${user.email}
                        </p>

                    </div>

                </div>

                <div class="dropdown-divider"></div>

                <a
                    href="${pagesPath}mi-perfil.html"
                    class="dropdown-item"
                >

                    <span>👤</span>

                    Mi perfil

                </a>

                <a
                    href="${pagesPath}mis-reservas.html"
                    class="dropdown-item"
                >

                    <span>📅</span>

                    Mis reservas

                </a>

                <div class="dropdown-divider"></div>

                <button
                    type="button"
                    class="dropdown-item logout-item"
                    id="logout-button"
                >

                    <span>🚪</span>

                    Cerrar sesión

                </button>

            </div>

        </div>
    `;

    const accountButton =
        document.getElementById("account-button");

    const accountDropdown =
        document.getElementById("account-dropdown");

    const logoutButton =
        document.getElementById("logout-button");

    accountButton.addEventListener("click", function (event) {

        event.stopPropagation();

        accountDropdown.classList.toggle("show");

        accountButton.classList.toggle("active");

    });

    accountDropdown.addEventListener("click", function (event) {

        event.stopPropagation();

    });

    document.addEventListener("click", function () {

        accountDropdown.classList.remove("show");

        accountButton.classList.remove("active");

    });

    logoutButton.addEventListener("click", function () {

        localStorage.removeItem("sportfinderUser");

        window.location.href = homePath;

    });

});