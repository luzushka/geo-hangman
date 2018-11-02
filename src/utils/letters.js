export default [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

export const getAllIndexes = (arr,val) =>{
    let indexes = [];
    arr.forEach((member, index)=>{
        if (member===val) indexes.push(index);
    })
    return indexes;
}