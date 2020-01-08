import {task} from 'gulp';
import {composeRelease} from '../build-release';
import {inlineResourcesForDirectory} from '../inline-resources';
import {sequenceTask} from './sequence-task';
import {BuildPackage} from '../build-package';

/** Creates a set of gulp tasks that can build the specified package. */
export function createPackageBuildTasks(buildPackage: BuildPackage, preBuildTasks: string[] = []) {
  // Name of the package build tasks for Gulp.
  const taskName = buildPackage.name;

  // Name of all dependencies of the current package.
  const dependencyNames = buildPackage.dependencies.map(p => p.name);

  /**
   * Main tasks for the package building. Tasks execute the different sub-tasks in the correct
   * order.
   */
  task(`${taskName}:clean-build`, sequenceTask('clean', `${taskName}:build`));

  task(`${taskName}:build`, sequenceTask(
    'clean',
    // Run the pre build gulp tasks.
    ...preBuildTasks,    // Build all required packages before building.
    ...dependencyNames.map(pkgName => `${pkgName}:build`),
    // Build ESM output.
    `${taskName}:build:esm`,
    // Inline assets into ESM output.
    `${taskName}:assets:inline`,
    // Build bundles on top of inlined ESM output.
    `${taskName}:build:bundles`
  ));

  /**
   * Release tasks for the package. Tasks compose the release output for the package.
   */
  //task(`${taskName}:build-release`, [`${taskName}:build`], () => composeRelease(buildPackage));

  /**
   * TypeScript compilation tasks. Tasks are creating ESM, FESM, UMD bundles for releases.
   */
  task(`${taskName}:build:esm`, () => buildPackage.compile());

  task(`${taskName}:build:bundles`, () => buildPackage.createBundles());

  task(`${taskName}:assets:inline`, () => inlineResourcesForDirectory(buildPackage.outputDir));
}
