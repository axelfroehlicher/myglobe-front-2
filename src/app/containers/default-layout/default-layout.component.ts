import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { navItems } from './../../_nav';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  authStatus: boolean;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
              private router: Router,
              private authService: AuthService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm', ignoreBackdropClick: true });
  }

  confirm(): void {
    this.modalRef.hide();
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    setTimeout(
      () => {
        this.router.navigate(['/login']);
      }, 500
    );
  }

  decline(): void {
    this.modalRef.hide();
  }
}
