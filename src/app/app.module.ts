import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Logo }  from './components/logo.component';

import { PageAbout }  from './components/pageAbout.component';
import { PageBuild }  from './components/pageBuild.component';
import { PageFeed }  from './components/pageFeed.component';
import { PageInfo }  from './components/pageInfo.component';
import { PageIntro }  from './components/pageIntro.component';
import { PagePeople }  from './components/pagePeople.component';
import { RightBars } from './components/rightBars.component';


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
  	Logo,
  	RightBars
  ],
  bootstrap: [
	PageAbout,
	PageBuild,
	PageFeed,
	PageInfo,
	PageIntro,
	PagePeople,
	Logo,
	RightBars
  ]
})
export class AppModule { }
