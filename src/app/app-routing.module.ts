import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './guards/admin.guard';
import { CustomPreloadService } from './services/custom-preload.service';
import { NotFoundComponent } from './share/not-found/not-found.component';


const routes: Routes = [
  
  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule), data: { preload: true } },
  { path: 'cms', canActivate: [AdminGuard], loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
