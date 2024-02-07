export class Err extends Error {
  status?: number;

  constructor(message: string) {
    super(message);
  }

  setStatus(code: number) {
    this.status = code;
  }
}
