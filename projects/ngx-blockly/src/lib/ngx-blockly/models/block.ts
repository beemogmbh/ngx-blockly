export abstract class Block {

    private _block: any;
    private _name: string;
    private _categories: string[];

    constructor(name: string, categories: string[]) {
        this._name = name;
        this._categories = categories;
    }

    public init(block: any) {
        this.block = block;
        this.defineBlock();
    }

    public abstract defineBlock();

    public toDartCode(): string | any[] {
        return 'Not implemented';
    }

    public toJavaScriptCode(): string | any[] {
        return 'Not implemented';
    }

    public toLuaCode(): string | any[] {
        return 'Not implemented';
    }

    public toPHPCode(): string | any[] {
        return 'Not implemented';
    }

    public toPythonCode(): string | any[] {
        return 'Not implemented';
    }


    get block() {
        return this._block;
    }

    set block(value) {
        this._block = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get categories(): string[] {
        return this._categories;
    }

    set categories(value: string[]) {
        this._categories = value;
    }
}
