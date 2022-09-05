import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hi() {
  return <div>
    <span className="wrapper">
    <h1 className="hdg1">CV</h1>
    <h2 className="hdg2">Laila Afzaal</h2>
    <h3>About Me:</h3>
    <hr/>
    <p className="p1">
      <ul>
        <li>
          <strong>Tel:</strong> +92 0123456789
        </li>
        <li>
          <strong>Email:</strong> lailaafzaal@gmail.com
        </li>
        <li>
          <strong>Address:</strong> 9th street, 123 Apartment, Zamzama,
          Karachi.
        </li>
      </ul>
    </p>
    <hr />
    <h3>Personal Data:</h3>
    <p>
      <ul>
        <li>
          <b>Gender</b> : Female
        </li>
        <li>
          <b>Religion</b> : Islam
        </li>
        <li>
          <b>Nationality</b> : Pakistani
        </li>
        <li>
          <b>Marital Status</b> : Unmarried
        </li>
        <li>
          <b>Date of Birth</b> : 06-June-04
        </li>
        <li>
          <b>Place of Birth</b> : Karachi
        </li>
      </ul>
    </p>
    <hr />
    <p>
      <h3>Education:</h3>
      <ul>
        <li>
          <b>2020-2021</b>: <b>Computer Science</b>
          <br />
          FSC(Intermediate) from Aisha Bawani Girls College.
        </li>
        <br />

        <li>
          <b>2019-2020</b> : <b>Computer Science</b>
          <br />
          Matric studied from (KPS)
        </li>
      </ul>
    </p>
    <hr />
    <p>
      <h3>Skills:</h3>
      <ul>
        <li>
          <b>HTML5</b>
        </li>
        <li>
          <b>CSS3</b>
        </li>
        <li>
          <b>Javascipt (ES6)</b>
        </li>
        <li>
          <b>Node js</b>
        </li>
        <li>
          <b>React js</b>
        </li>
      </ul>
    </p>
    <p>
      <h3>Languages</h3>
      <ul>
        <li><b>English</b></li>
        <li><b>Urdu</b></li>
      </ul>
    </p>
  </span></div>;
}

//coded by @laila-afzaal

ReactDOM.render(<Hi />, document.querySelector('#root'));
