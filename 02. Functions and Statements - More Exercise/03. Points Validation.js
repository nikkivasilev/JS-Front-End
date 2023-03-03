function distanceValidation(pointArr) {
    const [x1, y1, x2, y2] = pointArr;

    const distance1 = Math.sqrt(x1 * x1 + y1 * y1);
    const distance2 = Math.sqrt(x2 * x2 + y2 * y2);
    const distance3 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    const isDistance1Valid = Number.isInteger(distance1);
    const isDistance2Valid = Number.isInteger(distance2);
    const isDistance3Valid = Number.isInteger(distance3);

    if (isDistance1Valid) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (isDistance2Valid) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }if (isDistance3Valid) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

distanceValidation([3, 0, 0, 4])
distanceValidation([2, 1, 1, 1])