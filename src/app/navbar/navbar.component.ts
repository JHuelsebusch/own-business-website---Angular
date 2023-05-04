import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
isMenuOpen = false;

menuLinks = [{
  href: "#home",
  name: "Home",
},{
  href: "#service",
  name: "Service"
},{
  href: "#labs",
  name: "Labore"
},{
  href: "#about",
  name: "About"
},{
  href: "#partner",
  name: "Partner"
}]

toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}
closeMenu() {
  this.toggleMenu();
  const checkbox = document.getElementById('check',) as HTMLInputElement | null;
  if(checkbox != null){
    checkbox.checked = false;
  }
}}
