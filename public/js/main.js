var myRouter = new VueRouter({
    routes: [
        {
            path: '/home',
            component: {
                template: `
                <div id="home" class="home">
                <div class="text-vcenter">
                    <h1>JF Web Studio</h1>
                    <h3>Where Your Online Presence Is Born</h3>
                    <p class="lead">Welcome to the SPA version of my portfolio page.</p>
                    <p class="lead">Bacon ipsum dolor amet fatback cupim beef burgdoggen ham tail. Filet mignon tail hamburger, kielbasa capicola tongue bresaola brisket spare ribs. Bresaola landjaeger ground round beef capicola, pork chop pig pancetta. Ball tip jerky bresaola bacon prosciutto, tail spare ribs. Capicola flank andouille porchetta, ball tip salami filet mignon alcatra sirloin landjaeger hamburger. Picanha tongue pork belly beef ribs, beef ham short loin ground round. Cow venison picanha, tongue t-bone short loin bresaola ham hock turducken ball tip flank pig chuck kevin beef ribs.<p/>
                    </div>
                </div>
                `
            }
        },
        {
            path: '/about',
            component: {
                template: `
                <div id="about" class="pad-section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 text-left s2-text">
                            <h2>About JF Web Studio</h2>
                            <h3 class="lead">We are here to help your web presence stand out in the vast sea of websites. Using cutting edge UX/UI
                                techniques your message will come accross to all your potential clients. Let us help you achieve
                                your online goals. <br> Competences: Languages and Frameworks: Javascript, HTML5, CSS3, jQuery, Bootstrap3,
                                Angular.js. Tools & expertise: Git, Responsive Web Design, Agile Methodologies, Photoshop.Testing Git Ignore making minor change remove when finished.</h3>
                        </div>
                        <div class="col-sm-6 text-left s2-text img-size">
                            <img src="http://josephfan.com/images/JF.jpg">
                        </div>
                    </div>
                </div>
            </div>
                `
            }
        },
        {
            path: '/portfolio',
            component: {
                template: `
                <div id="portfolio" class="pad-section s2-text">
                <div class="container text-center">
                    <h2>Portfolio</h2>
                    <h3>Below you'll find some of my recent work</h3>
                    <div class="row">
        
                        <div class="col-sm-4">
                            <a href="http://www.JosephFan.com" class="thumbnail" target="_blank">
                  <img src="http://josephfan.com/images/portfolio1.png" alt="Portfolio 1"></img>
                </a>
                        </div>
        
                        <div class="col-sm-4">
                            <a href="http://www.WodWatchTV.com" class="thumbnail" target="_blank">
                  <img src="http://josephfan.com/images/portfolio2.png" alt="Portfolio 2"></img>
                </a>
                        </div>
        
                        <div class="col-sm-4">
                            <a href="https://codepen.io/joefan/full/oZKOZq" class="thumbnail" target="_blank">
                  <img src="http://josephfan.com/images/portfolio3.png" alt="Portfolio 3"></img>
                </a>
                        </div>
        
                        <div class="col-sm-4">
                            <a href="https://www.youtube.com/c/JosephFan007" class="thumbnail" target="_blank">
                  <img src="http://josephfan.com/images/portfolio4.png" alt="Portfolio 4"></img>
                </a>
                        </div>
        
                        <div class="col-sm-4">
                            <a href="https://vimeo.com/joefan" class="thumbnail" target="_blank">
                  <img src="http://josephfan.com/images/portfolio5.png" alt="Portfolio 5"></img>
                </a>
                        </div>
        
                        <div class="col-sm-4">
                            <a href="https://www.instagram.com/zandithepitbull/" class="thumbnail" target="_blank">
                  <img src="http://josephfan.com/images/portfolio6.png" alt="Portfolio 6"></img>
                </a>
                        </div>
                    </div>
                </div>
            </div>
                `
            }

        },
        {
            path: '/contact',
            component: {
                template: `
                <div id="contact" class="pad-section">
                <div class="container">
                    <div class="row">
                        <h2 class="text-center s2-text">Contact</h2>
                        <div class="col-sm-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h2 class="panel-title">Send a message</h2>
                                </div>
                                <div class="panel-body lead">
                                    <form>
                                        <div class="form-group">
                                            <label for="name">Name:</label>
                                            <input type="text" class="form-control" id="name">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email address:</label>
                                            <input type="email" class="form-control" id="email">
                                        </div>
                                        <div class="form-group">
                                            <label for="message">Message:</label>
                                            <textarea class="form-control" rows="5" id="message"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-default">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h2 class="panel-title">Contact Info</h2>
                                </div>
                                <div class="panel-body lead">
                                    <p>Email: <a href="mailto:joefan@joe-fan.com">joefan@joe-fan.com</a></p>
                                    <p>Phone: 720-555-1212</p>
                                    <p>JF Web Studio<br>123 Any Street<br>Anytown, MA<br>12345-4321</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `
            }
        }

    ]
})

var mainVm = new Vue({
    el: '#app',
    router: myRouter
})