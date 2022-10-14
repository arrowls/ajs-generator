export default class Team {
  constructor() {
    this.team = ['Person object 1', 'Person object 2', 'Person object 3', '...'];
  }

  [Symbol.iterator]() {
    const last = this.team.length - 1;
    const team = [...this.team];
    let current = -1;

    return {
      next() {
        current += 1;
        if (current <= last) {
          return {
            value: team[current],
            done: false,
          };
        }

        return {
          done: true,
        };
      },
    };
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = this.team.length - 1;
    while (current <= last) {
      yield this.team[current];
      current += 1;
    }
  }
}
