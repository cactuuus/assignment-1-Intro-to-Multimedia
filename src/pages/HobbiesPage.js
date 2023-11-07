import foxImg from "../media/images/fox.png";
import pikachuImg from "../media/images/pikachu.png";
import deerImg from "../media/images/deer.png";

const HobbiesPage = () => {
  return (
    <main>
      <div className="hobbies">
        <section className="hobbies-section">
          <div>
            <h2>Let me tell you all about origami...</h2>
            <p>
              Origami is more than just a hobby; it's a lifestyle, a sanctuary
              where imagination meets precision. It's a journey that continually
              evolves, offering solace, creativity, and an endless adventure
              through the delicate art of folding paper. For me, origami isn't
              just about creating beautiful shapes; it's about embracing a
              serene state of mind through an art form that has endured through
              time.
            </p>
          </div>
          <img
            className="image-1 origami"
            src={foxImg}
            alt="origami of a fox"
          />
        </section>
        <hr />
        <section className="hobbies-section">
          <img
            className="image-2 origami"
            src={deerImg}
            alt="origami of a deer"
          />
          <div>
            <h3>Origins and History</h3>
            <p>
              Origami's roots trace back to ancient Japan, where it was
              initially a ceremonial art, used in religious rituals. Over time,
              it transitioned into a form of entertainment and eventually gained
              worldwide recognition. The precise history of origami is somewhat
              elusive, but it's believed to have evolved around the 17th century
              and has since flourished into a revered art form. Its origins in
              Japan hold a deep cultural significance, where the delicate
              folding of paper was often associated with spiritual meanings and
              symbols.
            </p>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <h3>Techniques and Styles</h3>
            <p>
              The techniques of origami are as diverse as they are enchanting.
              From the fundamental folds to more complex modular designs, each
              style presents its own challenges and rewards. Simple designs,
              such as the iconic crane or intricate flower patterns, often serve
              as a gateway to the world of origami. However, as one delves
              deeper, modular origami and tessellations open up a whole new
              realm of creative possibilities. The precision of each fold and
              the interconnectedness of multiple units in modular origami never
              fails to mesmerize.
            </p>
          </div>
        </section>
        <img
          className="image-3 origami"
          src={pikachuImg}
          alt="origami of a pikachu"
        />
      </div>
    </main>
  );
};

export default HobbiesPage;
