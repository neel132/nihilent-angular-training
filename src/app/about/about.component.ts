import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private route = inject(ActivatedRoute);
  ngOnInit() {
    console.log(Number(this.route.snapshot.paramMap.get('id')));
  }
}
