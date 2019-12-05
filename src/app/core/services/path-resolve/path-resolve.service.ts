import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoutesService } from '../routes/routes.service';

@Injectable({
  providedIn: 'root'
})
export class PathResolveService implements Resolve<string | null> {
  constructor(private paths: RoutesService) {

  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | null {
    const paths = this.paths.getRoutes();
    const typoPath = state.url.replace('/', '');
    const threshold = this.getThreshold(typoPath);
    const dictionary = Object.keys(paths)
      .filter(path => Math.abs(path.length - typoPath.length) < threshold);

    if (!dictionary.length) { return null; }

    this.sortByDistances(typoPath, dictionary);
    return `/${dictionary[0]}`;
  }

  getThreshold(path: string): number {
    if (path.length < 5) { return 3; }
    return 5;
  }

  sortByDistances(typoPath: string, dictionary: string[]) {
    const pathsDistance = {} as { [name: string]: number };

    dictionary.sort((a, b) => {
      if (!(a in pathsDistance)) {
        pathsDistance[a] = this.levenshtein(a, typoPath);
      }
      if (!(b in pathsDistance)) {
        pathsDistance[b] = this.levenshtein(b, typoPath);
      }

      return pathsDistance[a] - pathsDistance[b];
    });
  }
  levenshtein(a: string, b: string): number {
    if (a.length === 0) {
      return b.length;
    }
    if (b.length === 0) {
      return a.length;
    }

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1, // deletion
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }
}
