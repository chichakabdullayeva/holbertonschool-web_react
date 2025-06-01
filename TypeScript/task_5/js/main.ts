// Define MajorCredits interface with branded property
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Define MinorCredits interface with branded property
interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// sumMajorCredits takes two MajorCredits and returns MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// sumMinorCredits takes two MinorCredits and returns MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}

// Example usage (optional)
const major1: MajorCredits = { credits: 10, brand: 'Major' };
const major2: MajorCredits = { credits: 20, brand: 'Major' };

const minor1: MinorCredits = { credits: 5, brand: 'Minor' };
const minor2: MinorCredits = { credits: 7, brand: 'Minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 30, brand: 'Major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 12, brand: 'Minor' }

