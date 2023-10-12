"use strict";
// Enum är en namngiven konstant med två värden
// Namnet och en "[numerisk]" värde representation.
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
const supportStatus = 0 /* SupportStatus.NEW */;
function isSolved(status) {
    return status === 2 /* SupportStatus.SOLVED */;
}
isSolved(1 /* SupportStatus.PENDING */);
// isSolved("FINISHED");
