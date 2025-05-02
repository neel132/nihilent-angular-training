import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
@Directive({
  standalone: true,
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}