import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  public map: google.maps.Map;
  public _markers: any;
  public lat: number;
  public lng: number;
  public width = '100%';
  public height = '540px';
  public _keyToSearch: any;


  @ViewChild('gmap', { static: true }) gmapElement: any;

  @Input()
  public set keyToSearch(key) {
    if (key !== '') {
      this.getLngLat(key);
      this._keyToSearch = key;
    }
  }

  public get keyToSearch() {
    return this._keyToSearch;
  }

  @Input()
  public set markers(data: any) {
    if (data) {
      this._markers = data;
      this.generateMap();
      // this.setMarkers(this.map);
    }
  }

  public get markers() {
    return this._markers;
  }

  constructor() { }

  ngOnInit() {
    this.getLngLat('india');
  }

  /**
   * get lat and lng
   * @param keySearch search
   */

  public getLngLat(keySearch) {
    const geocoder = new google.maps.Geocoder();
    // var address = "Bangalore";
    geocoder.geocode({ address: keySearch }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.lat = results[0].geometry.location.lat();
        this.lng = results[0].geometry.location.lng();
        if (this.lat && this.lng) {
          this.generateMap();
        }
      }
    });
  }

  /**
   * generate map
   */

  public generateMap() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 4,
      center: { lat: this.lat, lng: this.lng },
    });

    if (this._markers.length > 0) {
      this.setMarkers(this.map);
    }
  }

  /**
   * draw markers on map
   * @param map map
   */

  public setMarkers(map) {

    // here can add the image which needs
    const image = {
      url: '../assets/images/map-pointer.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(30, 35),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    for (let i = 0; i < this._markers.length; i++) {
      // var beach = this._markers[i];
      const marker = new google.maps.Marker({
        position: { lat: +this._markers[i].lat, lng: +this._markers[i].lng },
        map: map,
        icon: image,
        label: this._markers.length === 1 ? this._markers[i].city : '',
        shape: {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        },
      });
    }
  }
}
