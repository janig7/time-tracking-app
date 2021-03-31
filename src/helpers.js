export default class Helpers {
  newTimer = (attrs = {}) => {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      elapsed: 0,
    };

    return timer;
  };

  findById(arr, id, cb) {
    arr.forEach(el => {
      if (el.id === id) {
        cb(el);
        return;
      }
    });
  }
  millisecondsToHuman = ms => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 100 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  };

  pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  };

  renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return this.millisecondsToHuman(totalElapsed);
  };
}
