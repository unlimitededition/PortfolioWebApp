import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// About Page
import { PageAbout }  from './components/pageAbout.component';

// Build Page
import { PageBuild }  from './components/pageBuild.component';

// Feed Page
import { PageFeed }  from './components/pageFeed.component';

// Info Page
import { PageInfo }  from './components/pageInfo.component';

// Intro Page
import { PageIntro }  from './components/pageIntro.component';
import { Logo }  from './components/logo.component';

// People Page
import { PagePeople }  from './components/pagePeople.component';


@NgModule({
  imports: [
  	BrowserModule,
  	BrowserAnimationsModule
  ],
  declarations: [
  	PageAbout,
  	PageBuild,
  	PageFeed,
  	PageInfo,
  	PageIntro,
  	PagePeople,
  	Logo
  ],
  bootstrap: [
	PageAbout,
	PageBuild,
	PageFeed,
	PageInfo,
	PageIntro,
	PagePeople,
	Logo
  ]
})
export class AppModule { }
