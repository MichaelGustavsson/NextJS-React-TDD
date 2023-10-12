// Enum är en namngiven konstant med två värden
// Namnet och en "[numerisk]" värde representation.

// const NEW: string = 'new';
// const PENDING: string = 'pending';
// const SOLVED: string = 'solved';
// const CLOSED: string = 'closed';

// enum SupportStatus {
//   NEW,
//   PENDING,
//   SOLVED,
//   CLOSED,
// }

const enum SupportStatus {
  NEW,
  PENDING,
  SOLVED,
  CLOSED,
}

// enum SupportStatus {
//   NEW = 10,
//   PENDING,
//   SOLVED,
//   CLOSED,
// }

// enum SupportStatus {
//   NEW = 10,
//   PENDING = 15,
//   SOLVED = 20,
//   CLOSED = 25,
// }

// enum SupportStatus {
//   NEW = 'new',
//   PENDING = 'pending',
//   SOLVED = 'solved',
//   CLOSED = 'closed',
// }

const supportStatus = SupportStatus.NEW;

function isSolved(status: SupportStatus): boolean {
  return status === SupportStatus.SOLVED;
}

isSolved(SupportStatus.PENDING);
// isSolved("FINISHED");
