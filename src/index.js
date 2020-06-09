import React from 'react';
import ReactDOM from 'react-dom';

import LightSwitch from './components/LigthSwitch'
import ClicketyClick from './components/ClickityClick'
import ButtonCounter from './components/ButtonCounter';

ReactDOM.render(
  <div>
    <ClicketyClick/>
    <LightSwitch/>
    <ButtonCounter/>
  </div>,
  document.getElementById('root')
);
