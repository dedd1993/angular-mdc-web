import {src, task} from 'gulp';
import {composeRelease} from '../build-release';
import {inlineResourcesForDirectory} from '../inline-resources';
import {buildConfig} from '../build-config';
import {BuildPackage} from '../build-package';

const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence').use(gulp);
const gulpClean = require('gulp-clean');

/** Delete files. */
export function cleanTask(glob: string) {
  return () => src(glob, {read: false, allowEmpty: true}).pipe(gulpClean(null));
}

/** Creates a set of gulp tasks that can build the specified package. */
export function createPackageBuildTasks(buildPackage: BuildPackage) {
  // Name of the package build tasks for Gulp.
  const taskName = buildPackage.name;

  // Name of all dependencies of the current package.
  const dependencyNames = buildPackage.dependencies.map(p => p.name);

  console.log(buildPackage)

  /** Deletes the dist/ directory. */
  task('clean', cleanTask(buildConfig.outputDir));

  /**
   * Main tasks for the package building. Tasks execute the different sub-tasks in the correct
   * order.
   */
  task(`${taskName}:build`, () =>
    runSequence(
      'clean',
      // Build all required packages before building.
      ...dependencyNames.map(pkgName => `${pkgName}:build`),
      // Build ESM output.
      `${taskName}:build:esm`,
      // Inline assets into ESM output.
      `${taskName}:assets:inline`,
      // Build bundles on top of inlined ESM output.
      `${taskName}:build:bundles`
    ));

  /**
   * TypeScript compilation tasks. Tasks are creating ESM, FESM, UMD bundles for releases.
   */
  task(`${taskName}:build:esm`, () => buildPackage.compile());

  task(`${taskName}:build:bundles`, () => buildPackage.createBundles());

  task(`${taskName}:assets:inline`, () => inlineResourcesForDirectory(buildPackage.outputDir));

  /**
   * Release tasks for the package. Tasks compose the release output for the package.
   */
  // task(`${taskName}:build-release`, [`${taskName}:build`], () => composeRelease(buildPackage));
}
