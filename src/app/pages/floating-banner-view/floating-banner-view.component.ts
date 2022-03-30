import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-banner-view',
  template: `
    <div class="banner">
      <div>
          <div>
              <div>
                  <div>
                      <div>
                          <div>
                              <div>
                                  <div>
                                      <marquee>A floating banner text which keeps on rotating</marquee>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>`,
  styleUrls: ['./floating-banner-view.component.scss']
})
export class FloatingBannerViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
