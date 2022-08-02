
const getMiddle = (str) => {
    const lght = str.length;
    if (lght % 2 === 0) {
        console.log(str.slice(lght / 2 - 1, lght / 2 + 1));
    } else {
        return str[Math.ceil(lght / 2) - 1];
    }
};

getMiddle("hellowword");