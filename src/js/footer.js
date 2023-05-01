const footer = `
    <footer class="footer-section ">
    <!--footer top start-->
    <div class="footer-top  text-white ">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-9 col-lg-4 mb-md-4 mb-lg-0">
                    <div class="footer-single-col">
                        <div class="footer-single-col mb-4">
                            <img src="src/assets/images/logoWhite.svg" alt="logo" class="img-fluid w-75 ">
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod Lorem ipsum dolor sit amet, consectetur dipiscing
                        </p>
                        <hr class="footer-hr2">

                        <span>© 2023, Made with passion by Macber EG</span>

                    </div>
                </div>
                <div class="col-md-12 col-lg-7 col-sm-12 mt-4 mt-md-0 mt-lg-0">
                    <div class="row">
                        <div class="col-md-4 col-lg-3 col-sm-6 ">
                            <div class="footer-single-col">
                                <div class="mb-3">
                                    <h3 class="text-center pb-4">Follow us</h3>
                                    <div class="d-flex justify-content-between mb-3">
                                        <a href="#" target="_blank">
                                            <img src="src/assets/images/icons/facebookWhite.png">
                                        </a>
                                        <a href="#" target="_blank">
                                            <img src="src/assets/images/icons/instgramWhite.png">
                                        </a>
                                        <a href="#" target="_blank">
                                            <img src="src/assets/images/icons/twitterWhite.png">
                                        </a>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h3 class="text-center m-0">Call us</h3>
                                    <div >
                                        <a class="text-white m-0 "href="tel:+1 800 854-36-80">+1 800 854-36-80</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3 col-sm-6 ">
                            <div class="footer-single-col ">
                                <h3 class="text-center pb-4">Services</h3>
                                <ul class="list-unstyled footer-nav-list mb-lg-0 ">
                                    <li><a href="#" class="text-decoration-none  nav-link">Membership</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Booking</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Community</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Events</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Gallery</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3 col-sm-6 ">
                            <div class="footer-single-col ">
                                <h3 class="text-center pb-4">Location</h3>
                                <ul class="list-unstyled footer-nav-list mb-lg-0 ">
                                    <li><a href="#" class="text-decoration-none  nav-link">Giza -  sheikh Zayed</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Giza -  Gezira Club</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3 col-sm-6 ">
                            <div class="footer-single-col ">
                                <h3 class="text-center pb-4">Company</h3>
                                <ul class="list-unstyled footer-nav-list mb-lg-0 ">
                                    <li><a href="#" class="text-decoration-none  nav-link">About Us</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Careers</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">FAQs</a></li>
                                    <li><a href="#" class="text-decoration-none  nav-link">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--footer top end-->
    <!--footer bottom start-->
    <div class="footer-bottom text-white">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-12 col-lg-12">
                    <div class="d-flex justify-content-start" >
                        <a href="#" target="_blank" class="px-3">Privacy Policy</a>
                        <a href="#" target="_blank" class="px-3">Terms of Use</a>
                        <a href="#" target="_blank" class="px-3">Accessibility</a>
                        <a href="#" target="_blank" class="px-3">Site Map</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--footer bottom end-->
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.querySelector("#footer");
    footerContainer.innerHTML = footer
});