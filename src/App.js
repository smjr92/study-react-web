import React, { useState, useEffect } from "react";
import "./Global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologia</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latidude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/45772955?s=460&u=fbc30960b8acc44331f814f1651721fed0d6367e&v=4"
                alt="avatar"
              />
              <div className="user-info">
                <strong>Sergio Jr</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <a href="https://github.com/smjr92"> Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/45772955?s=460&u=fbc30960b8acc44331f814f1651721fed0d6367e&v=4"
                alt="avatar"
              />
              <div className="user-info">
                <strong>Sergio Jr</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <a href="https://github.com/smjr92"> Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/45772955?s=460&u=fbc30960b8acc44331f814f1651721fed0d6367e&v=4"
                alt="avatar"
              />
              <div className="user-info">
                <strong>Sergio Jr</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <a href="https://github.com/smjr92"> Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/45772955?s=460&u=fbc30960b8acc44331f814f1651721fed0d6367e&v=4"
                alt="avatar"
              />
              <div className="user-info">
                <strong>Sergio Jr</strong>
                <span>ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <a href="https://github.com/smjr92"> Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
