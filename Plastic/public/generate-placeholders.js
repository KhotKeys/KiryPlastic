<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - PlasticShield</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Contact Page Specific Styles */
        .contact-hero {
            position: relative;
            height: 600px;
            background: linear-gradient(135deg, #1a8d5f 0%, #115740 100%);
            overflow: hidden;
            margin-top: 70px;
        }

        .animated-scene {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('images/eco-pattern.png') repeat;
            opacity: 0.1;
            animation: moveBackground 20s linear infinite;
        }

        @keyframes moveBackground {
            from { background-position: 0 0; }
            to { background-position: 100% 100%; }
        }

        .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .floating-element {
            position: absolute;
            animation: float 6s ease-in-out infinite;
            opacity: 0.8;
        }

        .element-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .element-2 { top: 30%; right: 15%; animation-delay: 1s; }
        .element-3 { bottom: 25%; left: 20%; animation-delay: 2s; }
        .element-4 { bottom: 35%; right: 25%; animation-delay: 3s; }

        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .contact-hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            padding: 80px 20px;
            text-align: center;
            color: #fff;
        }

        .contact-hero-content h1 {
            font-size: 3.5em;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease-out;
        }

        .contact-hero-content p {
            font-size: 1.2em;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out 0.3s;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: -100px;
            position: relative;
            z-index: 3;
            padding: 0 20px;
        }

        .contact-card {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 40px;
            transition: transform 0.3s ease;
        }

        .contact-card:hover {
            transform: translateY(-5px);
        }

        .contact-form {
            background: #fff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
        }

        .form-control {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            transition: border-color 0.3s ease;
        }

        .form-control:focus {
            border-color: var(--primary-color);
            outline: none;
        }

        .btn {
            background: var(--primary-color);
            color: #fff;
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease;
            width: 100%;
        }

        .btn:hover {
            background: #00b548;
        }

        .contact-info-list {
            list-style: none;
            padding: 0;
        }

        .contact-info-list li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 1.1em;
        }

        .contact-info-list i {
            width: 30px;
            color: var(--primary-color);
            font-size: 1.2em;
        }

        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
                margin-top: -50px;
            }
            .contact-hero {
                height: 500px;
            }
            .contact-hero-content {
                padding: 60px 20px;
            }
            .contact-hero-content h1 {
                font-size: 2.5em;
            }
        }
    </style>
</head>
<body>
    <!-- Loading Animation -->
    <div class="loading"></div>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="container">
            <a href="Main.html" class="logo">
                <img src="images/logo.jpeg" alt="PlasticShield Logo">
            </a>
            <button class="mobile-menu-btn">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <div class="nav-links">
                <a href="Main.html">Home</a>
                <a href="impact.html">Impact</a>
                <a href="about.html">About</a>
                <a href="contact.html" class="active">Contact</a>
                <a href="login.html">Login</a>
                <a href="register.html" class="register-btn">Join Us</a>
            </div>
        </div>
    </nav>

    <!-- Animated Hero Section -->
    <section class="contact-hero">
        <div class="animated-scene"></div>
        <div class="floating-elements">
            <img src="images/leaf1.png" alt="" class="floating-element element-1">
            <img src="images/leaf2.png" alt="" class="floating-element element-2">
            <img src="images/recycle.png" alt="" class="floating-element element-3">
            <img src="images/eco.png" alt="" class="floating-element element-4">
        </div>
        <div class="contact-hero-content">
            <h1>Join Our Mission</h1>
            <p>Be part of the change. Together, we can create a cleaner, more sustainable future.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <div class="container">
        <div class="contact-grid">
            <div class="contact-card">
                <h3>Get in Touch</h3>
                <p>We'd love to hear from you! Whether you want to volunteer, collaborate, or just learn more about our initiatives.</p>
                <ul class="contact-info-list">
                    <li>
                        <i class="fas fa-envelope"></i>
                        <span>info@plasticshield.org</span>
                    </li>
                    <li>
                        <i class="fas fa-phone"></i>
                        <span>+256 757 123 456</span>
                    </li>
                    <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Plot 123, Bweyale Town</span>
                    </li>
                </ul>
                <h4>Volunteer Opportunities</h4>
                <ul class="contact-info-list">
                    <li><i class="fas fa-bullhorn"></i> Community awareness campaigns</li>
                    <li><i class="fas fa-recycle"></i> Collection point management</li>
                    <li><i class="fas fa-chalkboard-teacher"></i> Educational workshops</li>
                    <li><i class="fas fa-broom"></i> Clean-up drives</li>
                </ul>
            </div>
            <div class="contact-form">
                <h3>Volunteer Registration</h3>
                <form id="volunteerForm">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="interest">Area of Interest</label>
                        <select id="interest" class="form-control" required>
                            <option value="">Select an option</option>
                            <option value="awareness">Community Awareness</option>
                            <option value="collection">Collection Point Management</option>
                            <option value="education">Educational Workshops</option>
                            <option value="cleanup">Clean-up Drives</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Why do you want to volunteer?</label>
                        <textarea id="message" class="form-control" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn">Submit Application</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Newsletter</h3>
                    <p>Stay updated with our latest initiatives and events.</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Enter your email" required>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@plasticshield.org</p>
                    <p>Phone: +256 757 123 456</p>
                    <p>Address: Plot 123, Bweyale Town</p>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="Main.html">Home</a></li>
                        <li><a href="impact.html">Impact</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 PlasticShield. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
