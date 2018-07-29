import React from "react";
import ReactDOM from "react-dom";
import UIkit from 'uikit';
//uikit css is included in index.scss
import './scss/index.scss';

const testTemplate = <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
      <div>
            <div class="uk-card uk-card-primary uk-card-body">
                  <h3 class="uk-card-title">Hello World</h3>
                  <p>Test, test 1,2,3 houston do you copy?</p>
            </div>
      </div>
</div>;

const documentRoot = document.getElementById("app");

ReactDOM.render(testTemplate, documentRoot);
