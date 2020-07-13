import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@HostBinding() class = 'app-header';
}
