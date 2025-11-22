import { Component } from '@angular/core';
import {
  ActionSpinner,
  LoadingBar,
  LoadingPlaceholder,
  UiowaRing,
} from '../../projects/uiowa/spinner/src/public-api';

@Component({
  selector: 'app-root',
  imports: [ActionSpinner, LoadingBar, LoadingPlaceholder, UiowaRing],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  s1 = `
<div>
  <action-spinner />
</div>
<div>
  <action-spinner size="2" />
</div>
  `;
  s2 = `
<div style="background-color: purple; color: white;">
  <action-spinner size="9" />
</div>
  `;

  s3 = `
<div style="background-color: black; color:gold;">
  Loading... <loading-bar />
</div>
<div>
  Loading... <loading-bar size="1.5" />
</div>
  `;
  s4 = `
<div style="color:red;">
  <span style="font-size:2rem;">Validating ...</span>
  <loading-bar size="2" />
</div>
  `;
  s5 = `
<h1>Title1 <action-spinner size="1.5" /></h1>
<h2>Title2 <action-spinner size="1.25" /></h2>
<h3>Title3 <action-spinner /></h3>
  `;
  s6 = `
<button type="button" class="btn btn-primary">Submit <action-spinner /></button>
<button type="button" class="btn">Uploading... <loading-bar /></button>
<button type="button" class="btn btn-primary">Uploading... <loading-bar /></button>
  `;
  s7 = `
<uiowa-ring />   // default size = 4rem
<uiowa-ring size="2" />
  `;
  s8 = `
<div style="height: 100px">
  <loading-placeholder />
</div>
  `;
}
