import { Component, OnInit } from '@angular/core';
import { AuthentificateService } from '../../../services/authentificate.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthentificateService) { }

  ngOnInit() {
  }

  signWithGithub() {
    this.authService.githubLogin();
  }

}
