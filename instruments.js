var grids = [1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/24, 1/12, 1/6, 1/3, 2/3]

module.exports = {
  drums: {
    grids: [1/32, 1/16, 1/16, 1/8, 1/8, 1/4, 1/4, 1/2, 1, 1, 2, 2, 1/3, 1/6, 1/6, 1/12, 1/24],
    legato: true,
    notes: [30,31,32,33],
    channel: 144,
    color: '#6CC'
  },

  pad: {
    grids: [1/4, 1/8],//[1/16, 1/32, 1/24, 1/12, 1/6, 1/3],
    legato: true,
    notes: [48,50,52,53,55,52,57,60],//55,57,60,62,64,67,69],//,72,74,76,79,81],
    channel: 145,
    color: '#66C'
  },

  bass: {
    grids: [1/8, 1/4],
    notes: [36,48, 38, 50, 40, 52, 41, 53],
    channel: 146,
    color: '#C6C'
  },

  lead: {
    grids: grids,
    notes: [72,74,76,79,81,84,86,88,91,93],//,96,98,100,103,105,106,94,82,70],
    channel: 147,
    color: '#CCC'
  }
};
