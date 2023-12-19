import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">🚀 XYZ CORP</div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <div className="company-detail-left">
        <h1>Welcome to XYZ Corp</h1>
        <p>Your Trusted Partner in Excellence</p>
        <img src="https://placehold.co/300x300" />
      </div>
      <div className="company-detail-right">
        <h2>About Our Company</h2>
        <p>
          Welcome to XYZ Corp, where excellence meets innovation. We are a
          passionate team dedicated to providing high-quality solutions for the
          technology industry. With a track record of 10 years of success, we
          have become a trusted partner for clients worldwide.
        </p>
        <p>
          Our mission is to empower businesses through cutting-edge technology.
          We believe in integrity, collaboration, and innovation, and we strive
          to make a positive impact on businesses and communities alike.
        </p>
        <p>
          At XYZ Corp, we take pride in our commitment to staying at the
          forefront of technological advancements. Our team of experts is ready
          to collaborate with you to tackle your most complex challenges and
          drive your success.
        </p>
        <Button buttonText="Learn More" buttonStyle="learn-button" />
      </div>
    </main>
  );
}

function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Premium Bluetooth Headphones</h3>
            <p className="product-price">2,400 Baht</p>
            <Button buttonText="Add to Cart" buttonStyle="add-to-cart-button" />
          </div>
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Classic Leather Watch</h3>
            <p className="product-price">4,000 Baht</p>
            <Button buttonText="Add to Cart" buttonStyle="add-to-cart-button" />
          </div>
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Organic Green Tea</h3>
            <p className="product-price">79.99 Baht</p>
            <Button
              buttonText="Add to Cart"
              buttonStyle="add-to-cart-button-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}

function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
