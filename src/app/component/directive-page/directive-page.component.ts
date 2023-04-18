import { Component } from '@angular/core';
import { User } from 'src/app/service/user.service';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.scss']
})
export class DirectivePageComponent {

  // ================================ngClass===============================
  // ngClass 단일 프로퍼티
  isSpecial: boolean = true
  canSave: boolean = true
  isUnchanged: boolean = true

  // ngClass 복수 프로퍼티
  currentClasses: Record<string, boolean> = {};
  setCurrentClasses() {
    // CSS 클래스는 컴포넌트 프로퍼티 값에 따라 추가되거나 제거됩니다.
    this.currentClasses =  {
      saveable: this.canSave,
      modified: this.isUnchanged,
      special:  this.isSpecial
    };
  }
  // ================================+++++++===============================

  // 초기 실행
  ngOnInit() {
    this.setCurrentClasses();
  }
}
