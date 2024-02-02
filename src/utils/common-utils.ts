export class IncrementalID {
    private id = 0;
    getId() {
        return this.id++;
    }
}