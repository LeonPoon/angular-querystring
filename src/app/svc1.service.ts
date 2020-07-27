import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {

  constructor(route: ActivatedRoute) {
    this.onQueryParamMap('construct Svc1Service route.snapshot.queryParamMap', route.snapshot.queryParamMap);
    route.queryParamMap.subscribe(this.onQueryParamMap.bind(this, 'onnext'));
  }

  onQueryParamMap(msg: string, paramMap: ParamMap): void {
    console.log(msg, paramMap.keys.map((k) => `${k} => ${JSON.stringify(paramMap.getAll(k))}`));
  }
}
