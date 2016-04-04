const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const MOVES = [
  { name: 'Burpees' },
  { name: 'Thrusters' },
  { name: 'Pull-ups' },
  { name: 'Jerks' },
  { name: 'Toes-to-bars' },
  { name: 'Double-unders' },
  { name: 'Box jumps' },
  { name: 'Muscle-ups' },
  { name: 'Wall balls' },
  { name: 'Cleans' },
  { name: 'Snatches' },
  { name: 'Deadlifts' },
  { name: 'Push-ups' },
  { name: 'Overhead Squats' },
  { name: 'Sit-ups' },
  { name: 'Back squats' },
  { name: 'Kettlebell swings' },
  { name: 'Jumping jacks' },
  { name: 'Lunges' },
  { name: 'Chest-to-bars' },
  { name: 'Bar Muscle-ups' },
  { name: 'Air squats' },
  { name: 'Ring dips' },
  { name: 'Pistols' },
  { name: 'Shoulder press' },
  { name: 'Burpee boxjumps' },
  { name: 'Front squats' }
];

const alphaScore = (position, char, occurences) => {
  return Math.ceil((1.0 / (position * occurences)) * 100);
};

const countChars = (string) => {
  return string.split('').reduce(function (prev, curr) {
    if (!prev.hasOwnProperty(curr)) {
      prev[curr] = 1;
    } else {
      prev[curr] += 1;
    }
    return prev;
  }, {});
};

export const getMovement = (string, opts) => {
  const items = countChars(string);
  return string.split('').map(char => {
    const position = ALPHABET.indexOf(char.toLowerCase());
    if (position === -1) return {};
    return {
      ...MOVES[position],
      amount: alphaScore(position + 1, char, items[char])
    };
  });
};
