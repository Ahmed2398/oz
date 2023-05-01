const navbar= `
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="src/assets/images/logo.svg" class="w-75">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active"  href="#">About OZ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Venues</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Community</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="membership.html">Membership</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">F & B</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Events</a>
                </li>
            </ul>
            <div class="d-flex">
                <a class="nav-link navbar-text mx-4" href="contactus.html">inquire</a>
                <a class="nav-link m-auto" href="index.html">Login <img src="src/assets/images/icons/loginIcon.png"></a>
            </div>
        </div>
    </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.querySelector("#navbar");
    navContainer.innerHTML = navbar;
});