class Set{
    constructor(){
        this.items = [];
    }

    add(item){
        if(!this.has(item)){
            this.items.push(item);
        }
    }

    remove(item){
        if(this.has(item)){
            this.items.splice(this.items.indexOf(item),1);
        }
    }

    has(item){
        return this.items.indexOf(item) !== -1;
    }

    clear(){
        this.items = [];
    }

    size(){
        return this.items.length;
    }

    values(){
        return this.items;
    }

    union(otherSet){
        let unionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    intersection(otherSet){
        let intersectionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    difference(otherSet){

        let differenceSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    subset(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                return false;
            }
        }
        return true;
    }

    toString(){
        return this.items.toString();
    }


}


let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

mySet.remove(2);

console.log(mySet.values()) // [1, 2, 3]