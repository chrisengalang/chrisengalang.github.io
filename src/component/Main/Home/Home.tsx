import "./home.css";

const Home = () => {
  return (
    <div className="home vh-100">
      <div className="header">
        <h1>
          Hi, my name is <strong>Chrisen John Abraham Galang.</strong>
        </h1>
        <h1>
          I'm a software engineer specializing in <strong>back-end</strong> web
          development.
        </h1>
      </div>
      <div className="skills-intro">
        <div>
          <h2>Backend Web Development</h2>
          <br />
          <article>
            <p>
              I specialize in backend web development written in Java,
              specifically Spring Boot, with 8 years of experience in the field.
              My recent experience includes:
            </p>
            <br />
            <ul>
              <li>
                Lead engineer in migrating application from current platform to
                Azure.
              </li>
              <li>
                Migrating publisher and consumer applications from RabbitMQ to
                Azure Service Bus
              </li>
              <li>
                Contract-first development of REST microservices using Open API
                Specifications.
              </li>
            </ul>
          </article>
        </div>
        <div>
          <h2>Noteworthy Endeavors</h2>
          <br />
          <article>
            <h3>Front-end web development</h3>
            <p>
              I'm currently working on upskilling to be a full-stack web
              engineer. I started with Angular creating a prototype of a parking
              registration application for my current employer.
            </p>
            <br />
            <h3>Machine Learning</h3>
            <p>
              I've recently gotten into learning machine learning. Instead of
              going straight in to coding, I decided to begin with its
              mathematical roots, linear algebra, statistics, etc. My vision for
              the future is to be able to blend my software development skills
              with machine learning and create something useful for our small
              community.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
