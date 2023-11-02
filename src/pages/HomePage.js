import dragonImg from "../media/images/dragon.png";

const HomePage = () => {
  return (
    <main className="container">
      <div className="homepage">
        <article>
          <h2>Hello and welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            iaculis a lacus at venenatis. Suspendisse faucibus, nulla id lacinia
            rhoncus, nunc massa congue sem, non lobortis lectus turpis ac diam.
            Maecenas consequat maximus elit, vitae venenatis diam laoreet ut.
            Nam blandit diam eget pharetra mattis. In efficitur cursus eros at
            sodales. Ut libero enim, gravida sit amet tortor sit amet, vehicula
            molestie sapien. Donec sit amet leo et ligula lobortis viverra vel
            quis ipsum. Aenean vitae sapien eget dui molestie placerat. Etiam
            congue est id malesuada suscipit. Nullam ac libero nec nibh suscipit
            tempus sed quis dui.
          </p>
        </article>
        <aside>
          <img src={dragonImg} alt="origami of a dragon" />
        </aside>
      </div>
    </main>
  );
};

export default HomePage;
