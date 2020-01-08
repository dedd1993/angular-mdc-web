// This import does not have any type definitions.
const gulpRunSequence = require('gulp4-run-sequence');

/** Create a task that's a sequence of other tasks. */
export function sequenceTask(...args: any[]) {
  return (done: any) => {
    gulpRunSequence(
      ...args,
      done
    );
  };
}
