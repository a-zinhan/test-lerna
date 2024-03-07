'use strict';

import { makeBuilding } from "p-building";
export function makeStreet(buildingsCount: number, floors: number = 5): string {
  // return 'Hello from pStreet';
  return `Biuld a street with ${buildingsCount} of ${makeBuilding(floors)}`;
}
