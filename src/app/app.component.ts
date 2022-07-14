import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  s1 = `
<div>
  <action-spinner></action-spinner>
</div>
<div>
  <action-spinner size="2"></action-spinner>
</div>
  `;
  s2 = `
<div style="background-color: purple; color: white;">
  <action-spinner size="9"></action-spinner>
</div>
  `;

  s3 = `
<div style="background-color: black; color:gold;">
  <loading-bar>Loading...</loading-bar>
</div>
<div>
  <loading-bar size="1.5">Loading...</loading-bar>
</div>
  `;
  s4 = `
<div style="color:red;">
  <loading-bar size="2">
    <span style="font-size:2rem;">Validating ...</span>
  </loading-bar>
</div>
  `;
  s5 = `
<h1>Title1
  <action-spinner size="1.5"></action-spinner>
</h1>
<h2>Title2
  <action-spinner size="1.25"></action-spinner>
</h2>
<h3>Title3
  <action-spinner></action-spinner>
</h3>
  `;
  s6 = `
<button type="button" class="btn btn-primary">Submit
  <action-spinner></action-spinner>
</button>
<button type="button" class="btn ">
  <loading-bar>Uploading...</loading-bar>
</button>
<button type="button" class="btn btn-primary">
  <loading-bar>Uploading...</loading-bar>
</button>
  `;
  s7 = `
<uiowa-ring></uiowa-ring>   // default size = 4rem
<uiowa-ring size="2"></uiowa-ring>
  `;
  s8 = `
<div style="height: 100px">
  <loading-placeholder></loading-placeholder>
</div>
  `;
}
