export enum EGameState{
	OPEN,
	RUNNING,
}

class Game{
	_state = EGameState.OPEN;
	get state(){return this._state;}
	
	constructor(p0:string|null){
		if(!p0)
			return;
		const obj:Record<string,any> = JSON.parse(p0);
		Object.assign(this, obj);
	}
}

export default Game;