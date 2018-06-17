// @flow

import React from 'react'

const Contact = () => (
  <div className="contact">
    <article className="contact--content">
      <h1 className="contact--title">kontakt</h1>
      <div className="border" />
      <h3>
        Z chęcią odpowiemy na wszystkie możliwe pytania. Jesteśmy dostępni w
        godzinach 8:00-20:00 pod adresem:
      </h3>
      <p>Ul.Bździągwa 45, m.10</p>
      <p>01-010, Warszawa</p>
      <p>Numer kontaktowy: 123455678</p>
      <p>mail: blablbal@gh.pl</p>
      <br />
      <p>Serdecznie zachęcamy do kontaktu! </p>
    </article>
    <style jsx>{`
      .contact {
        position: relative;
        height: 100%;
        width: 100%;
      }

      .contact--content {
        margin: 5em 10%;
      }

      .contact--title {
        text-transform: uppercase;
      }

      .border {
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)50%,
          rgba(0, 0, 0, 0)
        );
      }
    `}</style>
  </div>
)

export default Contact
