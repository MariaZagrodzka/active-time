// @flow

import React from 'react'

const Offer = () => (
  <div className="offer">
    <article className="offer--content">
      <h1 className="offer--title">nasza oferta</h1>
      <div className="border" />
      <h3>W naszej ofercie mamy do zaproponowania:</h3>
      <lu>
        <li>
          Zespoł muzyczny 2-5 osobowe na wszelkie imprezy okolicznościowe w tym
          bale, dyskoteki, studniówki, wesela, bankiety itp.
        </li>
        <li>Aranżacje myzyczne do bajek, filmów, karaoke itp.</li>
        <li>
          Naukę muzyki w tym: kształcenie słuchu, dyktanda muzyczne, pianino,
          gitara, fortepian itp.
        </li>
        <li>Covery znanych utworów.</li>
      </lu>
      <br />
      <p>
        Wszystko to w bardzo przystepnej cenie. Na wszelkie pytania odpowiadamy
        drogą mailową lub telefoniczną.{' '}
      </p>
    </article>
    <style jsx>{`
      .offer {
        position: relative;
        height: 100%;
        width: 100%;
      }

      .offer--content {
        margin: 5em 10%;
      }

      .offer--title {
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

export default Offer
