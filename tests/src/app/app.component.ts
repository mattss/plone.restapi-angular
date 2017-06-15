import { Component } from '@angular/core';
import { Traverser } from 'angular-traversal';
import { PloneViews, ConfigurationService, APIService, ResourceService } from './lib';

import { CustomViewView } from './custom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private views:PloneViews,
    private traverser: Traverser,
    private config: ConfigurationService,
    private api: APIService,
    private resource: ResourceService,
  ) {
    this.views.initialize();
    this.traverser.addView('view', '*', CustomViewView);
    this.resource.find({ portal_type: ['Document', 'Folder'] }).subscribe((res) => {
      console.log(res);
    });
  }
}
